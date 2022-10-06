//// Question One

const fibonacci = (n) => {
    if (n === 0 || n === 1) {

        return n;
    }
    return fibonacci(n - 2) + fibonacci(n - 1);
    /// recursion
}

console.log(fibonacci(12))
/// Time complexity : O(log n);
/// Space complexity: 0(1)

