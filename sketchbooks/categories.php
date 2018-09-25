<?php



$categories = array(
    array(
        'title' => 'Characters',
        'id' => '1',
    ),
    array(
        'title' => 'Characters',
        'id' => '1',
    ),
    array(
        'title' => 'Characters',
        'id' => '1',
    )
);

foreach($categories as $key => $category){
    $category['folder'] = $category['id'];
    $category[$key]['count'] = count(glob($category['id'].'/*.jpg'));
}
echo json_encode($categories);