# communityships
The new home of the community ships page, previously on the starbase wiki. This has been migrated due to high server load because of the images on the wiki. Submit a pull request or send me a message on discord (IHaveNoLife#6972) to update!

Old repo: https://github.com/AlexAndHisScripts/communityships

# Contributing

OK, I hate it when people say contributions are welcome but don't provide any info, so I'm going to explain as much as possible. If this seems daunting or you have problems, just send me a message on Discord and I'll either do it for you or help you through it. Also, github issues asking for help are completely fine.

If you don't know how to use git, I sugggest googling it first, I'm far too terrible a teacher to teach it. If you know git but not the github workflow, fork this project (in the github ui), clone it, change things as you do, push to github, and then submit a pull request to the main branch. 

It's pure HTML/CSS/JS, no frameworks or jquery. I don't do web development so please forgive my bad practices. If you want to add a new ship, go to index.html and copy paste the pattern that's already used. Change the header, image link (note: the top two images should always have the non resized version, the rest should be resized) and description. 

As for images, I've attached my downscaling python script. It shouldn't require any external dependencies. Change the path variable to where you're storing wiki images on your computer and put new images (JPEGS ONLY, PNG'S WILL CRASH) into the wiki images folder. Run the script with the settings on default (enter 0, it will use defaults) and it'll autogenerate the downscaled image. Check it works (open index.html in a browser), commit, push, and submit a pull request.

P.S. New ships go at the top of the page.
