// rainbowfrog fibonacci sequence generator

// an array of every frog
var frogArray = [
    'rainbowfrog',
    'rainbowfrog2',
    'rainbowfrogflip',
    'rainbowfroglsd',
    'rainbowfrogmellow',
    'rainbowfrogreverse',
    'rainbowfrogaussie',
    'rainbowfrogshuffle',
    'rainbowfrogshufflereverse',
    'rainbowfrogturbo'
];

function fibonacciFrog() {

  // Parse arg and make sure it's a number
  var requestedLength = parseInt(process.argv[2]);

  // Print out help if it was called incorrectly
  if(isNaN(requestedLength)) {
    printHelp();
    return;
  }

  var frogs = [];

  // Push sequence into an array
  for(var i = 1; i <= requestedLength; i++) {
    frogs.push(fibonacci(i));
  }

  // Frogify the array and print it out
  var frogString = frogify(frogs);

  console.log(frogString + '\n');
  pbcopy(frogString);
}

// Convert each fibonacci number to a sequence of random frogs
function frogify(numArray) {

  var finalString = '';

  numArray.forEach( function(currentNum) {
    var currentLine = '';

    for(var i = 0; i < currentNum; i++) {
      currentLine += ':' + randomFrog() + ': ';
    }

    finalString += currentLine + '\n';
  });

  return finalString;
}

// Basic recursive fibonacci function
function fibonacci(n) {

    if (n <= 2) {
        return 1;
    }

    else {
      return fibonacci(n-1) + fibonacci(n-2);
    }
}

// Get random frog from array
function randomFrog() {
    return frogArray[Math.floor((Math.random() * frogArray.length))];
}

// Print usage
function printHelp() {
    console.log('\n    Rainbowfrog Fibonacci Generator\n    -------------------------------\n\n    USAGE: node fibonacciFrog [sequenceLength]\n\n      Ex: node fibonacciFrog 5\n');
}

// Copy to clipboard
function pbcopy(data) {
  var proc = require('child_process').spawn('pbcopy');
  proc.stdin.write(data);
  proc.stdin.end();
  console.log('Copied frogs to clipboard!');
}

fibonacciFrog();
