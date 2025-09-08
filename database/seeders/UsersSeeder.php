<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    public function run(): void
    {
        // Fetch role IDs
        $roles = DB::table('roles')->pluck('id', 'role_name');

        $users = [
            ['username' => 'premium_user', 'password_hash' => Hash::make('password123'), 'email' => 'premium@example.com', 'role_id' => $roles['premium']],
            ['username' => 'admin_user', 'password_hash' => Hash::make('password123'), 'email' => 'admin@example.com', 'role_id' => $roles['admin']],
            ['username' => 'photographer_user', 'password_hash' => Hash::make('password123'), 'email' => 'photographer@example.com', 'role_id' => $roles['photographer']],
        ];

        foreach ($users as $user) {
            DB::table('users')->insert(array_merge($user, [
                'created_at' => now(),
                'updated_at' => now()
            ]));
        }
    }
}
