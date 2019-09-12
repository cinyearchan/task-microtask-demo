function log1 (str) {
  console.log(str);
  var logEl = document.querySelector('.log-output-1');
  logEl.value += (logEl.value ? '\n' : '') + str;
}
document.querySelector("#clear").addEventListener("click", function () {
  document.querySelector('.log-output-1').value = '';
});
document.querySelector("#run").addEventListener("click", function () {
  log1('script start');
  setTimeout(function () {
    log1('setTimeout');
  }, 0);
  Promise.resolve().then(function () {
    log1('promise1');
  }).then(function () {
    log1('promise2');
  });

  log1('script end');

});