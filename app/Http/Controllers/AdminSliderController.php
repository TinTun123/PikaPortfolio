<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSliderRequest;
use App\Http\Requests\UpdateSliderRequest;
use App\Models\Slider;
use Illuminate\Http\Request;

class AdminSliderController extends Controller
{
    public function index()
    {
        return inertia('Admin/Slider/Index', [
            'sliders' => Slider::all(),
        ]);
    }


    public function create()
    {
        return inertia('Admin/Slider/Create');
    }


    public function store(StoreSliderRequest $request)
    {
        $attributes = $request->only('has_button', 'button_text', 'button_link');
        $attributes['image'] = $request->file('image')->store('sliders');

        Slider::create($attributes);
        return redirect()->route('admin.slider.index')->with('success', 'Slider has been created');
    }

    public function edit(Slider $slider)
    {
        return inertia('Admin/Slider/Create', [
            'slider' => $slider,
        ]);
    }

    public function update(UpdateSliderRequest $request, Slider $slider)
    {
        $attributes = $request->only('has_button', 'button_text', 'button_link');
        if ($request->hasFile('image')) {
            $attributes['image'] = $request->file('image')->store('sliders');
        }
        $slider->update($attributes);
        return back();
    }


    public function destroy(Slider $slider)
    {
        $slider->delete();
        return back()->with('success', 'Slider has been deleted');
    }
}
