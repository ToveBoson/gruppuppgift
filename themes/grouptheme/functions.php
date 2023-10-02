<?php function wpb_custom_new_menu() {
    register_nav_menu('Header',__('Header'));
    register_nav_menu('Footer',__('Footer'));
}



add_action('init', 'wpb_custom_new_menu');
add_theme_support('post-thumbnails');

function post_type_stores()
{
$supports = array(
'title', 
'editor',
'thumbnail',
);
 
$labels = array(
'name' => _x('Stores', 'plural'),
'singular_name' => _x('Stores', 'singular'),
'menu_name' => _x('Stores', 'admin menu'),
'name_admin_bar' => _x('Stores', 'admin bar'),
'add_new' => _x('Add New', 'add new'),
'add_new_item' => __('Add New news'),
'new_item' => __('New news'),
'edit_item' => __('Edit news'),
'view_item' => __('View news'),
'all_items' => __('All news'),
'search_items' => __('Search news'),
'not_found' => __('No news found.'),
);
 
$args = array(
'supports' => $supports, // Vilka "content" delar som ska användas i post-typen
'labels' => $labels, // Namn och text som syns i UI:t
'public' => true, // Om alla användare ska kunna skapa denna post-types
'query_var' => true, // Skapa en query-variabel för post-typen
'rewrite' => array('slug' => 'stores'), // Hur man når post-typen (t.ex. som inläggsida) http://localhost/news/
'has_archive' => true, // Ska post-typen ha arkiv-sida? Likt inlägg
'hierarchical' => false, // Ska de behandlas som sidor (true) eller inlägg (false)?
);
 
register_post_type('stores', $args);
}
 
add_action('init', 'post_type_stores');