<?php


$backend = isset( $is_preview ) && $is_preview;


if ( $backend ):
	$message = sprintf( esc_html__( "Displays Campaign Archive Posts", 'twentytwentyfour-child' ) );
	printf(
		'<div class="alert-box alert-box-warning">%s</div>',
		$message

	);

	?>
	<?php
	return null;
endif;

$block           = $block ?? [];
$block_classname = twenty_twenty_four_get_acf_block_classname( $block, 'wp-block-archive-post-block' );

printf( '<div class="%s">', $block_classname );

printf( '<div class="wp-block-campaign-cards-wrapper ">' );

$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
$count = get_field( 'count' );
$args           = array(
	'post_type'     => 'campaigns',
	'post_status'   => 'publish',
	'posts_per_page' => (int) $count,
	'paged'         => $paged

);
$campaign_query = new WP_Query( $args );


if ( $campaign_query->have_posts() ) {
	while ( $campaign_query->have_posts() ) {
		$campaign_query->the_post();

		$title         = get_the_title();
		$trimmed_title = wp_trim_words( $title, 9 );

		$post_link    = get_post_permalink();
		$thumbnail_id = get_post_thumbnail_id();
		$categories   = get_the_category();

		if ( $categories ) {
			$category_links = array();

			foreach ( $categories as $category ) {
				$category_link    = get_category_link( $category->term_id );
				$category_links[] = '<a href="' . esc_url( $category_link ) . '">' . esc_html( $category->name ) . '</a>';
			}
			$campaign_categories = implode( ', ', $category_links );
		}
		?>

		<?php
		echo '<div class="campaign-container">';

		echo '<div class="campaign-image">';
		echo '<a href="' . esc_attr( $post_link ) . '" title="' . esc_attr( $title ) . '">';
		echo wp_get_attachment_image( $thumbnail_id, 'large', false );
		echo '</a>';
		echo '</div>';

		echo '<div class="campaign-content">';
		echo '<div class="campaign-heading">';
		echo '<a href="' . esc_url( $post_link ) . '" title="' . esc_attr( $title ) . '">';
		echo '<h3 class="wp-block-heading">' . $trimmed_title . '</h3>';
		echo '</a>';
		echo '</div>';
		echo '<div class="campaign-categories">' . $campaign_categories . '</div>';
		echo '</div>';
		echo '</div>';


	}

	// Restore original post data
	wp_reset_postdata();
} else {
	echo 'No portfolio posts found.';
}

printf( '</div>' );
printf( '</div>' );
