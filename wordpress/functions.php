<?php 
    function register_my_menus() {
        register_nav_menus(
        array(
            'primary' => __( 'Primary' ),
            'secondary' => __( 'Secondary' )
        )
        );
    }
    add_action( 'init', 'register_my_menus' );
    
    function custom_wp_menu() {
        return wp_get_nav_menu_items(5);
    }
    add_action( 'rest_api_init', function () {
        register_rest_route( 'wp/v2', 'menu', array(
            'methods' => 'GET',
            'callback' => 'custom_wp_menu',
        ) );
    } );
?>