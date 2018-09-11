<?php



$titles = array(
    array(
        'title' => 'Auberge de la Patchole',
        'id' => '1',
    )
);

foreach($titles as $key => $title){
    $title['folder'] = $title['id'];
    $titles[$key]['count'] = count(glob($title['id'].'/*.jpg'));
}
echo json_encode($titles);