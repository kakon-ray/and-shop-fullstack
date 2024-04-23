<?php

namespace App\Http\Controllers\Admin\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
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
    public function edit_category()
    {
        return Inertia::render('admin/pages/category/EditCategory');
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


    public function delete_category_submit(Request $request)
    {
        $laptop = Category::find($request->id);

        if (is_null($laptop)) {

            return response()->json([
                'msg' => "Do not find any Item",
                'status' => 404
            ], 404);
        } else {

            DB::beginTransaction();

            try {

                $laptop->delete();
                DB::commit();

                return response()->json([
                    'status' => 200,
                    'msg' => 'Delete this Laptop',
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

