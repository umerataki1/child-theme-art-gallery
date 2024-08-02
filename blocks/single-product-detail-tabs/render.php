<?php

$backend = isset( $is_preview ) && $is_preview;

if ( $backend ):
	printf(
		'<div class="alert-box alert-box-warning">%s</div>',
		esc_html__( 'Product Detail Tabs', 'twentytwentyfour-child' )
	);

	return;
endif;

$block           = $block ?? [];
$block_classname = twenty_twenty_four_get_acf_block_classname( $block, 'wp-block-single-product-detail-tabs' );
global $product;

printf( '<div class="%s">', $block_classname );
?>
    <div class="tab-links">
        <a href="#" class="tab active tab-1" data-toggle-target=".tab-content-1"><?php echo  esc_html__( 'Our Take');?></a>
        <a href="#" class="tab tab-2" data-toggle-target=".tab-content-2"><?php echo  esc_html__( 'Details');?></a>
    </div>


    <div class="tab-content tab-content-1 active">
        <div class="tab-inner tab-inner-1">
            <p><?php echo $product->get_description( '' ); ?></p>
        </div>
        <a href="#" class="tab-1-readmore tab-readmore"><?php echo esc_html__( 'Read more +');?></a>
    </div>
    <div class="tab-content tab-content-2">
        <div class="tab-inner tab-inner-2 active">
            <p><?php echo $product->get_short_description( '' ); ?></p>
        </div>
    </div>

<?php printf( '</div>' );