class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        intMap = {}
        for i, n in enumerate(nums):
            diff = target - n
            if diff in intMap:
                return [intMap[diff], i]
            intMap[n] = i