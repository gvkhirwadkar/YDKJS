// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function someFunction() {
  for (var i = 0; i < 10; i++) {
    var k = i;
  }
  if (i) {
    console.log('I is here', i);
  } else {
    console.log('K is here', k);
  }
}

someFunction();

var arg = 100;
console.log('Outside', arg);

function someOtherFunc() {
  let arg = 10;
  console.log('Inside let', arg);
}

someOtherFunc(1);
console.log('Outside', arg);

function process(data) {
  console.log('Processing ', data);
}
var someReallyBigData = 'Some really big data may be json';

process(someReallyBigData);

var btn = document.getElementById('my_button');

btn.addEventListener('click', function eventHandler(evt) {
  debugger;
  console.log('button clicked');
});

var foo = true,
  baz = 10;

if (foo) {
  //first block
  var bar = 3;
  if (baz > bar) {
    //second block
    console.log('bar', bar);
  }
}

var foo1 = true,
  baz1 = 10;

if (foo1) {
  //first block
  var bar1 = 3;
}

if (baz1 > bar1) {
  //second block
  console.log('bar1 refactored', bar1);
}

var foo2 = true,
  baz2 = 10;

if (foo2) {
  //first block
  let bar2 = 3;
}
let bar2 = 3;
//This is will not work bcs let is defined in first block and you    referring in second block
if (baz2 > bar2) {
  //second block
  console.log('bar2 refactored', bar2);
}

iAmSameAsVariable();
console.log(iAmSameAsVariable); //precedence to function hoisting if variable nad function has same name

function iAmSameAsVariable() {
  console.log('Hello World');
}

var iAmSameAsVariable = 100;

//with function expression

loo();
function loo() {
  console.log('loo');
}

var loo = function () {
  console.log('loo Expression');
};

function loo() {
  //this one with same name overrides
  console.log('loo2');
}

goo();
var a = true;
if (a) {
  function goo() {
    console.log('1');
  }
} else {
  function goo() {
    console.log('2');
  }
}
