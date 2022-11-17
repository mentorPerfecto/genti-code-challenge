//// Question One

const fibonacci = (n) => { // O(n)
    if (n === 0 || n === 1) {

        return n; /// O(1)
    }
    return fibonacci(n - 2) + fibonacci(n - 1); /// O(2^n)
    /// recursion
}

console.log(fibonacci(12))
/// Time complexity : O(2^n);
/// Space complexity: 0(n)

