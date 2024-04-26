<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      
         $faker = \Faker\Factory::create(10);

         foreach (range(1, 20) as $index) {
         Product::create([
            'category_id' => 15,
            'subcategory_id' => 7,
            'name' => $faker->name(),
            'code' => "B" . rand(730, 739),
            'unit' => "A" . rand(730, 739),
            'tags' => $faker->text(10),
            'purchase_price' => rand(100, 1000),
            'selling_price' => rand(100, 1000),
            'discount_price' => rand(100, 1000),
            'stock_quantity' => rand(1, 100),
            'warehouse' => rand(100, 1000),
            'description' => $faker->text(100),
            'thumbnail' => 'https://andshop-react.netlify.app/static/media/product6.f19b14e6.png',
            'images' => 'https://andshop-react.netlify.app/static/media/product1.7190443a.png',
        ]);

    }
    }
}
