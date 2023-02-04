if ('geolocation' in navigator) {
	navigator.geolocation.getCurrentPosition(function (position) {
		console.log(position);
	});
}

// Quando o usuário rola mais de 20 pixels da parte superior da página, mostre o botão
window.onscroll = function () { scrollFunction(); };
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById('topBtn').style.display = 'block';
	} else {
		document.getElementById('topBtn').style.display = 'none';
	}
}
// Quando o usuário clica no botão, volte ao topo da página
function topFunction() {
	console.log("ontop");
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}