function getSyncScriptParams() {
         var scripts = document.getElementsByTagName('script');
         var lastScript = scripts[scripts.length-1];
         var scriptName = lastScript;
         return scriptName.getAttribute('directory');
}

var dir = getSyncScriptParams();

document.write('\
	<div id="header">\
		<div class="container">\
			<h1>Odin</h1>\
		</div>\
	</div>\
\
	<nav id="navbar">\
		<div class="container">\
			<ul>\
				<a href="' + dir + 'index.html"><li>Home</li></a>\
				<a href="' + dir + 'products.html"><li>Products</li></a>\
				<a href="' + dir + 'contact.html"><li>Contact Us</li></a>\
			</ul>\
		</div>\
	</nav>\
');