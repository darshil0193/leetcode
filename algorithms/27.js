/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var unique_pointer = 0;
    for(var i=0; i<nums.length; ++i) {
        if(nums[i] !== val) {
            nums[unique_pointer] = nums[i];
            unique_pointer++;
        }
    }
    return unique_pointer;
};

alert(removeElement([3,2,2,3], 3));