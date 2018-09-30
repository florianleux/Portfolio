<?php


if ($_REQUEST['method']==='getCategoryCount') {
        $count = count(glob('../portfolio/'.$_REQUEST['category'].'/*.jpg'));
        //On renvoie le compte -1 car on enleve la cover
        echo ($count-1);
}
else if ($_REQUEST['method']==='getCategoriesList') {

    $folders = array_filter(glob('../portfolio/*'), 'is_dir');
    $categories = [];

    foreach($folders as $key => $folder){
        $categories[$key]['name'] = basename($folder);
    }

    echo json_encode($categories);
}


