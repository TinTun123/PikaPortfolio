<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Slider;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $courses = Course::limit(3)->latest()->get();
        return inertia('User/Home', [
            'courses' => $courses,
            'testimonials' => Testimonial::latest()->get(),
            'sliders' => Slider::all(),
        ]);
    }
}
