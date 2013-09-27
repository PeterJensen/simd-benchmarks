//load ('float32x4array.js');
load ('ecmascript_simd.js');
load ('base.js');

// load individual benchmarks
load ('kernel-template.js');
load ('average.js');
load ('mandelbrot.js');

function printResult (str) {
  print (str);
}

function printError (str) {
  print (str);
}

function printScore (str) {
  print (str);
}

benchmarks.runAll ({notifyResult: printResult,
                    notifyError:  printError,
                    notifyScore:  printScore});
