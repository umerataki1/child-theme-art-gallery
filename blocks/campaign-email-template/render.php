<?php


$backend = isset( $is_preview ) && $is_preview;


if ( $backend ):
	$message = sprintf( esc_html__( "Displays Campaign Email Template", 'twentytwentyfour-child' ) );
	printf(
		'<div class="alert-box alert-box-warning">%s</div>',
		$message

	);

	?>
<?php
	return null;
endif;

$block           = $block ?? [];
$block_classname = twenty_twenty_four_get_acf_block_classname( $block, 'wp-block-campaign-email-template' );


$cc_email_title         = get_field( 'cc_email_title', 'options' );
$cc_email_subject_title = get_field( 'cc_email_subject_title', 'options' );
$cc_email_body_title    = get_field( 'cc_email_body_title', 'options' );


$login_or_create_account      = get_field( 'login_or_create_account', 'options' );
$login_or_create_account_text = get_field( 'login_or_create_account_button_text', 'options' );
$send_email_button_text       = get_field( 'send_email_button_text', 'options' );
$enable_copy_button           = get_field( 'enable_copy_button', 'options' );

$campaign_emails = get_field( 'campaign_email', get_the_ID() );

if ( $campaign_emails ) : ?>

<?php printf( '<div class="%s">', $block_classname ); ?>
<div class="cc-email-template">
    <div class="cc-email-template-header">
        <?php if ( ! empty( $cc_email_title ) ): ?>
        <div class="cc-email-template-title">
            <p><?php esc_html_e( $cc_email_title, 'twentytwentyfour-child' ); ?></p>
        </div>
        <?php endif; ?>
        <?php if(count($campaign_emails) > 1){ ?>

        <div class="cc-email-template-selected-name">
            <label
                for="cc-campaign-contacts"><?php esc_html_e( 'Select a person to send email', 'twentytwentyfour-child' ); ?></label>
            <select name="cc-campaign-contacts" id="cc-campaign-contacts">
                <?php foreach ( $campaign_emails as $campaign_email ): ?>
                <?php $selected = ( $campaign_email === reset( $campaign_emails ) ) ? 'selected' : ''; ?>
                <?php $email_contact_name = str_replace( ' ', '-', $campaign_email["email_contact_name"] ); ?>


                <option value="<?php esc_attr_e( $campaign_email["email_contact_name"], 'twentytwentyfour-child' ); ?>"
                    <?php esc_attr_e( $selected, 'twentytwentyfour-child' ); ?>
                    data-contact-name="<?php echo strtolower( $email_contact_name ); ?>">

                    <?php echo $campaign_email["email_contact_name"]; ?>
                </option>
                <?php endforeach; ?>
            </select>
        </div>

        <?php } ?>



    </div>


    <div class="cc-email-template-body">
        <?php foreach ( $campaign_emails as $campaign_email ): ?>
        <?php $campaign_email_name = str_replace( ' ', '-', $campaign_email["email_contact_name"] ); ?>
        <div class="cc-email-content <?php echo count($campaign_emails) == 1 ? 'cc-single-not-hidden' : ''; ?>"
            data-contact-name="<?php echo strtolower( $campaign_email_name ); ?>" style="">
            <?php if ( ! empty( $cc_email_subject_title ) ) : ?>
            <div class="cc-email-subject">
                <p><?php esc_html_e( $cc_email_subject_title, 'twentytwentyfour-child' ); ?>
                    <?php if ( $enable_copy_button ): ?>
                    <span
                        class="cc-email-subject-copy-btn cc-copy-btn"><?php esc_html_e( '(copy)', 'twentytwentyfour-child' ); ?></span>
                    <?php endif; ?>
                </p>
                <p class="cc-email-subject-line">
                    <?php esc_html_e( $campaign_email['email_subject'], 'twentytwentyfour-child' ); ?>
                </p>
            </div>
            <?php endif; ?>
            <?php if ( ! empty( $cc_email_body_title ) ) : ?>
            <div class="cc-email-subject">
                <p><?php esc_html_e( $cc_email_body_title, 'twentytwentyfour-child' ); ?>
                    <?php if ( $enable_copy_button ): ?>
                    <span
                        class="cc-email-body-copy-btn cc-copy-btn"><?php esc_html_e( '(copy)', 'twentytwentyfour-child' ); ?></span>
                    <?php endif; ?>
                </p>
            </div>
            <?php endif; ?>

            <?php if ( ! empty( $campaign_email['email_body'] ) ) : ?>
            <div class="cc-email-body-content">
                <?php echo $campaign_email['email_body']; ?>
            </div>
            <?php endif; ?>

            <div class="cc-contact-buttons">

                <?php if ( ! empty( $campaign_email['email_send_email'] ) ): ?>
                <?php

							$strip_tags_email_body  = strip_tags($campaign_email['email_body']);
							$email_bodytext = str_replace( '&nbsp;', " ", $strip_tags_email_body);
							$url_encode = urlencode( $email_bodytext);
							$email_body_text = str_replace( array('+'), " ", $url_encode);



							?>

                <div class="cc-email-email">
                    <a class="cc-campaign-btn"
                        href="mailto:<?php echo $campaign_email['email_send_email'] . '?subject=' . $campaign_email['email_subject'] . '&body=' . $email_body_text; ?>">
                        <?php ! empty( $send_email_button_text ) ? esc_html_e( $send_email_button_text, 'twentytwentyfour-child' ) : esc_html_e( "Send Email", 'twentytwentyfour-child' ); ?>
                    </a>
                </div>

                <?php endif; ?>

                <!--						--><?php //if ( ! empty( $login_or_create_account ) ): ?>
                <!--                            <div class="cc-email-email">-->
                <!--                                <a class="cc-campaign-btn-outline" href="--><?php //echo $login_or_create_account; ?>
                <!--">-->
                <!--									--><?php //! empty( $login_or_create_account_text ) ? esc_html_e( $login_or_create_account_text, 'twentytwentyfour-child' ) : esc_html_e( "Login or Create Account", 'twentytwentyfour-child' ); ?>
                <!--</a>-->
                <!--                            </div>-->
                <!--						--><?php //endif; ?>


            </div>


        </div>

        <?php endforeach; ?>

    </div>


</div>
<?php printf( '</div>' ); ?>
<?php endif; ?>

<?php if (!$campaign_emails) {
	printf('<div class="cc-email-template-title"><p>Email</p></div>');
	printf('<div id="cc-fallback-form">');
	echo  do_shortcode('[gravityform id="3" title="false" description="false"]');
	printf('</div>');
};