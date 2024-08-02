<?php

/**
 * This class will set up the Acf options and Acf Blocks
 *
 * @package    TwentyTwentyFour-Child
 * @subpackage TwentyTwentyFour-Child/includes
 */
class Theme_Acf {

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    0.0.1
	 */
	public function __construct() {

		$this->register_hooks();


	}

	/**
	 * Register required hooks

	 */
	public function register_hooks() {

		/**
		 * Register ACF Blocks
		 */
		add_action( 'init', [ $this, 'register_blocks_with_acf' ] );
		add_filter( 'acf/settings/save_json', [ $this, 'localize_acf_fields' ]);
	}

	/**
	 * Register ACF fields for blocks
	 */
	public function register_blocks_with_acf() {
		$block_directories = glob( get_stylesheet_directory() . '/blocks/*', GLOB_ONLYDIR );

		foreach ( $block_directories as $block_directory ) {
			$block_json = $block_directory . '/block.json';

			// Ensure that block.json exists for each block
			if ( file_exists( $block_json ) ) {
				// Register each block using its block.json metadata
				register_block_type( $block_json );
			}

		}
	}

	/**
	 * Localizing ACF fields for blocks
	 */
	function localize_acf_fields( $path ) {
		return get_stylesheet_directory() . '/acf-json';
	}
}
