<?php get_header();?>

 

<?php while (have_posts()) : ?>

        <?php the_content();?>

    <?php the_post(); ?>

    <?php the_post_thumbnail(); ?>

    <?php echo get_permalink(); ?>

 

    <?php endwhile; ?>

 

<?php get_footer();?>