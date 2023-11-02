<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        return inertia('User/Course', [
            'courses' => Course::when(request('search'), function ($query) {
                return $query->where('title', 'like', '%' . request('search') . '%')
                    ->orWhere('description', 'like', '%' . request('search') . '%')
                    ->orWhere('instructor', 'like', '%' . request('search') . '%');
            })->paginate(6),
            'filters' => [
                'search' => request('search')
            ]
        ]);
    }
}
