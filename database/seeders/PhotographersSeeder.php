<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PhotographersSeeder extends Seeder
{
    public function run(): void
    {
        $user = DB::table('users')->where('username', 'photographer_user')->first();

        DB::table('photographers')->insert([
            'user_id' => $user->id,
            'full_name' => 'John Doe',
            'about' => 'Professional photographer specializing in weddings and portraits.',
            'address' => '123 Main Street, City',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
