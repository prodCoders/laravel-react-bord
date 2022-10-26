<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $categories = [
            'Недвижимость','Работа','Строительство и ремонт','Оборудование',
            'Красота и здоровье','Спорт, туризм, развлечения','Компьютеры, оргтехника'
        ];

        foreach ($categories as $category) {
            DB::table('categories')->insert([
                'name' => $category,
                'city_id' => rand(1,8),
            ]);
        }


    }
}
