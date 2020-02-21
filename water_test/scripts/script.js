// How to load in modules
const Scene = require('Scene');
const Patches = require('Patches');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// Define Text
var counterNumber = Scene.root.find('showscore');
var counterTime = Scene.root.find('timecounter');
var gameCounter = Scene.root.find('gamecounter');
var result = Scene.root.find('result');

// Define Variable from Patches
var score = Patches.getScalarValue('score');
var time = Patches.getScalarValue('time');
var gameTime = Patches.getScalarValue('gametime');

// Output via Text
counterNumber.text = score.toString();
counterTime.text = time.toString();
gameCounter.text = gameTime.toString();
result.text = score.toString();