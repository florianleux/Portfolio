<?php



$titles = array(
    array(
        'title' => 'Mon sketchbook number one',
        'id' => '1',
    ),
    array(
        'title' => 'Mon sketchbook number two',
        'id' => '2'
    ),
    array(
        'title' => 'Mon sketchbook number three',
        'id' => '3'
    )
);

foreach($titles as $key => $title){
    $title['folder'] = $title['id'];
    $titles[$key]['count'] = count(glob($title['id'].'/*.jpg'))-1;
}
echo json_encode($titles);