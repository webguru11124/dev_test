function isBalanced(expression) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '(' || expression[i] === '{' || expression[i] === '[' ) {
            stack.push(expression[i]);
        }
        else {
            let last = stack.pop();
            if (expression[i] !== map[last]) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}

console.log(isBalanced("[(a+b)*(c-d)]"));  // returns: true
console.log(isBalanced("{[(a+b)*(c-d)]}"));  // returns: true
console.log(isBalanced("{[(a+b)*(c-d)]"));  // returns: false
console.log(isBalanced("{[(a+b)*(c-d]})"));  // returns: false