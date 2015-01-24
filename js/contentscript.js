// Example: Grab the first <img> from the document if it exists.
var imgs = document.images;
for (var i=0, n=imgs.length; i<n; i++) {
	var img = imgs[i];
    var url = img.src;

	var btn = document.createElement('button');
	btn.setAttribute('data-url', url);
	var txt = document.createTextNode("Upload"); 
	btn.appendChild(txt);

	btn.onclick = function(){
		var url = btn.getAttribute('data-url');
		upload(url);
		return false;
	};
	img.parentNode.insertBefore(btn, img);
}
function upload(url){
	chrome.runtime.sendMessage({method: 'postUrl', url: img.src});
}

// var img = document.images[0];
// if (img) {
//     // Send the target of the image:
//     chrome.runtime.sendMessage({method: 'postUrl', url: img.src});
// }