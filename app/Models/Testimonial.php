<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Testimonial extends Model
{
    use HasFactory;

    public function getImageAttribute()
    {
        if (str_contains($this->attributes['image'], 'http')) {

            return $this->attributes['image'];
        }
        return Storage::url($this->attributes['image']);
    }

}
