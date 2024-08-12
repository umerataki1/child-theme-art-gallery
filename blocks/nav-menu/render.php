<?php

$backend = isset( $is_preview ) && $is_preview;

if ( $backend ):
    $message = sprintf( esc_html__( "Displays Navigation menu", 'twentytwentyfour-child' ) );
    printf(
        '<div class="nav-menu">%s</div>',
        $message
    );
    return null;
endif;

$block           = $block ?? [];
$block_classname = twenty_twenty_four_get_acf_block_classname( $block, 'wp-block-campaign-email-template' );
printf( '<div class="%s">', esc_attr( $block_classname ) );

// Fetch ACF field for menu ID
$menu_id = '23'; // Adjust 'menu_id' to match your ACF field name

if ( $menu_id ) {
    wp_nav_menu(array(
        'menu'            => $menu_id,
        'container'       => 'nav',
        'container_class' => 'custom-nav-menu',
        'menu_class'      => 'nav-menu-items',
    ));
} else {
    echo '<p>' . esc_html__( 'No menu selected.', 'twentytwentyfour-child' ) . '</p>';
}

echo '</div>'; // Closing the block wrapper div
?>