//// Question Two

const missing_number = (arr) => {
    let n = arr.length + 1;
    let total_sum = (n * (n + 1)) / 2;
    let arr_sum = arr.reduce(function (a, b) {return a + b;}, 0);
    return total_sum - arr_sum;
}


console.log(missing_number([1,2,3,4,6,7,8]))

/// Time complexity: O(n);
//  Space complexity O(1)