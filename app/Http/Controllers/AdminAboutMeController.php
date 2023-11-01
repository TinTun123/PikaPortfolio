<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateAboutMeRequest;
use App\Models\AboutMe;
use Illuminate\Http\Request;

class AdminAboutMeController extends Controller
{
    public function index()
    {
        return inertia('Admin/About',[
            'aboutMe' => AboutMe::first(),
        ]);
    }

    public function update(UpdateAboutMeRequest $request)
    {
        $attributes = $request->only('first_title','second_title','first_description','second_description');

        if($request->file('image')){
            $attributes['image'] = $request->file('image')->store('about');
        }
        $aboutMe = AboutMe::first();
        if($aboutMe){
            $aboutMe->update($attributes);
        }else{
            AboutMe::create($attributes);
        }
    }
}
