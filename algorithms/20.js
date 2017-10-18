/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var braces = [];
    for(var i=0; i<s.length; ++i) {
        if(s[i] === '{' || s[i] === '[' || s[i] === '(') {
            braces.push(s[i]);
            continue;
        }

        if(braces.length) {
            if((s[i] === '}' && braces[braces.length - 1] === '{') ||
                (s[i] === ']' && braces[braces.length - 1] === '[') ||
                (s[i] === ')' && braces[braces.length - 1] === '(')) {
                braces.pop();
            } else {
                return false;
            }
        } else {
            if(s[i] === '}' || s[i] === ']' || s[i] === ')') {
                return false;
            }
        }
    }
    return !braces.length;
};

// alert(isValid('(])'));