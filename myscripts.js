//yes, this is basic analytics. But I didn't put google analytics in, this goes to a 40 line python script pretending to be a web server that counts how many requests it receives.

function send(theUrl)
{
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, true); // false for synchronous request
	xmlHttp.send(".");
	return xmlHttp.responseText;
}

send("https://86.31.173.35");

//my rubbish method of loading high res images
function ReplaceImages() {
	//yes, I suck at javascript. I've never used it before
	var images = document.getElementsByClassName("shipimage");
	for (var i = 0; i < images.length; i++) {
		images[i].src = images[i].src.replace("resized/", "");
	}
}

function upgradeImage(image)
{
	//runs when you mouse over an image
	image.src = image.src.replace("resized/", "");
}

//runs on scroll
function visibilityChecker()
{
	var images = document.getElementsByClassName("shipimage");
	for (var i = 0; i < images.length; i++) {
        if (checkvisible(images[i]))
        {
            images[i].src = images[i].src.replace("resized/", "");
            console.log("Replaced image");
		}
	}
}




//////////////////////////////// calculates visibility

function posY(elm) {
    var test = elm, top = 0;

    while(!!test && test.tagName.toLowerCase() !== "body") {
        top += test.offsetTop;
        test = test.offsetParent;
    }

    return top;
}

function viewPortHeight() {
    var de = document.documentElement;

    if(!!window.innerWidth)
    { return window.innerHeight; }
    else if( de && !isNaN(de.clientHeight) )
    { return de.clientHeight; }

    return 0;
}

function scrollY() {
    if( window.pageYOffset ) { return window.pageYOffset; }
    return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}

function checkvisible( elm ) {
    var vpH = viewPortHeight(), // Viewport Height
        st = scrollY(), // Scroll Top
        y = posY(elm);

    return (y > (vpH + st));
}
////////////////////////////////////