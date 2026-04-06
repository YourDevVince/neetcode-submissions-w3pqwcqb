class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // create stack 
        let stack = [];

        for ( const t of tokens) {
            if ( t === "+" || t === "-" || t === "*" || t === "/" ) {
            let b = stack.pop();
            let a = stack.pop();

            let res;
            if ( t === "+") res = a + b;
            else if ( t === "-") res = a - b;
            else if ( t === "*") res = a * b;
            else res = Math.trunc(a / b);
            stack.push(res);
            } else {
                stack.push(Number(t));
            }
        }
        return stack.pop();
           }
}
