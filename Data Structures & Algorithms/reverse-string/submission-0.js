class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let left = 0;
        let right = s.length - 1; 

        while ( left < right ) {
            let lHolder = s[left];
        s[left] = s[right];
        s[right] = lHolder;
        left++;
        right--;
        }
        return s;
}
}
