const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
    let results = [];
    // The 'outer' for loop - loops through each element in the array
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];

        // The 'inner' while loop - searches for smallest power of 2 greater than the given number
        j = 1;
        while (j < number) {
            j = j * 2;
            console.log(j);
        }
        results.push(j);
        console.log(results);
    }
    return results
}

console.log(smallestPowerOfTwo(numbers))