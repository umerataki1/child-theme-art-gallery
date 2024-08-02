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
$block_classname = twenty_twenty_four_get_acf_block_classname( $block, 'wp-block-enquire-here' );
$enquire_here_form_shortcode = get_field( 'enquire_here_form_shortcode', 'options');

printf( '<div id="popup" class="%s popup">', $block_classname ); ?>
  <div class="popup-content">
    <span class="close">&times;</span>
    <?php echo do_shortcode( $enquire_here_form_shortcode); ?>
  </div>
<?php printf( '</div>' );
