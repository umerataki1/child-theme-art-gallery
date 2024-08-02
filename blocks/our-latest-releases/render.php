<?php
$backend = isset($is_preview) && $is_preview;

if ($backend):
    $message = sprintf(esc_html__("Displays Our Latest Releases Products", 'twentytwentyfour-child'));
    printf(
        '<div class="alert-box alert-box-warning">%s</div>',
        $message

    );
    return null;
endif;

$block = $block ?? [];
$block_classname = twenty_twenty_four_get_acf_block_classname($block, 'wp-block-our-latest-releases');

printf('<div class="%s">', $block_classname);

$args = array(
    'post_type' => 'product',
    'posts_per_page' => -1, // Fetch all products from the category
    'tax_query' => array(
        array(
            'taxonomy' => 'product_cat',
            'field' => 'slug',
            'terms' => 'latest-releases', // Change this to the slug of your "latest release" category
        ),
    ),
);
$latest_release_products = new WP_Query($args);

if ($latest_release_products->have_posts()) {
    while ($latest_release_products->have_posts()) {
        $latest_release_products->the_post();
        global $product;
        $product_link = get_permalink($product->get_id());
        $product_title = get_the_title($product->get_id());
        $product_price = $product->get_price_html();
        ?>
        <!-- Start Here -->
        <div class="our-latest-releases-container">
            <div class="wrap-loop-img-item product type-product">
                <?php
                $featured_image_id = get_post_thumbnail_id($product->get_id());
                $gallery_attachment_ids = $product->get_gallery_attachment_ids();
                $image_ids = array();
                if ($featured_image_id) {
                    $image_ids[] = $featured_image_id;
                }
                if (!empty($gallery_attachment_ids)) {
                    $image_ids = array_merge($image_ids, $gallery_attachment_ids);
                }
                if (!empty($image_ids)) {
                    foreach ($image_ids as $image_id) {
                        $image_url = wp_get_attachment_image_url($image_id, 'woocommerce_thumbnail');
                        ?>
                        <a href="<?php echo $product_link; ?>">
                            <img src="<?php echo $image_url; ?>" alt="<?php echo $product_title; ?>"
                                 class="es-slick-img">
                        </a>
                        <?php
                    }
                }
                ?>
            </div>
            <h3 class="has-text-align-center wp-block-post-title has-medium-font-size">
                <a href="<?php echo $product_link; ?>" target="_self"><?php echo $product_title; ?></a>
            </h3>
            <span class="our-latest-release-price">
            <?php echo $product_price; ?>
            </span>
            <div class="wp-block-button wc-block-components-product-button align-center">
                <a class="wp-block-button__link wp-element-button wc-block-components-product-button__button add_to_cart_button  product_type_simple has-font-size has-small-font-size has-text-align-center wc-interactive" href="<?php echo $product_link;?>"><?php echo esc_html('Learn More')?></a>
            </div>
        </div>
        <!-- Ends Here -->

        <?php
    }
    wp_reset_postdata();
} else {
    echo "<p class='no-post-message'>No recent latest releases</p>";
}

printf('</div>');