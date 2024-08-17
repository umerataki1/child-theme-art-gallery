<?php
// Check if this is being rendered in the backend (editor preview)
$backend = isset( $is_preview ) && $is_preview;

if ( $backend ):
    $message = sprintf( esc_html__( "Displays woo buttons", 'twentytwentyfour-child' ) );
    printf(
        '<div class="woo-buttons">%s</div>',
        $message
    );
    return null;
endif;

$block = $block ?? [];
$block_classname = twenty_twenty_four_get_acf_block_classname( $block, 'wp-block-displays-woo-buttons' );
printf( '<div class="%s">', esc_attr( $block_classname ) );

// Ensure we're on a single product page
if (!is_singular('product')) {
    echo '</div>'; // Close the div opened by the block class
    return;
}

// Get the global product object
global $product;

// Bail out if the product is not available
if (!$product) {
    echo '</div>'; // Close the div opened by the block class
    return;
}

// Get the product's permalink
$product_permalink = get_permalink($product->get_id());

// Generate the "Add to Cart" button with a nonce for security
$add_to_cart_button = sprintf(
    '<a href="%s" data-product_id="%d" class="button add_to_cart_button ajax_add_to_cart">%s</a>',
    esc_url( $product->add_to_cart_url() ),
    esc_attr( $product->get_id() ),
    esc_html__( 'Add to Cart', 'text-domain' )
);

// Generate the permalink button
$permalink_button = sprintf(
    '<a href="%s" class="button view_product">%s</a>',
    esc_url( $product_permalink ),
    esc_html__( 'Buy Now', 'text-domain' )
);
?>
<div class="custom-product-buttons">
    <?php echo $permalink_button; ?>
    <?php echo $add_to_cart_button; ?>
</div>
</div> <!-- Close the block class div -->