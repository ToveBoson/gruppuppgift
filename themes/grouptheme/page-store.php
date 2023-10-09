<?php get_header(); ?>

    <div class="stores">
    <?php
    query_posts(array(
    'post_type' => 'stores'
    )); ?>
    
    <?php
    while (have_posts()) : the_post(); ?>
    
    <h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>
    <p><?php the_field('adress') ?></p>

<?php if(is_page('uppsala') || is_page('stockholm')) {
the_content();
} ?>




    <?php
    endwhile; ?>
    
    </div>

<?php get_footer(); ?>