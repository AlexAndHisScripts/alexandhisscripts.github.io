//yes, this is basic analytics. But I didn't put google analytics in, this goes to a 40 line python script pretending to be a web server that counts how many requests it receives.

function sendAnalytics(theUrl)
{
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, true); // false for synchronous request
	xmlHttp.send(".");
	return xmlHttp.responseText;
}
//oooh, yay, hardcoded IP's, this is never going wrong
sendAnalytics("https://86.31.173.35:8196");
