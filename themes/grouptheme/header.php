<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo("name") ?></title>
    <link rel="stylesheet" href="<?php bloginfo("stylesheet_url"); ?>" type="text/css" />
    <script src="https://kit.fontawesome.com/d2d43480b4.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
</head>
<body>
    <?php wp_head();?>
    
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