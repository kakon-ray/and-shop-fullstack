<?php

namespace App\Http\Controllers\Admin\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;
use App\Models\Subcategory;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

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
        //    dd($request->all());
        $arrayRequest = [
            'category_name' => $request->category_name,
        ];

        $arrayValidate  = [
            'category_name' => 'required',
        ];

        $response = Validator::make($arrayRequest, $arrayValidate);

        if ($response->fails()) {
            $msg = '';
            foreach ($response->getMessageBag()->toArray() as $item) {
                $msg = $item;
            };

            Session::flash('error', $msg);
            return Redirect::back();
        } else {
            DB::beginTransaction();

            try {
                $slug = str::slug($request->category_name, '-');
                $response = Category::create([
                    'category_name' => $request->category_name,
                    'category_slug' => $slug,
                ]);

                DB::commit();
            } catch (\Exception $err) {
                $response = null;
            }

            if ($response != null) {
                Session::flash('success', 'Add New Category');
                return Redirect::back();
            } else {
                Session::flash('error', 'Internal Server Error');
                return Redirect::back();
            }
        }
    }
    public function edit_product_submit(Request $request)
    {  

        dd($request->all());
        $category = Category::find($request->id);

        if (is_null($category)) {
            return response()->json([
                'msg' => "Can Not Find any Laptop",
                'status' => 404
            ], 404);
        } else {

                $arrayRequest = [
                    'category_name' => $request->category_name,
                ];
    
                $arrayValidate  = [
                    'category_name' => 'required',
                ];


            $response = Validator::make($arrayRequest, $arrayValidate);

            if ($response->fails()) {
                $msg = '';
                foreach ($response->getMessageBag()->toArray() as $item) {
                    $msg = $item;
                };

                Session::flash('error', $msg);
                return Redirect::to('/');
            } else {
                DB::beginTransaction();

                try {
                    $slug = str::slug($request->category_name, '-');
                    $category->category_name = $request->category_name;
                    $category->category_slug = $slug;

                    $category->save();
                    DB::commit();
                } catch (\Exception $err) {
                    DB::rollBack();
                    $category = null;
                }

                if (is_null($category)) {
                    Session::flash('error', 'Internal Server Error');
                } else {
                    Session::flash('success', 'Updated Successfully');
                }
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

                Session::flash('success', 'Delete This Item');

            } catch (\Exception $err) {

                DB::rollBack();

                Session::flash('error', 'Internal Servererror');
            }
        }
    }
}
