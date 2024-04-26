<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'subcategory_name',
        'category_id',
        'subcat_slug',
    ];

    public function add_category(){
        return $this->belongsTo(Category::class,'category_id');
    }

    public function product(){
        return $this->hasMany(Product::class,'subcategory_id');
    }
}
