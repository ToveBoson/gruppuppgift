<?php function wpb_custom_new_menu() {
    register_nav_menu('Header',__('Header'));
    register_nav_menu('Footer',__('Footer'));
}



add_action('init', 'wpb_custom_new_menu');
add_theme_support('post-thumbnails');
