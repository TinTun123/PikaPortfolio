<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\AboutMe;
use App\Models\Course;
use App\Models\SocialProfile;
use App\Models\Testimonial;
use App\Models\Text;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Course::factory(10)->create();

        AboutMe::factory(1)->create();

        Testimonial::factory(10)->create();

        SocialProfile::create([
            'email' => 'pikasharingacc001@gmail.com',
            'phone' => '09-777-888-999',
            'facebook' => 'https://www.facebook.com/search/top?q=pika%20sharing',
            'youtube' => 'https://youtube.com/@pikasharing',
            'telegram' => 'https://t.me/pikasharing',
            'appstore' => 'https://t.me/pikasharing',
            'playstore' => 'https://t.me/pikasharing',
        ]);

        Text::create([
            'digital_text' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, architecto culpa excepturi itaque laboriosam libero magni, maiores obcaecati possimus quasi quod, totam. Accusantium at, eos labore minus quis repellat.',
            'footer_note' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, architecto culpa excepturi itaque laboriosam libero magni, maiores obcaecati possimus quasi quod, totam. Accusantium at, eos labore minus quis repellat.',
            'copyright_note' => '2023 Pika Sharing. All rights reserved.',
        ]);

    }
}
