/**
 * @param {string[]} strs
 * @return {string}
 * @link https://leetcode.com/problems/longest-common-prefix/description/
 */
var longestCommonPrefix = function(strs) {
    var smallestLength = Number.MAX_VALUE;
    for(var i = 0; i<strs.length; ++i) {
        if(strs[i].length < smallestLength) {
            smallestLength = strs[i].length;
        }
    }

    var prefix = '';

    if(smallestLength === Number.MAX_VALUE) {
        return prefix;
    }

    for(i=0; i<smallestLength; ++i) {
        var same = true;
        for(var j=1; j<strs.length; ++j) {
            if(strs[j][i] !== strs[j-1][i]) {
                same = false;
            }
        }
        if(same) {
            prefix = prefix.concat(strs[0][i]);
        } else {
            return prefix;
        }
    }
    return prefix;
};

// alert(longestCommonPrefix([]));