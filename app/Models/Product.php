<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;


      protected $fillable = [
        'category_id',
        'subcategory_id',
        'name',
        'code',
        'unit',
        'tags',
        'purchase_price',
        'selling_price',
        'discount_price',
        'stock_quantity',
        'warehouse',
        'description',
        'thumbnail',
        'images',
    ];

    public function category(){
      return $this->belongsTo(Category::class,'category_id');
  }
    public function subcategory(){
      return $this->belongsTo(Subcategory::class,'subcategory_id');
  }
}
