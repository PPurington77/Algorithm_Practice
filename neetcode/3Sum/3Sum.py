# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
# Output must not have duplicates

class solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        #sorts nums into ascending order
        nums.sort()

        for i, a in enumerate(nums):
            # avoids duplicates
            if i > 0 and a == nums[i - 1]:
                continue

            l, r = i + 1, len(nums) - 1
            # Uses 2 pointer method. iterates based whether threesum is greater or les than 0
            while l < r:
                threeSum = a + nums[l] + nums[r]
                if threeSum > 0:
                    r -= 1
                elif threeSum < 0:
                    l += 1
                else:
                    # if threeSum = 0 then pushing number combos into results
                    res.append([a, nums[l], nums[r]])
                    # moving the left pointer
                    l += 1
                    # if the left pointer equals the previous left pointer and is less than the right pointer iterate it again
                    while nums[l] == nums[l - 1] and l < r:
                        l += 1

        return res
