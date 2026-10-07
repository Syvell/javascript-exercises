const removeFromArray = function(arr, ...num) {
    for(const removal of num) {
        for(let i = 0; i < arr.length; i++) {
            if(removal === arr[i]) {
                arr.splice(i, 1);
                i-=1;
            }
        }
    }
    

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
