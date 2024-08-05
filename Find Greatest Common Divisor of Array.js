



var findGCD = function(nums) {
    let minNum = nums[0];
    let maxNum = nums[0];

  
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < minNum) {
            minNum = nums[i];
        }
        if (nums[i] > maxNum) {
            maxNum = nums[i];
        }
    }

   
    return gcd(minNum, maxNum);

};
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
