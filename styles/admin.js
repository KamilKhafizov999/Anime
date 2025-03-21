function open_block(name) {
    //close_block("#admin-category");
    //close_block("#admin-subcategory");
    //close_block("#admin-title");
    //close_block("#admin-genre");
    //close_block("#admin-video");
    $(name).stop(true, true).slideToggle(400);    
}

function close_block(name) {
    $(name).fadeOut(400);
}