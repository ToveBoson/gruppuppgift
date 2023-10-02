<?php function wpb_custom_new_menu() {
    register_nav_menu('Header',__('Header'));
    register_nav_menu('Footer',__('Footer'));
}

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
'add_new_item' => __('Add New stores'),
'new_item' => __('New stores'),
'edit_item' => __('Edit stores'),
'view_item' => __('View stores'),
'all_items' => __('All stores'),
'search_items' => __('Search stores'),
'not_found' => __('No stores found.'),
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
add_action('init', 'wpb_custom_new_menu');
add_theme_support('post-thumbnails');