function showDevData()
{
    alert("Commit #35 private")
}

function throwOutShittyBrowsers()
{
    if (/Edge/.test(navigator.userAgent)) {
    alert('You are using Microsoft Edge, which does (in my testing, it might have updated) not support the javascript required to load high resolution images without hovering over them. Please upgrade to an actually good browser, like Firefox or Chrome. You *will* have a worse experience on this site if you use Edge.');
    }

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (window.document.documentMode)
    {
        //alert("You are using Internet Explorer. If you are using internet explorer, you probably don't know what it does. Internet explorer is a web browser. It downloads code from websites and displays it to you in a nice, idiot friendly way. There are lots of browsers. Internet explorer is possibly the worst one in existence. See, every browser implements the standards a little differently. Internet Explorer has no concept of standards. It goes out of its way to ignore them. Microsoft, through the early 2000s, engaged in a plethora of antitrust activities to make sure people used Internet Explorer. They were eventually fined for this, but it was too little, too late. People still use Internet Explorer to this day, despite it being objectively inferior in every single way. Because IE is so prevalent, web developers (the people who make websites) have to go far out of their way to accomodate for it shitting on standards. In this website, it means you can not download high resolution versions of the images automatically. I am not a web developer, I am a hobbyist, meaning I am not going to do that because I do not have to. Instead, I am going to tell you to download an actually good browser like Firefox or Chrome and use that instead. \n \n \n If you are forced to use Internet Explorer because of idiot boomers at your workplace or it being the only thing you are allowed to use at your school, I am sorry that you have had to suffer through Internet Explorer and my rant. If you hover over an image IE seems to get the idea that you actually want to run the javascript (note: clicking the preload images button does not work for some reason) and you can view it in high resolution.")
        alert('You are using Internet Explorer, which does not support the javascript required to load high resolution images without hovering over them. Please upgrade to an actually good browser, like Firefox or Chrome. You *will* have a worse experience on this site if you use IE.');
    }
}

throwOutShittyBrowsers();

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
        st = scrollY();
        y = posY(elm);
        y = y;

    return (y > (vpH + st));
}
////////////////////////////////////