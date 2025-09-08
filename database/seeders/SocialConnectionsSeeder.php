<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SocialConnectionsSeeder extends Seeder
{
    public function run(): void
    {
        $photographer = DB::table('photographers')->first();

        if (!$photographer) {
            $this->command->info('No photographers found, seeder skipped.');
            return;
        }

    
        $platforms = DB::table('social_medias')->get();

        foreach ($platforms as $platform) {
            $usernameSlug = strtolower(str_replace(' ', '', $photographer->full_name));
            DB::table('social_connections')->insert([
                'photographer_id' => $photographer->id,
                'social_media_id' => $platform->id,
                'profile_url' => "https://{$platform->platform_name}.com/{$usernameSlug}",
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
