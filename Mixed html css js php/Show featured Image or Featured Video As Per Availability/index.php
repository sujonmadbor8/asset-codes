<?php


if ( get_post_type() === 'use-case' ) {
    $video_url = get_field('featured_video'); // ACF field

    if ( $video_url ) {
        // Show video only
        echo '<div id="use_case_video">' . wp_oembed_get( $video_url ) . '</div>';
    } else {
        // Show featured image only
        echo '<div id="use_case_img">';
            the_post_thumbnail('full');
        echo '</div>';
    }
}