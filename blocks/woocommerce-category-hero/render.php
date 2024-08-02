<?php

$backend = isset( $is_preview ) && $is_preview;

if ( $backend ):
	printf(
		'<div class="alert-box alert-box-warning">%s</div>',
		esc_html__( 'Display Product Category Hero Section', 'twentytwentyfour-child' )
	);

	return;
endif;

$block           = $block ?? [];
$block_classname = twenty_twenty_four_get_acf_block_classname( $block, 'wp-block-woocommerce-category-hero' );

$category = get_queried_object();
$category_image_id = get_term_meta($category->term_id, 'thumbnail_id', true);
$category_image = wp_get_attachment_image($category_image_id, 'full', false);
$category_name = $category->name;
$category_desc = $category->description;

printf( '<div class="%s">', $block_classname ); ?>

<div class="category-img-box category-box">
	<?php echo $category_image; ?>
</div>

<div class="category-content-box category-box">
    <div class="category-content-inner">
	<h1><?php echo $category_name;?></h1>
	<p><?php echo $category_desc;?></p>
</div>
</div>


<?php printf( '</div>' );