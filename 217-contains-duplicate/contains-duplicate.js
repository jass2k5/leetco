/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    ///done
    return set = new Set(nums).size !== nums.length
};