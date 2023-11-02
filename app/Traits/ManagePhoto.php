<?php


namespace App\Traits;

use Illuminate\Support\Facades\Storage;

trait ManagePhoto
{
    public function deletePhoto($link): void
    {
        if (str_contains($link, 'http')) {
            $image = explode('storage', $link)[1];
            if (Storage::exists($image)) {
                Storage::delete($image);
            }
        }
    }

}
