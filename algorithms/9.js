/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    var len = x.length;
    for(var i=0; i<Math.floor(len/2); ++i) {
        if(x[i] !== x[len - i - 1]) {
            return false;
        }
    }
    return true;
};

//alert(isPalindrome(12321));