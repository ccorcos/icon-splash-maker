#!/usr/local/bin/slimerjs

inputFile = phantom.args[0]
width = phantom.args[1]
height = phantom.args[2]
outputFile = phantom.args[3]

var page = require('webpage').create();
page.open('http://localhost:8000/' + inputFile, function (status) {
    page.viewportSize = { width:width, height:height };
    page.render(outputFile)
    slimer.exit()
});
