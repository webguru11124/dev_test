function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));  // Output: 55

function fibonacci(n, memo = {}) {
    if (n <= 1) return n;
    if (!memo[n]) {
        memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    }
    return memo[n];
}

console.log(fibonacci(10));  // Output: 55