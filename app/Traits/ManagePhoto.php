<?php


namespace App\Traits;

use Illuminate\Support\Facades\Storage;

trait ManagePhoto
{
    public function deletePhoto($link): void
    {
        if (str_contains($link, 'http')) {
            $arr = explode('storage', $link);
            if (count($arr) > 1 && Storage::exists($arr[1])) {
                Storage::delete($arr[1]);
            }
        }
    }

}
