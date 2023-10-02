<?php get_header(); ?>

<div class="news-wrapper">
    <div class="headingcontainer">
        <h1 class="page-heading"><?php wp_title("")?></h1>
    </div>
    <div class="news-page">
        
<?php
$args = array(
    'post_type' => 'post', // Hämta inläggstypen "post" (nyhetsinlägg).
    'posts_per_page' => -1, // Visa alla inlägg.
);

$news_query = new WP_Query($args);

if ($news_query->have_posts()) :
    while ($news_query->have_posts()) : $news_query->the_post();
        ?>
        <article class="news"> 
        <div class="news-img-container">
                    <?php the_post_thumbnail(); ?>
                </div>
            <h2 class="news-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
            <p class="news-text"><?php the_excerpt(); ?></p>
         
        </article>
     
        <?php
    endwhile;
    wp_reset_postdata();
else :
    echo '<p>Inga nyheter att visa.</p>';
endif;
?>
<?php
$args = array(
    'post_type' => 'news',
    'posts_per_page' => -1, // Visa alla butiker
);

$butiker = new WP_Query( $args );

if ( $stores->have_posts() ) :
    while ( $butiker->have_posts() ) : $butiker->the_post();
        // Hämta och visa butiksinformationen här
        the_title(); // Visar butikens namn
        the_content(); // Visar butikens beskrivning
        // Visa andra anpassade fält för butiken här
    endwhile;
    wp_reset_postdata();
else :
    echo 'Inga butiker hittades.';
endif;
?>
</div>
</div>

<?php get_footer(); ?>