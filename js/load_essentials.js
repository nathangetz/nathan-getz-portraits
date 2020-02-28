// load_essentials.js
// document.write("<link rel='stylesheet' type='text/css' href='css/style.css' />");
// document.write("<link rel='stylesheet' type='text/css' href='http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css' />");
// document.write("<script src='js/jquery.js' type='text/javascript'></script>");
document.getElementById('header').innerHTML =
	'<a href="/" target="_self">Nathan Getz Portraits</a>'+
			'<nav>'+
				'<a href="/portfolio/" target="_self">Portfolio</a>'+
				'<a href="/pricing" target="_self">Portrait Pricing</a>'+
				'<a href="/editing" target="_self">Photo Editing</a>'+
				'<a href="/aerial" target="_self">Aerial Photography</a>'+
				'<a href="/equipment" target="_self">Equipment</a>'+
				'<a href="/photoshoot" class="button" target="_self">Request a Photoshoot</a>'+
			'</nav>';
document.getElementById('footer').innerHTML =
	'<hr>'+
		'<span class="heading">Contact</span>'+
		' - '+
		'<a href="mailto:nathangetzportraits@gmail.com" target="_top">nathangetzportraits@gmail.com</a>'+
	'<blockquote>'+
		'<!--a href="">Inquiry Form</a>'+
		'<br>'+
		'<a href="">FAQ</a-->'+
	'</blockquote>'+
	'<hr>'+
	'<p id="copyright">Copyright &copy; ' + new Date().getFullYear() + ' Nathan Getz Portraits. All rights reserved.</p>';