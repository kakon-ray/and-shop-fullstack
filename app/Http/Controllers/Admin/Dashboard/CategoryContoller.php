<?php

namespace App\Http\Controllers\Admin\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;


class CategoryContoller extends Controller
{
    public function manage_category()
    {
        $categories = Category::all();
        return Inertia::render('admin/pages/category/ManageCategory',compact('categories'));
    }
    public function add_category()
    {
        return Inertia::render('admin/pages/category/AddCategory');
    }
    public function edit_category(Request $request)
    {   $category = Category::find($request->id);
        return Inertia::render('admin/pages/category/EditCategory',compact('category'));
    }
    public function add_category_submit(Request $request)
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
    public function edit_category_submit(Request $request)
    {
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


    public function delete_category_submit(Request $request)
    {

        $category = Category::find($request->id);

        if (is_null($category)) {

            return response()->json([
                'msg' => "Do not find any Item",
                'status' => 404
            ], 404);
        } else {

            DB::beginTransaction();

            try {

                $category->delete();
                DB::commit();

                return response()->json([
                    'status' => 200,
                    'msg' => 'Delete this Category',
                ], 200);
            } catch (\Exception $err) {

                DB::rollBack();

                return response()->json([
                    'msg' => "Internal Server Error",
                    'status' => 500,
                    'err_msg' => $err->getMessage()
                ], 500);
            }
        }
    }


    // start subcategory


    public function manage_subcategory()
    {
        $subcategories = Subcategory::with('add_category')->get();
        return Inertia::render('admin/pages/subcategory/ManageSubCategory',compact('subcategories'));
    }
    public function add_subcategory()
    {
        $categories = Category::all();
        return Inertia::render('admin/pages/subcategory/AddSubCategory',compact('categories'));
    }
    public function edit_subcategory(Request $request)
    {   $subcategory = Subcategory::find($request->id);
        $categories = Category::all();
        return Inertia::render('admin/pages/subcategory/EditSubCategory',compact('subcategory','categories'));
    }

    public function add_subcategory_submit(Request $request)
    {
 
        $arrayRequest = [
            'subcategory_name' => $request->subcategory_name,
            'category_id' => $request->category_id,
        ];

        $arrayValidate  = [
            'subcategory_name' => 'required',
            'category_id' => 'required',
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
                $slug = str::slug($request->subcategory_name, '-');
                $response = Subcategory::create([
                    'subcategory_name' => $request->subcategory_name,
                    'category_id' => $request->category_id,
                    'subcat_slug' => $slug,
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

    public function edit_subcategory_submit(Request $request)
    {
        // dd($request->all());
        $subcategory = Subcategory::find($request->id);

        if (is_null($subcategory)) {
            return response()->json([
                'msg' => "Can Not Find any Subcategory",
                'status' => 404
            ], 404);
        } else {

                $arrayRequest = [
                    'subcategory_name' => $request->subcategory_name,
                    'category_id' => $request->category_id,
                ];
    
                $arrayValidate  = [
                    'subcategory_name' => 'required',
                    'category_id' => 'required',
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
                    $slug = str::slug($request->subcategory_name, '-');
                    $subcategory->subcategory_name = $request->subcategory_name;
                    $subcategory->subcat_slug = $slug;
                    $subcategory->category_id = $request->category_id;

                    $subcategory->save();
                    DB::commit();
                } catch (\Exception $err) {
                    DB::rollBack();
                    $subcategory = null;
                }

                if (is_null($subcategory)) {
                    Session::flash('error', 'Internal Server Error');
                } else {
                    Session::flash('success', 'Updated Successfully');
                }
            }
        }
    }

    public function delete_subcategory_submit(Request $request)
    {

        $subcategory = Subcategory::find($request->id);

        if (is_null($subcategory)) {

            return response()->json([
                'msg' => "Do not find any Item",
                'status' => 404
            ], 404);
        } else {

            DB::beginTransaction();

            try {

                $subcategory->delete();
                DB::commit();

                return response()->json([
                    'status' => 200,
                    'msg' => 'Delete this Subcategory',
                ], 200);
            } catch (\Exception $err) {

                DB::rollBack();

                return response()->json([
                    'msg' => "Internal Server Error",
                    'status' => 500,
                    'err_msg' => $err->getMessage()
                ], 500);
            }
        }
    }

}

