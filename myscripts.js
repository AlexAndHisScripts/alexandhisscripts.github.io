
//my rubbish method of loading high res images
function ReplaceImages() {
	//yes, I suck at javascript. I've never used it before
	var images = document.getElementsByClassName("shipimage");
	for (var i = 0; i < images.length; i++) {
		images[i].src = images[i].src.replace("resized/", "");
	}
        
    replacedImages = true;

    //yes, this code is awful, but I spent the last 20 minutes trying to get it to work when I pass a value
    ShowSnackbarLoading();
}

function upgradeImage(image)
{
	//runs when you mouse over an image
	image.src = image.src.replace("resized/", "");
}

function ShowSnackbarLoading() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
//runs on scroll
function visibilityChecker()
{
	var images = document.getElementsByClassName("shipimage");
	for (var i = 0; i < images.length; i++) {
        if (checkvisible(images[i]))
        {
            if (images[i].src.includes("resized"))
            {
                images[i].src = images[i].src.replace("resized/", "");
                console.log("Replaced image");
            } else {
                console.log("Already replaced");     
			}
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
        st = scrollY() + 500, // Scroll Top
        y = posY(elm);
        y = y;

    return (y > (vpH + st));
}
////////////////////////////////////