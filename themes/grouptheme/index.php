<?php get_header(); ?>

<?php
$args = array(
    'post_type' => 'post', // Hämta inläggstypen "post" (nyhetsinlägg).
    'posts_per_page' => -1, // Visa alla inlägg.
);

$news_query = new WP_Query($args);

if ($news_query->have_posts()) :
    while ($news_query->have_posts()) : $news_query->the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
            <div class="entry-content">
                <?php the_content(); ?>
            </div>
        </article>
        <?php
    endwhile;
    wp_reset_postdata();
else :
    echo '<p>Inga nyheter att visa.</p>';
endif;

get_footer(); ?>