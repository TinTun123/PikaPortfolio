<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index(){
        return inertia('User/Contact');
    }

    public function store(StoreContactRequest $request)
    {
        $attributes = $request->only('name','email','phone','message');
        Contact::create($attributes);
        return back();
    }
}
