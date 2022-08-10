// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
var isAnagram = function(s, t) {
    if(s.length != t.length) return false; //checking to ensure lengths are equal
    let sMap = {}; //creating empty maps
    let tMap = {};
    //looping through each string, checking if its in the map, and creating if it's not, adding to the value if it is
    for(let i = 0; i < s.length; i++) {
        if (sMap.hasOwnProperty(s[i])) {
            sMap[s[i]]++;
        }
        else {
            sMap[s[i]] = 1;
        }
        if (tMap.hasOwnProperty(t[i])) {
            tMap[t[i]]++;
        }
        else {
            tMap[t[i]] = 1;
        }
    } //checking to ensure the the map values are equal
    for (let key in sMap) {
        if(sMap[key] != tMap[key]) {
            return false;
        }
    }
    return true
};

