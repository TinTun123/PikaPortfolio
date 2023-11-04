<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSubscriberRequest;
use App\Http\Requests\UpdateSubscriberRequest;
use App\Models\Subscriber;

class SubscriberController extends Controller
{


    public function store(StoreSubscriberRequest $request)
    {
        Subscriber::create(['email' => $request->email]);
        return back();
    }

}
