<?php


$backend = isset( $is_preview ) && $is_preview;


if ( $backend ):
	$message = sprintf( esc_html__( "Mega menu will display here", 'twentytwentyfour-child' ) );
	printf(
		'<div class="alert-box alert-box-warning">%s</div>',
		$message

	);

	?>
	<?php
	return null;
endif;

$block           = $block ?? [];
$block_classname = twenty_twenty_four_get_acf_block_classname( $block, 'wp-block-mega-menu' );

// printf( '<div  class="%s" style="position: relative;">', $block_classname );


if ( function_exists( 'quadmenu' ) ):
	quadmenu( array( 'theme_location' => 'primary-menu' ) );
else: ?>
    <nav id="navigation">
		<?php
	if ( has_nav_menu( 'primary-menu' ) ):
        wp_nav_menu( array( 'theme_location' => 'primary-menu' ) );
	endif;
    ?>
    </nav>
<?php endif;



// printf( '</div>' );
