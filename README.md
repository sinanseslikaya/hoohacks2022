# NewsCheck

![](images/logo.png)

## Key Features

* Shows bias and credibility rating as an icon when browsing a news site
* Provides details about the site's bias/credibility and offers links to alternate news sites 

## Installation Instructions

To clone and run this application, you'll need [Git](https://git-scm.com) and a Chromium-based browser (Google Chrome, Edge and Brave are a few) installed on your computer. 

1. Download/Clone this git repo into your directory of choice. Make sure to unzip if needed.
2. Open your browser and go to chrome://extensions
3. Enable Developer Mode (on the top right)
4. Click "Load Unpacked"
5. Select the directory to which this repo was downloaded
6. Success! The extension is now installed. You may need to pin the extension to the toolbar to view the dynamic icons.

## How To Use

When browsing a supported news site, the extension's icon changes to one of 15 custom icons describing the site's political bias and Factual Report Rating.

### How to interpret the icons

Each icon has one of three colors based on the credibility of the current news site:

![](images/LCGreen.png) A Green icon indicates that the site is highly reliable

![](images/LYellow.png) A Yellow icon indicates that the site is reliable.

![](images/RCRed.png) A Red icon indicates that the site may or may not be reliable.

Each icon also has one of five policatical bias ratings:

![](images/LYellow.png) 'L' indicates a strong left bias.

![](images/LCGreen.png) 'LC' indicates a weak left bias.

![](images/CRed.png) 'C' indicates a largely unbiased site.

![](images/RCGreen.png) 'RC' indicates a weak right bias.

![](images/RRed.png) 'R' indicates a strong right bias.

## Credits

Special thanks to @nsfyn55 for the [bias and credibility dataset](https://gist.github.com/nsfyn55/605783ac8de36f361fb10ef187272113) we used.

This software uses the following open source packages:

- [jQuery](https://jquery.com/)

More sources for specific blocks of code can be found in sources.txt

## License

MIT. See LICENSE.md for full details.



