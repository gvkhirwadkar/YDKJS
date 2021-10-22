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
