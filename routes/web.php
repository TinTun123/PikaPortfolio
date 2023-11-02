<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AdminAboutMeController;
use App\Http\Controllers\AdminContactController;
use App\Http\Controllers\AdminCourseController;
use App\Http\Controllers\AdminSliderController;
use App\Http\Controllers\AdminSocialProfileController;
use App\Http\Controllers\AdminTestimonialController;
use App\Http\Controllers\AdminTextController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TestimonialController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [AboutController::class, 'index'])->name('about');
Route::get('/course', [CourseController::class, 'index'])->name('course');
Route::get('/testimonial', [TestimonialController::class, 'index'])->name('testimonial');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');


Route::get('/login', [AuthController::class, 'index'])->name('login')->middleware('guest');
Route::post('/login', [AuthController::class, 'login'])->name('admin.login');

Route::middleware('auth')->prefix('admin')->name('admin.')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::get('/', [AdminAboutMeController::class, 'index']);
    Route::controller(AdminAboutMeController::class)->prefix('about')->name('about.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::post('/', 'update')->name('update');
    });

    Route::controller(AdminSocialProfileController::class)->prefix('social')->name('social.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::put('/', 'update')->name('update');
    });

    Route::controller(AdminCourseController::class)->prefix('course')->name('course.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/store', 'store')->name('store');
        Route::get('/edit/{course:id}', 'edit')->name('edit');
        Route::post('/update/{course:id}', 'update')->name('update');
        Route::delete('/{course:id}', 'destroy')->name('destroy');
    });

    Route::controller(AdminSliderController::class)->prefix('slider')->name('slider.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/store', 'store')->name('store');
        Route::get('/edit/{slider:id}', 'edit')->name('edit');
        Route::post('/update/{slider:id}', 'update')->name('update');
        Route::delete('/{slider:id}', 'destroy')->name('destroy');
    });

    Route::controller(AdminTestimonialController::class)->prefix('testimonial')->name('testimonial.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/', 'store')->name('store');
        Route::get('/edit/{testimonial:id}', 'edit')->name('edit');
        Route::post('/update/{testimonial:id}', 'update')->name('update');
        Route::delete('/{testimonial:id}', 'destroy')->name('destroy');
    });

    Route::controller(AdminTextController::class)->prefix('text')->name('text.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::put('/', 'update')->name('update');
    });


    Route::controller(AdminContactController::class)->prefix('contact')->name('contact.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::post('/', 'reply')->name('reply');
        Route::delete('/{contact:id}', 'destroy')->name('destroy');
    });

});
