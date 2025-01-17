﻿<%@ Page Language="C#" ContentType="text/html" ResponseEncoding="utf-8" %>
<!doctype html>
<html>
	<head>
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-158358903-1"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'UA-158358903-1');
		</script>
		<meta charset="UTF-8">
		<title>Nathan Getz Portraits | Portfolio</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="/css/main.css">
		<link rel="stylesheet" media="screen and (min-width: 600px)" href="/css/nav-full.css">
		<link rel="stylesheet" media="screen and (max-width: 600px)" href="/css/nav-mobile.css">
		<link rel="stylesheet" href="/css/floating-boxes.css">
		<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400|Open+Sans:300,400&display=swap" rel="stylesheet">
	</head>

	<body onLoad="setLayers()">
		<header id="header"></header>
		<div class="hero rellax" data-rellax-speed="2">
			<div class="hero-image rellax" id="portfolio-hero" data-rellax-speed="-8">
				<div class="hero-text rellax" data-rellax-speed="6">Portfolio</div>
			</div>
		</div>
		<h1>Hello Web Pages</h1>
     		<p>The time is @DateTime.Now</p>
		<footer id="footer"></footer>
		<script src="/js/load_essentials.js"></script>
		<script src="/js/layers.js"></script>
		<script src="/js/rellax.min.js"></script>
		<script>var Rellax = new Rellax('.rellax');</script>
	</body>
</html>
