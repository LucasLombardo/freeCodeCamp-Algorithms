function permAlone(str){
    if(str.length===1) return 1;
    str = str.split("");
    var perms = heapsAlgorithm(str);
    return removeRepeats(perms).length;
}

function removeRepeats(arr){
    var result = [];
    arr.forEach(function(str){
        var keep = true;
        for(var i=1; i<str.length; i++){
            if(str[i]===str[i-1]){
                keep = false;
            }
        }
        if(keep) result.push(str);
    });
    return result;
}

function heapsAlgorithm(array){
    // Create test array and load into 'results' as first entry
    var results = [];
    results.push(array.join('').toString());
    // Utility to switch two array members at positions x & y
    Array.prototype.swap = function (x, y){
        var t = this[x];
        this[x] = this[y];
        this[y] = t;
        return this;
    };
    // Find permutations recursively via Heap's Algorithm
    function permutations(len, ary){
        var i = 0, l = len - 1;
        if (len === 1) return;
        else {
            for (i; i < l; i++) {
                permutations(l, ary);
                l % 2 ? ary.swap(i, l) : ary.swap(0, l); // even-odd check for alternating swaps
                results.push(ary.join('').toString());
            }
            permutations(l, ary);
        }
        return results.sort();
    }
    return permutations(array.length, array);
}