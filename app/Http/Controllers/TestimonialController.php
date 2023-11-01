<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function index()
    {
        return inertia('User/Testimonial',[
            'testimonials' => Testimonial::latest()->limit(10)->get(),
        ]);
    }
}
