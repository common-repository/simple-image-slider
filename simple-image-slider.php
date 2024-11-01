<?php

/**
 * Plugin Name:       Simple Image Slider
 * Description:       Simple Image slider is a powerful and convenient block. It allows you to display multiple images on your website.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author: 			  Cakewp
 * Author URI: 		  https://www.cakewp.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       simple-image-slider
 *
 * @package           create-block
 */

add_action('init', function () {
	wp_register_script(
		'bs_image_slider_script',
		plugins_url('/', __FILE__) . './scripts/index.js',
		array(),
		uniqid(),
		false
	);

	register_block_type(__DIR__ . '/build');
});
