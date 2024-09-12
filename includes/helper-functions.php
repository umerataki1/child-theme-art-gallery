<?php
/**
 * ACF classes registering functionality
 */
function twenty_twenty_four_get_acf_block_classname($block, $default_classname = '')
{

    $classes = array();

    $classes[] = $default_classname;

    $classes[] = $block['className'] ?? '';

    if (!empty($block['align'])) {
        $classes[] = 'align' . $block['align'];
    }
    if (!empty($block['align_text'])) {
        $classes[] = 'has-text-align-' . $block['align_text'];
    }

    if (!empty($block['align_content'])) {
        $classes[] = 'align-' . $block['align_content'];
    }

    if (!empty($block['textColor'])) {
        $classes[] = 'has-text-color';
        $classes[] = 'has-' . $block['textColor'] . '-color';
    }

    if (!empty($block['backgroundColor'])) {
        $classes[] = 'has-background';
        $classes[] = 'has-' . $block['backgroundColor'] . '-background-color';
    }

    /**
     * Remove empty values
     */
    $classes = array_filter($classes);

    $classes = array_map('sanitize_html_class', $classes);

    return implode(' ', $classes);
}

/*
 * Code shall be inserted in wp_body_open
 * */

function insert_code_to_wp_body_open()
{
   // $code_for_wp_body_open = get_field('code_for_wp_body_open', 'options');

    if (!empty($code_for_wp_body_open)) :
        echo PHP_EOL;
        echo $code_for_wp_body_open;
        echo PHP_EOL;
    endif;

}

// add_action('wp_body_open', 'insert_code_to_wp_body_open');


/**
 * Code shall be inserted in wp_footer
 *
 * @hooked wp_footer
 */
// function insert_code_to_wp_footer()
// {
//     $code_for_wp_footer = get_field('code_for_wp_footer', 'options');

//     if (!empty($code_for_wp_footer)) :
//         echo PHP_EOL;
//         echo $code_for_wp_footer;
//         echo PHP_EOL;
//     endif;

// }

// add_action('wp_footer', 'insert_code_to_wp_footer');

/**
 * Change the placeholder image
 */
 
/**
 * Code shall be inserted in wp_head
 *
 * @hooked wp_head
 */
function insert_code_to_wp_head()
{
    // $code_for_wp_head = get_field('code_for_wp_head', 'options');

    if (!empty($code_for_wp_head)) :
        echo PHP_EOL;
        echo $code_for_wp_head;
        echo PHP_EOL;
    endif;

}

add_action('wp_head', 'insert_code_to_wp_head');


// $enable_slick_script = get_field('enable_slick_script', 'options');

 