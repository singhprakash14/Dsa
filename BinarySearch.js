










// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.


// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4





var search = function(nums, target) {
    let l=0
    let R=nums.length -1
    while(l<=R){
        let mid=Math.floor((l+R)/2)
        if(nums[mid]===target){
            return mid
        }else  if(nums[mid]<target){
            l=mid+1
        }else{
            R=mid-1
        }
      
    }
      return -1


    
};
