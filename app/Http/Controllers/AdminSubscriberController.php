<?php

namespace App\Http\Controllers;

use App\Models\Subscriber;
use Illuminate\Http\Request;

class AdminSubscriberController extends Controller
{
    public function index()
    {
        return inertia('Admin/Subscriber/Index', [
            'subscribers' => Subscriber::when(request('search'), function ($query) {
                return $query->where('email', 'like', '%' . request('search') . '%');
            })->latest()->paginate(10)->withQueryString(),
            'filters' => [
                'search' => request('search'),
                'page' => request('page'),
            ]
        ]);
    }

    public function destroy(Subscriber $subscriber)
    {
        $subscriber->delete();
        return back();
    }
}
