// find the most repeating element in the array
function finMajor(arr){
    const map = new Map();
    let maxFreq = 0;
    let major = 0;
    for(let el of arr){
        
        if(map.get(el)){
            console.log(el);
            map.set(el,map.get(el)+1)
            if(maxFreq<map.get(el)){
                maxFreq = map.get(el);
                major = el
            }
        }else{
            map.set(el,1)
            console.log("👍",map);
        }
    }
    return major
    }
    console.log(finMajor([1,2,2,2,6,5,5,5,5]))