/**
 * @param {string} s
 * @return {number}
 * @link https://leetcode.com/problems/roman-to-integer/description/
 */
var romanToInt = function(s) {
    s = s.toUpperCase();
    var romanDictionary = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    };
    var integer = romanDictionary[s[0]];
    for(var i = 1; i<s.length; ++i) {
        if(romanDictionary[s[i - 1]] < romanDictionary[s[i]]) {
            integer = integer + romanDictionary[s[i]] - 2 * romanDictionary[s[i - 1]]
        } else {
            integer = integer + romanDictionary[s[i]]
        }
    }
    return integer;
};

// alert(romanToInt('XLIX'));