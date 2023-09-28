<?php get_header(); ?>

<div class="single-post-content">
    <?php
    if (have_posts()) :
        while (have_posts()) : the_post();
            ?>
            <article class="news"> <?php post_class(); ?>
                <h1 class="news-title"><?php the_title(); ?></h1>
                <div class="news-content">
                    <p class="news-text"><?php the_content(); ?></p>
                </div>
            </article>
            <?php
        endwhile;
    else :
        echo '<p>Inget inlägg att visa.</p>';
    endif;
    ?>
</div>



<?php get_footer(); ?>