//In this folder, run sudo npm install wiring-pi
var wpi = require('wiring-pi');

wpi.setup('gpio');
var pin = (process.argv[2] ? Number(process.argv[2]) : 17);

wpi.pinMode(pin, wpi.OUTPUT);

value = 1;

setInterval(function toggleBulb, 500);

function toggleBlub(){
wpi.digitalWrite(pin, value);
  console.log("setting port" + pin + to + value);
  value = +!value;

}