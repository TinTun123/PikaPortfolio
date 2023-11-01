<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AboutMe>
 */
class AboutMeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'first_title' => 'Hello, I am ',
            'second_title' => 'Pika Sharing',
            'first_description' => 'I am a web developer with a passion for creating beautiful and functional websites. I am currently studying at the University of Toronto and am excited to start my career as a web developer.',
            'second_description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur debitis esse excepturi hic ipsa ipsam iusto, maxime molestias nihil perferendis porro praesentium quae ratione veniam? Ab asperiores assumenda, distinctio doloribus molestiae odio qui quo vitae voluptatem voluptates! Architecto deserunt dolore eos eveniet id impedit iure. Cupiditate iste placeat veritatis.',
            'image' => fake()->imageUrl(),
        ];
    }
}
