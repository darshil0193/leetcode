/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var unique_pointer = 1;
    for(var i=1; i<nums.length; ++i) {
        if(nums[i] !== nums[i-1]) {
            nums[unique_pointer] = nums[i];
            unique_pointer++;
        }
    }
    return unique_pointer;
};

// alert(removeDuplicates([1,1,2,2,3]));