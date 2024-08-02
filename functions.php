<?php
/**
 * Recommended way to include parent theme styles.
 * (Please see http://codex.wordpress.org/Child_Themes#How_to_Create_a_Child_Theme)
 *
 */  

add_action( 'wp_enqueue_scripts', 'twenty_twenty_four_child_style' );
				function twenty_twenty_four_child_style() {
					wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
					wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style') );
				}


require get_stylesheet_directory() . '/vendor/tgmpa/class-tgm-plugin-activation.php';
require get_stylesheet_directory() . '/lib/plugin-manager.php';

/**
 * Get Helper functions
 */
require get_stylesheet_directory() . '/includes/helper-functions.php';

/**
 * Required theme classes
 */
require get_stylesheet_directory() . '/includes/class-acf.php';
require get_stylesheet_directory() . '/includes/class-after-theme-setup.php';
 
function init() {
	new Theme_Acf();
	new After_Theme_Setup();
}

init();