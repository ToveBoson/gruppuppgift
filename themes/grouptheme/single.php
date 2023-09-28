<?php get_header(); ?>

<div class="news-wrapper">
    <div class="news-page">
    <?php
    if (have_posts()) :
        while (have_posts()) : the_post();
            ?>
            <article class="single-news"> 
                <h1 class="single-title"><?php the_title(); ?></h1>
                <div class="single-content">
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
</div>



<?php get_footer(); ?>