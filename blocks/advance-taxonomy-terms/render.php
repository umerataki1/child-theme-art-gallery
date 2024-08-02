<?php
$backend = isset($is_preview) && $is_preview;

if ($backend):
	$message = sprintf(esc_html__("Displays Taxonomies", 'twentytwentyfour-child'));
	printf(
		'<div class="alert-box alert-box-warning">%s</div>',
		$message

	);
	return null;
endif;

$block           = $block ?? [];
$block_classname = twenty_twenty_four_get_acf_block_classname( $block, 'wp-block-advanced-terms-taxonomy' );

$registered_taxonomies = get_field( 'registered_taxonomies' );
$display_view_all         = get_field( 'display_view_all' );
$view_all_label           = get_field( 'view_all_label' );
$view_all_link_to_post_id = get_field( 'view_all_link_to_post_id' );
$has_empty                = get_field( 'hasEmpty' );
$order                    = get_field( 'order' );
$order_by                 = get_field( 'orderby' );
$number                   = get_field( 'number' );
$show_hierarchical        = get_field( 'isHierarchical' );
if ( ! $registered_taxonomies ) {
	return;
}

$args       = array(
	'post_type'    => 'campaigns',
	'child_of'     => 0,
	'parent'       => '',
	'orderby'      => $order_by,
	'order'        => $order,
	'hide_empty'   => $has_empty == true ? 0 : 1,
	'hierarchical' => $show_hierarchical == true ? 0 : 1,
	'taxonomy'     => $registered_taxonomies,
	'pad_counts'   => false,
	'number'       => $number,
);
$categories = get_categories( $args );
echo sprintf( '<div class="cc-container">');
echo sprintf( '<ul class="cc-horizontal">');

$categories_count = count($categories);
$current_category = 1;

foreach ( $categories as $category ) {
	$url = get_term_link( $category ); ?>
    <li>
        <a href="<?php echo esc_url($url); ?>" title="<?php echo esc_attr($category->name); ?>">
			<?php echo esc_html($category->name); ?>
        </a>
    </li>
	<?php

	if ($current_category < $categories_count) {
		echo ' | ';
	}

	$current_category++;
}
echo sprintf( '</ul>' );
echo sprintf( '</div>' );