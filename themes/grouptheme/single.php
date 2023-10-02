<?php get_header(); ?>

<<<<<<< HEAD
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
=======
<div class="page-content">
    <?php 
        if(have_posts() ) :
            while ( have_posts() ) : the_post(); ?>
            <div class="shop-container">
            <?php the_post_thumbnail(); ?>
            <?php the_content(); ?>
            </div>
        <?php
        endwhile;
    else: _e('Det finns inga produkter.');
    endif;
        ?>
</div>

<?php ?>


<?php get_footer(); ?>  
>>>>>>> feature-tove-branch
