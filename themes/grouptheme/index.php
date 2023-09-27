<?php get_header(); ?>
<div class="page-wrapper">
    <div class="hero">
        <?php 
        if(have_posts() ) :
            while ( have_posts() ) : the_post();
        the_content();
        the_title();
        endwhile;
    else: _e('Det finns inga posts');
    endif;
        ?>
    </div>
</div>



<?php get_footer(); ?>