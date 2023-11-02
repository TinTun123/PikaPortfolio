<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTestinmonialRequest;
use App\Http\Requests\UpdateTestimonialRequest;
use App\Models\Testimonial;
use App\Traits\ManagePhoto;
use Illuminate\Http\Request;

class AdminTestimonialController extends Controller
{
    use ManagePhoto;
    public function index()
    {
        return inertia('Admin/Testimonial/Index', [
            'testimonials' => Testimonial::paginate(10),
        ]);
    }

    public function create()
    {
        return inertia('Admin/Testimonial/Create');
    }

    public function store(StoreTestinmonialRequest $request)
    {
        $attributes = $request->only('name', 'description');
        $attributes['image'] = $request->file('image')->store('testimonials');
        Testimonial::create($attributes);
        return redirect()->route('admin.testimonial.index');
    }


    public function edit(Testimonial $testimonial)
    {
        return inertia('Admin/Testimonial/Create', [
            'testimonial' => $testimonial,
        ]);
    }

    public function update(UpdateTestimonialRequest $request, Testimonial $testimonial)
    {
        $attributes = $request->only('name', 'description');
        if($request->hasFile('image')){
            $attributes['image'] = $request->file('image')->store('testimonials');
            $this->deletePhoto($testimonial->image);
        }
        $testimonial->update($attributes);
        return back();
    }

    public function destroy(Testimonial $testimonial)
    {
        $testimonial->delete();
        return redirect()->route('admin.testimonial.index');
    }

}
