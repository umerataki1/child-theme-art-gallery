<?php

$backend = isset( $is_preview ) && $is_preview;

if ( $backend ):
	printf(
		'<div class="alert-box alert-box-warning">%s</div>',
		esc_html__( 'Archive Pagination', 'twentytwentyfour-child' )
	);

	return;
endif;

global $wp_query;
$has_pagination  = $wp_query->max_num_pages > 1;
$block           = $block ?? [];
$block_classname = twenty_twenty_four_get_acf_block_classname( $block, 'wp-block-archive-archive-pagination' );

if ( $has_pagination ):
	printf( '<div class="%s">', $block_classname );
	the_posts_pagination( [
		'type'      => 'list',
		'prev_text' => '<',
		'next_text' => '>'
	] );
	printf( '</div>' );
endif;

