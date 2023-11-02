<?php

namespace App\Http\Controllers;

use App\Mail\CustomEmail;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AdminContactController extends Controller
{
    public function index()
    {
        return inertia('Admin/Contact/Index', [
            'contacts' => Contact::paginate(12),
        ]);
    }

    public function reply(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:contacts,id',
            'email' => 'required|email',
            'body' => 'required',
            'subject' => 'required|max:100',
        ]);

        Contact::find($request->id)->update(['replied' => true]);

        Mail::to($request->email)->queue(new CustomEmail(config('app.mail_sender'), $request->subject, $request->body));
        return back();
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return back();
    }
}
