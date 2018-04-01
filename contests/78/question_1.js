/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    var dict = {};
    var result = [];
    cpdomains.forEach(function(domain) {
        var value = parseInt(domain.split(' ')[0]);
        var parts_of_domain = domain.split(' ')[1].split('.');
        var currentPart = parts_of_domain[parts_of_domain.length - 1];
        for(var i=parts_of_domain.length - 2; i>=-1; --i) {

            if(dict[currentPart] !== undefined) {
                dict[currentPart] = dict[currentPart] + value;
            } else {
                dict[currentPart] = value;
            }

            currentPart = parts_of_domain[i] + '.' + currentPart;
        }
    });


    Object.keys(dict).forEach(function(key) {
        result.push(dict[key].toString() + " " + key);
    });

    console.log(result);

};

subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]);