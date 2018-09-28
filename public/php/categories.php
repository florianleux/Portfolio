<?php


if ($_REQUEST['method']==='getCategoryCount') {
        $count = count(glob('../portfolio/'.$_REQUEST['category'].'/*.jpg'));
        echo ($count);
}
else if ($_REQUEST['method']==='getCategoriesList') {

    $folders = array_filter(glob('../portfolio/*'), 'is_dir');
    $categories = [];

    foreach($folders as $key => $folder){
        $categories[$key]['name'] = basename($folder);
    }

    echo json_encode($categories);
}


