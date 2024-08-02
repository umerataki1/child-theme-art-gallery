<?php

$backend = isset( $is_preview ) && $is_preview;

if ( $backend ):
	printf(
		'<div class="alert-box alert-box-warning">%s</div>',
		esc_html__( 'Info Box', 'twentytwentyfour-child' )
	);

	return;
endif;

$block           = $block ?? [];
$block_classname = twenty_twenty_four_get_acf_block_classname( $block, 'wp-block-single-product-info-box' );

$info_box_heading     = get_field( 'info_box_heading', get_the_ID() );
$info_box_description = get_field( 'info_box_description', get_the_ID() );
$info_box_image       = get_field( 'info_box_image', get_the_ID() );

$hidden_class = '';

if(empty( $info_box_heading) || empty( $info_box_description) || empty( $info_box_image)){
	$hidden_class = 'es-hidden';
}

printf( '<div class="%s %s">', $block_classname,$hidden_class );

if ( ! empty( $info_box_heading ) && ! empty( $info_box_description ) ):

	printf( '<div class="%s">', 'info-box-content' );
	printf( "<h2>" );
	esc_html_e( $info_box_heading, 'twentytwentyfour-child' );
	printf( "</h2>" );

	printf( "<p>" );
	esc_html_e( $info_box_description, 'twentytwentyfour-child' );
	printf( "</p>" );

	printf( "<a href='%s'>", "#" );
	esc_html_e( "Read more", 'twentytwentyfour-child' );
	printf( "</a>" );

	printf( '</div>' );
endif;

if ( ! empty( $info_box_image ) ):
printf( '<div class="%s">', 'info-box-img' );
echo wp_get_attachment_image( $info_box_image, 'large', false );
printf( '</div>' );
endif;
printf( '</div>' );