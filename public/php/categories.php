<?php

$categories = array(
    array(
        'title' => 'COUCOU',
        'id' => '1',
    )
);

//foreach($categories as $key => $category){
//    $category['folder'] = $category['id'];
//    $categories[$key]['count'] = count(glob('../portfolio/'.$category['id'].'/*.jpg'));
//}

echo json_encode($categories);