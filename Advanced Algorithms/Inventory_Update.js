function updateInventory(arr1, arr2){
    for(var i=0; i<arr2.length; i++){
        var inArr1 = false;
        for(var j=0; j<arr1.length; j++){
            if(arr2[i][1]===arr1[j][1]){
                arr1[j][0]+=arr2[i][0];
                inArr1 = true;
            }          
        }
        if(!inArr1) arr1.push(arr2[i]);

    }
    return arr1.sort((a, b) => a[1].localeCompare(b[1]));
}