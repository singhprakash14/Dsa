
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

