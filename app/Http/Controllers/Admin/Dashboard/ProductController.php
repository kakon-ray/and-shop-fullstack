<?php

namespace App\Http\Controllers\Admin\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;
use App\Models\Subcategory;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\File;
class ProductController extends Controller
{
    public function manage_product()
    {
        $product = Product::all();
        return Inertia::render('admin/pages/product/ManageProduct',compact('product'));
    }
    public function add_product()
    {   
        $subcategory = Subcategory::all();
        $categories = Category::all();
        return Inertia::render('admin/pages/product/AddProduct',compact('categories','subcategory'));
    }



    public function details_product(Request $request)
    {   
        $product = Product::where('id',$request->id)->with('category')->with('subcategory')->first();
        return Inertia::render('admin/pages/product/ProductDetails',compact('product'));
    }
    public function edit_product(Request $request)
    {   
         $subcategory = Subcategory::all();
        $categories = Category::all();
        $product = Product::where('id',$request->id)->with('category')->with('subcategory')->first();
        return Inertia::render('admin/pages/product/EditProduct',compact('product','subcategory','categories'));
    }
    public function add_product_submit(Request $request)
    {

        // dd($request->all());
           
        $arrayRequest = [
            'category_id' => $request->category_id,
            'subcategory_id' => $request->subcategory_id,
            'name' => $request->name,
            'code' => $request->code,
            'unit' => $request->unit,
            'tags' => $request->tags,
            'purchase_price' => $request->purchase_price,
            'selling_price' => $request->selling_price,
            'discount_price' => $request->discount_price,
            'stock_quantity' => $request->stock_quantity,
            'warehouse' => $request->warehouse,
            'description' => $request->description,
            'thumbnail' => $request->thumbnail,
            'images' => $request->images,
            
        ];

        $arrayValidate  = [
            'category_id' => 'required',
            'subcategory_id' => 'required',
            'name' => 'required',
            'code' => 'required',
            'unit' => 'required',
            'tags' => 'required',
            'purchase_price' => 'required',
            'selling_price' => 'required',
            'discount_price' => 'required',
            'stock_quantity' => 'required',
            'warehouse' => 'required',
            'description' => 'required',
            'thumbnail' => 'required',
            'images' => 'required',
        ];

        $response = Validator::make($arrayRequest, $arrayValidate);

        if ($response->fails()) {
            $msg = '';
            foreach ($response->getMessageBag()->toArray() as $item) {
                $msg = $item;
            };

            Session::flash('error', $msg);
      
        } else {
            DB::beginTransaction();

            try {
                // single thumbnil image upload
                $slug = Str::slug($request->name, '-');

                if ($request->thumbnail) {
                    $file = $request->file('thumbnail');
                    $filename = $slug . '.' . $file->getClientOriginalExtension();

                    $img = Image::make($file);
                    $img->resize(500, 500)->save(public_path('uploads/' . $filename));

                    $host = $_SERVER['HTTP_HOST'];
                    $thumbnail = "http://" . $host . "/uploads/" . $filename;
                }

                // multiple images uploads
                $images = array();
                if ($request->hasFile('images')) {
                    foreach ($request->file('images') as $key => $image2) {
                        $imageName = hexdec(uniqid()) . '.' . $image2->getClientOriginalExtension();

                        $img = Image::make($image2);
                        $img->resize(320, 240)->save(public_path('uploads/' . $imageName));

                        $host = $_SERVER['HTTP_HOST'];
                        $imageLink = "http://" . $host . "/uploads/" . $imageName;

                        array_push($images, $imageLink);
                    }
                }

                $response = Product::create([
                    'category_id' => $request->category_id,
                    'subcategory_id' => $request->subcategory_id,
                    'name' => $request->name,
                    'code' => $request->code,
                    'unit' => $request->unit,
                    'tags' => $request->tags,
                    'purchase_price' => $request->purchase_price,
                    'selling_price' => $request->selling_price,
                    'discount_price' => $request->discount_price,
                    'stock_quantity' => $request->stock_quantity,
                    'warehouse' => $request->warehouse,
                    'description' => $request->description,
                    'thumbnail' => $thumbnail,
                    'images' => json_encode($images),
                    'admin_id' =>intval(Auth::guard('admin')->user()->id),
                ]);

                DB::commit();
            } catch (\Exception $err) {
                $response = null;
            }

            if ($response != null) {
                Session::flash('success', 'Submit New Product');
                return Redirect::back();
            } else {
                Session::flash('error', $err);
                return Redirect::back();
            }
        }
    }
    public function edit_product_submit(Request $request)
    {

        // dd($request->all());

        $product = Product::find($request->id);

           
        $arrayRequest = [
            'category_id' => $request->category_id,
            'subcategory_id' => $request->subcategory_id,
            'name' => $request->name,
            'code' => $request->code,
            'unit' => $request->unit,
            'tags' => $request->tags,
            'purchase_price' => $request->purchase_price,
            'selling_price' => $request->selling_price,
            'discount_price' => $request->discount_price,
            'stock_quantity' => $request->stock_quantity,
            'warehouse' => $request->warehouse,
            'description' => $request->description,
            'thumbnail' => $request->thumbnail,
            'images' => $request->images,
            
        ];

        $arrayValidate  = [
            'category_id' => 'required',
            'subcategory_id' => 'required',
            'name' => 'required',
            'code' => 'required',
            'unit' => 'required',
            'tags' => 'required',
            'purchase_price' => 'required',
            'selling_price' => 'required',
            'discount_price' => 'required',
            'stock_quantity' => 'required',
            'warehouse' => 'required',
            'description' => 'required',
        ];


        $response = Validator::make($arrayRequest, $arrayValidate);

        if ($response->fails()) {
            $msg = '';
            foreach ($response->getMessageBag()->toArray() as $item) {
                $msg = $item;
            };

            Session::flash('error', $msg);
      
        } else {
            DB::beginTransaction();

            try {
                // single thumbnil image upload
                $slug = Str::slug($request->name, '-');

                if ($request->hasFile('thumbnail')) {
                    $file = $request->file('thumbnail');
                    $filename = $slug . '.' . $file->getClientOriginalExtension();

                    $img = Image::make($file);
                    $img->resize(500, 500)->save(public_path('uploads/' . $filename));

                    $host = $_SERVER['HTTP_HOST'];
                    $thumbnail = "http://" . $host . "/uploads/" . $filename;
                    $product->thumbnail = $thumbnail;
                }

                // multiple images uploads
                $images = array();
                if ($request->hasFile('images')) {
                    foreach ($request->file('images') as $key => $image2) {
                        $imageName = hexdec(uniqid()) . '.' . $image2->getClientOriginalExtension();

                        $img = Image::make($image2);
                        $img->resize(320, 240)->save(public_path('uploads/' . $imageName));

                        $host = $_SERVER['HTTP_HOST'];
                        $imageLink = "http://" . $host . "/uploads/" . $imageName;

                        array_push($images, $imageLink);
                    }
                    $product->images = $images;
                }

                $product->category_id = $request->category_id;
                $product->subcategory_id = $request->subcategory_id;
                $product->name = $request->name;
                $product->code = $request->code;
                $product->unit = $request->unit;
                $product->tags = $request->tags;
                $product->purchase_price = $request->purchase_price;
                $product->selling_price = $request->selling_price;
                $product->discount_price = $request->discount_price;
                $product->stock_quantity = $request->stock_quantity;
                $product->description = $request->description;

              
              
                

                $product->save();

                DB::commit();
            } catch (\Exception $err) {
                $response = null;
            }

            if ($response != null) {
                Session::flash('success', 'Updated Product');
                return Redirect::back();
            } else {
                Session::flash('error', $err);
                return Redirect::back();
            }
        }
    }


    public function delete_product_submit(Request $request)
    {

        $product = Product::find($request->id);

        if (is_null($product)) {

            Session::flash('error', 'Do Not Find any Item');
        } else {

            DB::beginTransaction();

            try {

                $product->delete();
                DB::commit();

                return response()->json([
                    'msg' => "Delete This Product",
                    'status' => 200
                ], 200);

            } catch (\Exception $err) {

                DB::rollBack();

                return response()->json([
                    'msg' => "server Error",
                    'status' => 500
                ], 500);
            }
        }
    }
}
