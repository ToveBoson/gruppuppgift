<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo("name") ?></title>
    <link rel="stylesheet" href="<?php bloginfo("stylesheet_url"); ?>" type="text/css" />
</head>
<body>
    <?php wp_head();?>
    <?php echo do_shortcode('[responsive_menu]'); ?>
    
<header class="welcome-header">
    <div class="header-container">
        <h1><a class="general-link" href="<?php echo esc_url(home_url('/')); ?>"><?php bloginfo("name") ?></a></h1>
    </div>

    <div class="input">
        <?php get_search_form(); ?>
    </div>
    
    <div class="page-menu">
        <?php wp_nav_menu(array('theme_location' => 'Header')); ?>
    </div>
</header>