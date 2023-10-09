<?php get_header(); ?>

<div class="single-wrapper">
    <div class="title-container">
        <h2><?php the_title();?></h2>
    </div>
    <div class="single-page">
        <?php
        if (have_posts()) :
            while (have_posts()) : the_post();
                ?>
                <article class="single-news"> 
                    <div class="single-content">
                        <p class="news-text">
                
                  <div class="news-content-container">
                    
                                <?php the_content(); ?>
                            </div>
                        </p>
                    </div>
                    <div class="single-news-img">
                        <?php the_post_thumbnail(); ?>
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