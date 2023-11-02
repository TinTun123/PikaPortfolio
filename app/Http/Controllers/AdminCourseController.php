<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Models\Course;
use App\Traits\ManagePhoto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminCourseController extends Controller
{
    use ManagePhoto;

    public function index()
    {
        return inertia('Admin/Course/Index', [
            'courses' => Course::paginate(5),
        ]);
    }

    public function create()
    {
        return inertia('Admin/Course/Create');
    }

    public function store(StoreCourseRequest $request)
    {
        $attributes = $request->only('title', 'description', 'link', 'price', 'instructor');
        $attributes['image'] = $request->file('image')->store('courses');

        Course::create($attributes);

        return redirect()->route('admin.course.index');
    }

    public function edit(Course $course)
    {
        return inertia('Admin/Course/Create', [
            'course' => $course
        ]);
    }

    public function update(UpdateCourseRequest $request, Course $course)
    {
        $attributes = $request->only('title', 'description', 'link', 'price', 'instructor');

        if ($request->hasFile('image')) {
            $attributes['image'] = $request->file('image')->store('courses');
            $this->deletePhoto($course->image);
        }
        $course->update($attributes);
        return back()->with('success', 'Course has been updated!');
    }

    public function destroy(Course $course)
    {
        $course->delete();
        return back()->with('success', 'Course has been deleted!');
    }
}
