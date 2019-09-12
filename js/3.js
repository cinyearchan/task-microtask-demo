var targetLogOutput;

function log2 (str) {
  console.log(str);
  var el;

  if (jsActivatedClick) {
    el = document.querySelector('.log-output-3');
  }
  else {
    el = document.querySelector('.log-output-2');
  }
  el.value += (el.value ? '\n' : '') + str;
}

var _clearLog = document.querySelector('.clear-log-2');
if (_clearLog) {
  _clearLog.addEventListener('click', function () {
    document.querySelector('.log-output-2').value = '';
  });
}

// Let's get hold of those elements
var outer = document.querySelector('.outer-test');
var inner = document.querySelector('.inner-test');

// Let's listen for attribute changes on the
// outer element
new MutationObserver(function () {
  log2('mutate');
}).observe(outer, {
  attributes: true
});

// Here's a click listener…
function onClick () {
  log2('click');

  setTimeout(function () {
    log2('timeout');
  }, 0);

  Promise.resolve().then(function () {
    log2('promise');
  });

  outer.setAttribute('data-random', Math.random());
}

// …which we'll attach to both elements
inner.addEventListener('click', onClick);
outer.addEventListener('click', onClick);