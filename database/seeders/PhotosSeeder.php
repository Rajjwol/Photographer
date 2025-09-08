<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PhotosSeeder extends Seeder
{
    public function run(): void
    {
        $albums = DB::table('albums')->get();

        foreach ($albums as $album) {
            for ($i = 1; $i <= 3; $i++) {
                $fileName = "{$album->album_name}_photo{$i}.jpg"; // You can later change to png, etc.
                $filePath = "photos/{$fileName}";
                $extension = pathinfo($fileName, PATHINFO_EXTENSION); // extract extension

                DB::table('photos')->insert([
                    'album_id'      => $album->id,
                    'file_path'     => $filePath,
                    'file_name'     => $fileName,
                    'file_extension'=> $extension,
                    'file_size'     => rand(100, 500),
                    'created_at'    => now(),
                    'updated_at'    => now(),
                ]);
            }
        }
    }
}
