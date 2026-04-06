class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (!Array.isArray(nums)) return nums;
        const uniqueArr = [...new Set(nums)];
        return uniqueArr.length !== nums.length;
    }
}
