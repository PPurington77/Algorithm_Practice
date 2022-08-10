# Given two strings s and t, return true if t is an anagram of s, and false otherwise.
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        #creating hash maps
        countS, countT = {}, {}
        #iterating through the strings and pushing them into hash maps
        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0) 
            #the .get looks into the map to see if the key/value pair exist, if it doesn't it creates it with a default value of 0
            countT[t[i]] = 1 + countT.get(t[i], 0)
        
        for c in countS:
            if countS[c] != countT.get(c, 0):
                return False

        return True

#another answer below
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t) #cheat to do the above, automatically hashmaps and compares

#better answer
#could sort the strings and compare
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)

#not technically as efficient as above