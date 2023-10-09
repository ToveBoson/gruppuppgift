<!-- Detta är för sidor. -->

<?php get_header(); ?>

<div class="hero">
    <?php $hero_image_url = get_field('hero');
    if ($hero_image_url) {
        echo '<img src="' . esc_url($hero_image_url) . '" alt="Hero-bild" />';
    } else {
        echo 'Ingen hero-bild tillgänglig.';
    }
    ?>
</div>
<div class="page-content">
<div class="headingcontainer">
    <h1 class="page-heading"><?php the_title(); ?></h1>
    </div>
    <?php if (is_shop()) : // Kolla om det är butikssidan. ?>
        <div class="product-categories">
            <?php
            $orderby = 'name';
            $order = 'asc';
            $hide_empty = false ;
            $cat_args = array(
                'orderby'    => $orderby,
                'order'      => $order,
                'hide_empty' => $hide_empty,
            );

            $product_categories = get_terms( 'product_cat', $cat_args );

            if( !empty($product_categories) ){
                echo '<ul>';
                foreach ($product_categories as $key => $category) {
                    echo '<li>';
                    echo '<a href="'.get_term_link($category).'" >';
                    echo $category->name;
                    echo '</a>';
                    echo '</li>';
                }
                echo '</ul>';
            }
            ?>
        </div>
    <?php endif; ?>

    <?php 
    if (have_posts()) :
        while (have_posts()) : the_post();
            if (is_checkout() ) { 
                
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
</div>

<?php get_footer(); ?>