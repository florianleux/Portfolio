<?php


$folders = array_filter(glob('../portfolio/*'), 'is_dir');
$categories = [];

foreach($folders as $key => $folder){
    $categories[$key]['name'] = basename($folder);
    $categories[$key]['count'] = count(glob($folder.'/*.jpg'));
}

echo json_encode($categories);