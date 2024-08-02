<?php

$backend = isset( $is_preview ) && $is_preview;

if ( $backend ):
	printf(
		'<div class="alert-box alert-box-warning">%s</div>',
		esc_html__( 'Related Products', 'twentytwentyfour-child' )
	);

	return;
endif;

$block           = $block ?? [];
$block_classname = twenty_twenty_four_get_acf_block_classname( $block, 'wp-block-single-product-related-items' );
?>

<?php printf( '<div class="%s">', $block_classname ); ?>

<?php

global $product;

if( ! is_a( $product, 'WC_Product' ) ){
	$product = wc_get_product(get_the_id());
}
woocommerce_related_products( array(
	'posts_per_page' => 5,
	'columns'        => 5,
	'orderby'        => 'rand',
	'order'          => 'desc',
) );

?>
<?php printf( '</div>' );