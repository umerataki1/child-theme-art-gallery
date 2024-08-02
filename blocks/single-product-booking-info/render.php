<?php

$backend = isset( $is_preview ) && $is_preview;

if ( $backend ):
	printf(
		'<div class="alert-box alert-box-warning">%s</div>',
		esc_html__( 'Product Booking Info', 'twentytwentyfour-child' )
	);

	return;
endif;

global $product;
$block           = $block ?? [];
$block_classname = twenty_twenty_four_get_acf_block_classname( $block, 'wp-block-single-product-booking-info' );


$order_by_text            = get_field( 'order_by_text', 'options' );
$phone_number_of_order_by = get_field( 'phone_number_of_order_by', 'options' );
$order_by_icon            = get_field( 'order_by_icon', 'options' );

$visit_our_boutique_text = get_field( 'visit_our_boutique_text', 'options' );
$visit_out_boutique_link = get_field( 'visit_out_boutique_link', 'options' );
$boutique_icon           = get_field( 'boutique_icon', 'options' );

$book_an_appointment_text = get_field( 'book_an_appointment_text', 'options' );
$book_an_appointment_link = get_field( 'book_an_appointment_link', 'options' );
$appointment_icon         = get_field( 'appointment_icon', 'options' );

$ref_number_text   = get_field( 'ref_number_text', 'options' );
$social_share_icon = get_field( 'social_share_icon', 'options' );
$product_sku       = $product->get_sku();


printf( '<div class="%s">', $block_classname ); ?>

<?php if ( ! empty( $order_by_icon ) && ! empty( $order_by_text ) && ! empty( $phone_number_of_order_by ) ): ?>
    <div class="booking-box box-phone">
		<?php echo wp_get_attachment_image( $order_by_icon, 'thumbnail', 'true', array( 'class' => 'img-box' ) ); ?>
        <a href="tel:<?php esc_html_e( $phone_number_of_order_by, 'twentytwentyfour-child' ); ?>"
           title="<?php esc_html_e( $phone_number_of_order_by, 'twentytwentyfour-child' ); ?>">
			<?php esc_html_e( $order_by_text, 'twentytwentyfour-child' ); ?>
			<?php esc_html_e( $phone_number_of_order_by, 'twentytwentyfour-child' ); ?></a>
    </div>
<?php endif; ?>

<?php if ( ! empty( $boutique_icon ) && ! empty( $visit_our_boutique_text ) && ! empty( $visit_out_boutique_link ) ): ?>
    <div class="booking-box box-boutique">
		<?php echo wp_get_attachment_image( $boutique_icon, 'thumbnail', 'true', array( 'class' => 'img-box' ) ); ?>
        <a href="<?php echo esc_url( $visit_out_boutique_link ) ?>"><?php esc_html_e( $visit_our_boutique_text, 'twentytwentyfour-child' ); ?></a>
    </div>
<?php endif; ?>

<?php if ( ! empty( $appointment_icon ) && ! empty( $book_an_appointment_text ) && ! empty( $book_an_appointment_link ) ): ?>
    <div class="booking-box box-boutique">
		<?php echo wp_get_attachment_image( $appointment_icon, 'large', 'true', array( 'class' => 'img-box' ) ); ?>
        <a href="<?php echo esc_url( $book_an_appointment_link ) ?>"><?php esc_html_e( $book_an_appointment_text, 'twentytwentyfour-child' ); ?></a>
    </div>
<?php endif; ?>

    <div class="booking-box box-share">
		<?php if ( ! empty( $social_share_icon) ): ?>
            <div class="box-social-share">
				<?php echo wp_get_attachment_image( $social_share_icon, 'large', 'true', array( 'class' => 'img-box' ) ); ?>
				<?php echo do_shortcode( '[addtoany]' ); ?>
            </div>
		<?php endif; ?>

		<?php if ( ! empty( $ref_number_text ) ): ?>
            <div class="box-sku-ref">
                <p><?php echo $ref_number_text; ?></p>
                <p><?php echo $product_sku; ?></p>
            </div>
		<?php endif; ?>
    </div>

<?php printf( '</div>' );