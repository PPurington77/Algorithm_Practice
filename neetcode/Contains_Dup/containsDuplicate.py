# //given an interger array nums, return true if any value appears at least twice in the array, and return false if there are no duplicates

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hashset = set()

        for num in nums:
            if num in hashset:
                return True
            hashset.add(num)
        return False

