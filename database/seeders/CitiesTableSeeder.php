<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cities = [
            'Киев','Харьков','Одесса','Днепр','Донецк','Запорожье','Львов','Кривой Рог'
        ];

        foreach ($cities as $city) {
            DB::table('cities')->insert([
                'name' => $city,
            ]);
        }
    }
}
