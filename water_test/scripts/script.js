// How to load in modules
const Scene = require('Scene');
const Patches = require('Patches');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

var counterNumber = Scene.root.find('showscore');
var counterTime = Scene.root.find('timecounter');

var score = Patches.getScalarValue('score');
var time = Patches.getScalarValue('time');

counterNumber.text = score.toString();
counterTime.text = time.toString();