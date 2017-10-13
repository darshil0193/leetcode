/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var reverseNumber = '0';
    var isNegative = false;
    if(x < 0) {
        isNegative = !isNegative;
        x = x * -1;
    }
    while(x >= 1) {
        reverseNumber = reverseNumber.concat((x%10).toString());
        x = Math.floor(x/10);
    }

    reverseNumber = parseInt(reverseNumber);

    if(reverseNumber < -2147483648 || reverseNumber > 2147483647) {
        return 0;
    }

    return isNegative ? reverseNumber * -1 : reverseNumber;
};

// alert(reverse(-2147483412));