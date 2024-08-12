<?php

/**
 * This class will set up the After Theme Setup Configurations
 *
 * @package    TwentyTwentyFour-Child
 * @subpackage TwentyTwentyFour-Child/includes
 */
class After_Theme_Setup
{

    /**
     * Initialize the class and set its properties.
     *
     * @since    0.0.1
     */
    public function __construct()
    {

        $this->register_hooks();
    }

    /**
     * Register required hooks
     */
    public function register_hooks()
    {

        /**
         * Register Theme Hooks
         */
        add_action('wp_enqueue_scripts', [$this, 'enqueue_child_theme_scripts']);
 		add_action( 'enqueue_block_assets', [ $this, 'enqueue_child_theme_admin_scripts' ] );
        add_action('enqueue_block_editor_assets', [$this, 'enqueue_child_theme_admin_scripts']);
        add_action('after_setup_theme', [$this, 'enqueue_child_theme_editor_scripts']);
        add_action('after_setup_theme', [$this, 'customizer_selective_refresh_widgets']);


    }

    /**
     * Register Theme Scripts
     */
    public function enqueue_child_theme_scripts()
    {
        // Enqueue parent theme's stylesheet
       wp_enqueue_style('parent-style-css', get_template_directory_uri() . '/style.css');

        // Enqueue child theme's stylesheet
        wp_enqueue_style('child-style-css', get_stylesheet_directory_uri() . '/build/public.css', array('parent-style'), '1.0.0', 'all');


        // Enqueue child theme's JavaScript file
        wp_enqueue_script('child-script', get_stylesheet_directory_uri() . '/build/public.js', array('jquery'), '1.0.0', true);

    }


    /**
     * Register Theme Admin Scripts
     */
    public function enqueue_child_theme_admin_scripts()
    {
        wp_enqueue_script('child-theme-block-scripts', get_stylesheet_directory_uri() . '/build/index.js',
            array('jquery', 'wp-blocks', 'wp-block-editor'), '1.0', true);
    }


    /**
     * Register Theme Editor Scripts
     */
    public function enqueue_child_theme_editor_scripts()
    {
        add_editor_style('build/index.css');
    }

    public function customizer_selective_refresh_widgets()
    {
        add_theme_support('customize-selective-refresh-widgets');
    }
}