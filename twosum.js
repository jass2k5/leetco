class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i = 0;i<nums.length;i++){
            let current = nums[i];//4
            let needed = target-current;//3
            if(map.has(needed)){//yes 
               return [i,map.get(needed)];//1
            }else{
                map.set(current,i);//3-1,
            }
        }
        return [];
    }
}