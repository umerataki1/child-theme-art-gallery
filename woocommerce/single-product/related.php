<?php
/**
 * Related Products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/related.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://woo.com/document/template-structure/
 * @package     WooCommerce\Templates
 * @version     3.9.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( $related_products ) : ?>

    <section class="related products es-related-products">

		<?php woocommerce_product_loop_start(); ?>

		<?php foreach ( $related_products as $related_product ) : ?>
			<?php
            $productIntro = substr( $related_product->short_description, 0, 100 );
			$archive_add_to_cart_button_text = get_field( 'archive_add_to_cart_button_text', 'options');
            ?>
            <li class="related-product">
                <a href="/<?php echo $related_product->slug;?>" title="<?php echo $related_product->name; ?>">
                <?php echo wp_get_attachment_image($related_product->image_id, 'large', false); ?>
                </a>
                <div class="related-products-content">


                    <h3 class="has-text-align-center wp-block-post-title has-medium-font-size">
                        <a href="/<?php echo $related_product->slug;?>" title="<?php echo $related_product->name; ?>">
                        <?php echo $related_product->name; ?>
                        </a>

                    </h3>
                    <p class="es-product-description"><?php echo $productIntro; ?></p>
                    <p class="es-product-price">$<span><?php echo $related_product->regular_price; ?></span></p>
                    <div class="wp-block-button wc-block-components-product-button align-center"><a class="wp-block-button__link wp-element-button wc-block-components-product-button__button add_to_cart_button  product_type_simple has-font-size has-small-font-size has-text-align-center wc-interactive" href="/<?php echo $related_product->slug;?>" title="<?php echo $related_product->name; ?>"><?php echo $archive_add_to_cart_button_text;?></a></div>
                </div>

            </li>
		<?php endforeach; ?>

		<?php woocommerce_product_loop_end(); ?>

    </section>
<?php
else :

    echo "<p class='no-related-product'>Oops! It seems we don't have any related products for this item at the moment.</p>";

    endif;

wp_reset_postdata();
