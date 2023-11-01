<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSocialProfileRequest;
use App\Http\Requests\UpdateSocialProfileRequest;
use App\Models\SocialProfile;

class AdminSocialProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Admin/SocialProfiles/Index', [
            'social' => SocialProfile::first(),
        ]);
    }


    public function update(UpdateSocialProfileRequest $request)
    {
        $attributes = $request->only('email', 'phone','facebook', 'telegram', 'youtube','appstore','playstore');
        SocialProfile::first()->update($attributes);
        return back()->with('success', 'Profile is updated');
    }


}
