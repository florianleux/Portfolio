<?php



$titles = array(
    array(
        'title' => 'Travelers Railway',
        'id' => '11',
    ),
    array(
        'title' => 'Dracula A Loup-Garou',
        'id' => '10',
    ),
    array(
        'title' => 'Kame Burger',
        'id' => '9',
    ),
    array(
        'title' => 'Cuties',
        'id' => '8',
    ),
    array(
        'title' => 'Iguana Bay',
        'id' => '7',
    ),
    array(
        'title' => "Mickey's love",
        'id' => '6',
    ),
    array(
        'title' => 'Paxtown Girl',
        'id' => '5',
    ),
    array(
        'title' => 'Auberge de la Patchole',
        'id' => '1',
    ),
    array(
        'title' => 'Fox',
        'id' => '2'
    ),
    array(
        'title' => 'Rondoudou & Parker',
        'id' => '3'
    ),
    array(
        'title' => 'H',
        'id' => '4'
    )
);

foreach($titles as $key => $title){
    $title['folder'] = $title['id'];
    $titles[$key]['count'] = count(glob($title['id'].'/*.jpg'));
}
echo json_encode($titles);