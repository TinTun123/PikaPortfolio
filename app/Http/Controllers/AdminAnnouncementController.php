<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAnnouncementRequest;
use App\Mail\CustomEmail;
use App\Models\Announcement;
use App\Models\Course;
use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AdminAnnouncementController extends Controller
{
    public function index()
    {
        return inertia('Admin/Announcement/Index', [
            'announcements' => Announcement::paginate(10),
        ]);
    }

    public function store(StoreAnnouncementRequest $request)
    {
        $attributes = $request->only('body', 'subject');
        Announcement::create($attributes);

        Subscriber::chunk(200, function ($subscribers) use ($request) {
            foreach ($subscribers as $subscriber) {
                Mail::to($subscriber->email)->queue(new CustomEmail(config('app.mail_sender'), $request->subject, $request->body));
            }
        });
        return back();
    }

    public function destroy(Announcement $announcement)
    {
        $announcement->delete();
        return back();
    }
}
