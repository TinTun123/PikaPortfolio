<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Slider extends Model
{
    use HasFactory;

    protected $casts = [
        'has_button' => 'boolean'
    ];

    public function getImageAttribute()
    {
        if (str_contains($this->attributes['image'], 'https')) {
            return $this->attributes['image'];
        }
        return Storage::url($this->attributes['image']);
    }
}
