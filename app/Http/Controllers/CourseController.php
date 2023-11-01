<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        return inertia('User/Course',[
            'courses' => Course::paginate(6)
        ]);
    }
}
