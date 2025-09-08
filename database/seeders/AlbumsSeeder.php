<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AlbumsSeeder extends Seeder
{
    public function run(): void
    {
        $photographer = DB::table('photographers')->first();

        $albums = [
            ['album_name' => 'Wedding Collection', 'album_detail' => 'Best wedding moments'],
            ['album_name' => 'Nature Photography', 'album_detail' => 'Landscapes and wildlife'],
        ];

        foreach ($albums as $album) {
            DB::table('albums')->insert(array_merge($album, [
                'photographer_id' => $photographer->id,
                'created_at' => now(),
                'updated_at' => now()
            ]));
        }
    }
}
