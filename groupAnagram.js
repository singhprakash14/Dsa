Anagram Groups
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.





class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */


groupAnagrams(strs) {
 const anagrams = new Map();

     for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            const key = str.split('').sort().join('');
            if (!anagrams.has(key)) {
                anagrams.set(key, []);
            }
            anagrams.get(key).push(str);
        }

        return Array.from(anagrams.values());
    }
}

