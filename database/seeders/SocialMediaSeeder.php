<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SocialMediaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $platforms = [
            ['platform_name' => 'Facebook', 'icon' => 'fab fa-facebook-f'],
            ['platform_name' => 'Instagram', 'icon' => 'fab fa-instagram'],
            ['platform_name' => 'Twitter', 'icon' => 'fab fa-twitter'],
            ['platform_name' => 'LinkedIn', 'icon' => 'fab fa-linkedin-in'],
            ['platform_name' => 'YouTube', 'icon' => 'fab fa-youtube'],
        ];

        foreach ($platforms as $platform) {
            DB::table('social_medias')->insert([
                'platform_name' => $platform['platform_name'],
                'icon' => $platform['icon'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
