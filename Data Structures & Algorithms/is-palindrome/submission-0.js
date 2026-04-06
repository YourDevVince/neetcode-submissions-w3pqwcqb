class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let clean = s.replace(/\W/g, '').toLowerCase();
        let start = 0;
        let end = clean.length - 1;
       
       while (start < end) {
        if (clean[start] !== clean[end]) {
            return false
        }
        start++;
        end--;
       }
       return true;
    } 
}
