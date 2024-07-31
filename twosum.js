Two Integer Sum

Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.



 twoSum(nums, target) {
       const bag = {};
       for( let i=0; i<nums.length; i++){
        const  hunter=nums[i]
        const complement = target-hunter
           if (bag[complement] !== undefined) {
            return [bag[complement], i];
        }
            bag[hunter] = i;
       }


    }
