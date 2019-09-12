var jsActivatedClick = false;

// Let's get hold of those elements
var outer = document.querySelector('.outer-test');
var inner = document.querySelector('.inner-test');

document.querySelector('.test-2').addEventListener('click', function () {
  jsActivatedClick = true;
  inner.click();
  setTimeout(function () {
    jsActivatedClick = false;
  }, 100);
});
document.querySelector('.clear-log-3').addEventListener('click', function () {
  document.querySelector('.log-output-3').value = '';
});