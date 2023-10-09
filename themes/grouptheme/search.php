<?php get_header(); ?>

<div class="search-page">
    <div class="search-content">
        <?php
        $search_query = get_search_query();
        $args = array(
            's' => $search_query,
        );
        $search_query = new WP_Query($args);

        if ($search_query->have_posts()) :
            while ($search_query->have_posts()) : $search_query->the_post();
        ?>
                <h1 class="search-heading"><?php the_title(); ?></h1>
                <?php if (has_post_thumbnail()) : ?>
                    <div class="search-img"><?php the_post_thumbnail(); ?></div>
                <?php endif; ?>
                <button class="link-button"><a href="<?php echo get_permalink(); ?>">Gå till sidan</a></button>
        <?php
            endwhile;
            wp_reset_postdata();
        else :
        ?>
            <p>Inga resultat hittades. Prova en annan sökning.</p>
        <?php endif; ?>
    </div>
</div>

<?php get_footer(); ?>
