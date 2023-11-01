<?php

namespace App\Http\Controllers;

use App\Models\AboutMe;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index()
    {
        return inertia('User/About',[
            'aboutMe' => AboutMe::first(),
        ]);
    }
}
