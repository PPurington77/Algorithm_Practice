/**
 * Hash Map - Frequency Counter
 * Matrix - Bucket
 * Time O(N^2) | Space O(N^2)

var topKFrequent = (nums, k) => {
  const map = getFrequencyMap(nums); 
  const bucket = getBucket(nums, map);

  return getTopK(bucket, k); 
};

var getFrequencyMap = (nums, map = new Map()) => {
  for (const num of nums) {
    /* Time O(N) */
    const count = (map.get(num) || 0) + 1;

    map.set(num, count); /* Space O(N) */
  }

  return map;
};

const getBucket = (nums, map) => {
  const bucket = new Array(nums.length + 1).fill().map(() => []);

  for (const [num, count] of map.entries()) {
    /* Time O(N) */
    bucket[count].push(num); /* Space O(N * N) */
  }

  return bucket.reverse(); /* Time O(N) */
};

var getTopK = (bucket, k, topK = []) => {
  for (const count of bucket) {
    /* Time O(N) */
    for (const num of count) {
      /* Time O(N) */
      const isAtCapacity = topK.length === k;
      if (isAtCapacity) break;

      topK.push(num); /* Space O(K) */
    }
  }

  return topK;
};
