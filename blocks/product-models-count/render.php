<?php


$backend = isset( $is_preview ) && $is_preview;


if ( $backend ):
	$message = sprintf( esc_html__( "Displays Products Count", 'twentytwentyfour-child' ) );
	printf(
		'<div class="alert-box alert-box-warning">%s</div>',
		$message

	);

	?>
	<?php
	return null;
endif;

$block                 = $block ?? [];
$block_classname       = twenty_twenty_four_get_acf_block_classname( $block, 'wp-block-product-models-count' );
$category              = get_queried_object();
$available_models_text = get_field( 'available_models_text', 'options' );

printf( '<div class="%s">', $block_classname ); ?>

    <p>
		<span>
			<?php echo $category->count; ?>
		</span>
		<?php echo esc_html__( $available_models_text, 'twentytwentyfour-child' ) ?>
    </p>

<?php printf( '</div>' );