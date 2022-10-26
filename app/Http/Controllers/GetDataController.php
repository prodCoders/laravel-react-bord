<?php

namespace App\Http\Controllers;

use App\Models\Ads;
use App\Models\Categories;
use App\Models\Cities;
use Illuminate\Http\Request;

class GetDataController extends BaseController
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCities()
    {
        $cities = Cities::all();

        return $this->sendResponse($cities,'ok');

    }


    /**
     * @param Request $request
     */
    public function getCategories(Request $request)
    {
        $result = $request->all();

        $request->validate([
            'city' => ['required', 'integer']
        ]);

        $categories = Categories::whereCityId($result['city'])->get();

        return $this->sendResponse($categories,'ok');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAds(Request $request)
    {
        $request->validate([
            'city_id' => ['required', 'integer'],
            'category_id' => ['required', 'integer']
        ]);

        $result = $request->all();

        $ads = Ads::whereCityId($result['city_id'])
            ->whereCategoryId($result['category_id'])->get();

        return $this->sendResponse($ads,'ok');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
