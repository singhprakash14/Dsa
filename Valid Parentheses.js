






/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bag = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for(let i=0 ; i<s.length;i++){
      if (map[s[i]]) {
            bag.push(s[i]);
        } else {
            const last = bag.pop();
            if (s[i] !== map[last]) {
                return false;
            }
        }
    }
 return bag.length === 0;

}; 
