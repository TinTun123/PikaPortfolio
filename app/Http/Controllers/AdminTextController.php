<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateTextRequest;
use App\Models\Text;
use Illuminate\Http\Request;

class AdminTextController extends Controller
{
    public function index()
    {
        return inertia('Admin/Text',[
            'texts' => Text::first(),
        ]);
    }

    public function update(UpdateTextRequest $request)
    {
        $attributes = $request->only('digital_text', 'footer_note','copyright_note');
        Text::first()->update($attributes);
        return back();
    }
}
