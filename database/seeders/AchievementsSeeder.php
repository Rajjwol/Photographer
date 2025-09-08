<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AchievementsSeeder extends Seeder
{
    public function run(): void
    {
        $photographer = DB::table('photographers')->first();

        DB::table('achievements')->insert([
            'photographer_id' => $photographer->id,
            'description' => 'Won Best Wedding Photographer 2024',
            'date_achievement' => '2024-06-15',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('achievements')->insert([
            'photographer_id' => $photographer->id,
            'description' => 'Published in National Geographic',
            'date_achievement' => '2023-11-20',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
