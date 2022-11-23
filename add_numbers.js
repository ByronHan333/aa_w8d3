const readline = require('readline');

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

const completionCallback = (sum) => {
    console.log(`total sum: ${sum}`);
}

const addNumbers = (sum, numsLeft, completionCallback) => {
    if (numsLeft === 0) {
        completionCallback(sum);
        rl.close();
    } else {
        rl.question ("Enter a number.", num => {
            num = parseInt(num);
            sum += num;
            numsLeft--;
            console.log(`Current Sum: ${sum}`);
            addNumbers (sum, numsLeft, completionCallback);
        });
    }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));