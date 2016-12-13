<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class AdminCtrl extends Controller
{
    //
    public function getIndex(){
    	return view('welcome');
    }
}
