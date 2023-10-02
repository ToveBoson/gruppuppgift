<!-- Detta är för sidor. -->

<?php get_header(); ?>

<div class="page-content">
    <div class="heading-container">
    <h1 class="page-heading"><?php wp_title(""); ?></h1>
    </div>
    <?php 
    if (have_posts()) :
        while (have_posts()) : the_post();
            if (is_checkout()) { // Kontrollera om det är kassasidan.
                // Visa inloggnings- och registreringsformulär med länkar för att logga in.
                echo do_shortcode('[woocommerce_my_account login_text="Logga in" register_text="Skapa konto"]');
            }
            ?>
            <div class="shop-container">
                <?php the_content(); ?>
            </div>
        <?php
        endwhile;
    else:
        _e('Det finns inga produkter.');
    endif;
    ?>
</div>




<?php get_footer(); ?>