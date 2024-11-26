<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php get_page_clean_title(); ?> - <?php get_site_name(); ?></title>
    
    <link rel="stylesheet" href="<?php get_theme_url(); ?>/reset.css">
    <link rel="stylesheet" href="<?php get_theme_url(); ?>/style.css">
    <?php get_header(); ?>
</head>
<body id="<?php get_page_slug(); ?>">
    <header>
        <a href="<?php get_site_url(); ?>" class="logo-link">
        <div class="logo">&lt;<?php get_site_name(); ?>/&gt;</div>
            </a>
        <nav>
            <button class="hamburger" aria-label="Menu">
                <span></span><span></span><span></span>
            </button>
            <ul>
                <?php get_navigation(get_page_slug(false)); ?>
            </ul>
        </nav>
    </header>
</body