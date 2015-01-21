# Icon and Splash Screen Maker

Make icons and splash screen using SVG, HTML, CSS, and render them in all the sizes you need using [node-webshot](https://github.com/brenden/node-webshot)!

## To Do

- Comment on each size, where and how to use it in the head or cordova, etc.

## Getting Started

You need coffeescript:

    npm install -g coffee-script

Install all the node dependancies:

    npm install

Create your icons and your splash screens:

    ./generate -i icon.html -s splash.html

## Tips

- Use viewport width for sizing things so that they scale well for each icon size.
