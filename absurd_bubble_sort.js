const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askIfGreaterThan = (el1, el2, callback) => {
  rl.question(`Is ${el1} > ${el2}? `, answer => {
    if (answer === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
    // rl.close();
  });
};

const innerBubbleSortLoop = (arr, i, madeAnySwaps, outerBubbleSortLoop) => {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
      if (isGreaterThan) {
        let tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
        madeAnySwaps = true;
      }
      console.log(`${arr}`);
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else {
    // madeAnySwaps = false;
    outerBubbleSortLoop(madeAnySwaps);
    return;
  };
}

// const outerBubbleSortLoop = () => {
//   console.log(`${arr}`);
// }

// let arr = [1,4,3,2];
// innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
// console.log(`${arr}`);

const absurdBubbleSort = (arr, sortCompletionCallback) => {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
};

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  rl.close();
});

// absurdBubbleSort([1, 4, 3, 2], function(arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

// askIfGreaterThan(1,2,(answer)=>{
//   console.log(`${answer}`);
// });
