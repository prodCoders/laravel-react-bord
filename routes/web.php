<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GetDataController;
use App\Http\Controllers\AdsController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'ajax'], function () {
    Route::get('/getCities', [GetDataController::class,'getCities']);
    Route::get('/getCategories', [GetDataController::class,'getCategories']);
    Route::get('/getAds', [GetDataController::class,'getAds']);

    Route::resources([
        'ads' => AdsController::class
    ]);

});
