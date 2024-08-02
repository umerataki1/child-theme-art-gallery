<?php

$backend = isset( $is_preview ) && $is_preview;

if ( $backend ):
	printf(
		'<div class="alert-box alert-box-warning">%s</div>',
		esc_html__( 'Display news image background with customized linked box', 'twentytwentyfour-child' )
	);

	return;
endif;

$block           = $block ?? [];
$block_classname = twenty_twenty_four_get_acf_block_classname( $block, 'wp-block-news-image-background' );

$query_args = array(
    'post_type'      => 'esper_news',
    'posts_per_page' => 3, // Number of news posts to display
);
$news_query = new WP_Query( $query_args );

printf( '<div class="%s">', esc_attr( $block_classname ) ); 
?>

<?php if ( $news_query->have_posts() ) : ?>
    <div class="news-list">
        <?php while ( $news_query->have_posts() ) : $news_query->the_post(); ?>
            <?php
            $news_link = get_post_meta(get_the_ID(), 'news_link', true); // Fetch the news_link ACF field
			
            if ($news_link): ?>
                <a href="<?php echo esc_url($news_link); ?>" class="news-item">
            <?php endif; ?>
			 
            
                
				<div class="news-image">
						
					<?php the_post_thumbnail( 'full-size' ); ?>
					<div class="news-content">
						<h3 class="news-title"> <?php the_title(); ?> </h3>
						
						<?php if ($news_link){ ?>
							<span class="news-read-more">NOW AVAILABLE</span>
						<?php } else{?>
							<a class="news-read-more" href="<?php the_permalink(); ?>">NOW AVAILABLE</a>
							<?php
						}  ?>

					</div>
					
				</div>
                 
               
           

            <?php if ($news_link): ?>
                </a> <!-- Close the anchor tag -->
            <?php endif; ?>
        <?php endwhile; ?>
    </div>
    <?php wp_reset_postdata(); ?>
<?php else : ?>
    <p>No news found.</p>
<?php endif; ?>

<?php printf( '</div>' ); ?>