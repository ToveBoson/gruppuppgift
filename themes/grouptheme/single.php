<?php get_header(); ?>

<div class="single-wrapper">
    <div class="single-page">
        <?php 
            if (is_singular('product')) {
        ?>
    <div class="title-container">
        <h2><?php the_title();?></h2>
    </div>
    <?php
        }
        ?>
        <?php
        if (have_posts()) :
            while (have_posts()) : the_post();
                ?>
                <article class="single-news"> 
                    <div class="single-content">
                    <?php
                    if(has_category("Nyheter")) {
                        ?>
                        <h2 class="single-news-heading"><?php the_title(); ?></h2>
                    <?php    
                    }
                    ?>
                  <div class="news-content-container">
                                <?php the_content(); ?>
                            </div>
                        </p>
                    </div>
                    <?php
                   $thumbnail_class = ''; // Skapa en variabel för klassnamnet och sätt den som standard till en tom sträng

                   if (has_category('Nyheter')) {
                       // Om det är en sida med kategorin "Nyheter"
                       $thumbnail_class = 'single-news-img'; // Ange klassnamnet för nyhetsinlägg
                   } elseif (is_singular('stores')) {
                       // Om det är en enskild butikssida
                       $thumbnail_class = 'store-thumbnail'; // Ange klassnamnet för butikssidor
                   }
                   ?>
                   
                   <div class="<?php echo $thumbnail_class; ?>">
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