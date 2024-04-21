class Streams{
    fibonacciSequence(i){
        let fibonacciNumbers = [0, 1];
        for(let index = 2; index < i; index++){
            fibonacciNumbers[index] = fibonacciNumbers[index - 1] + fibonacciNumbers[index - 2];
        }
        return fibonacciNumbers;
    }

    medianOfList(...arr){
        let numbers = arr.slice().sort((a,b) => a -b);
        let size = numbers.length;
        if(size%2 === 0){
            let mid1 = numbers[size/2-1];
            let mid2 = numbers[size / 2];
            return (mid1 + mid2) / 2;
        }
        else{
            return numbers[Math.floor(size/2)];
        }
    }

    longestPrefixOf(...arr){
        let commonPrefix = "";
        let minLength = Math.min(...arr.map(str => str.length));
        for(let index = 0; index < minLength; index++){
            let char = arr[0][index];
            if(arr.every(str => str[index] === char)){
                commonPrefix += char;
            }
            else{
                break;
            }
        }
        return commonPrefix;
    }


    getMaxProductOfElement(arr){
        if(arr.length < 2){
            throw new Error("The array length must be > 2");
        }

        let maxProduct = Number.NEGATIVE_INFINITY;
        for(let index = 0; index < arr.length; index++){
            for(let index2 = index + 1; index2 < arr.length; index++){
                maxProduct = Math.max(maxProduct, arr[index] * arr[index2]);
            }
        }
        return maxProduct;
    }

    anagrams(...words){
        let groupedAnagrams = {};
        for(let word in words){
            let sortedWord = word.split("").sort().join("");
            if(!groupedAnagrams[sortedWord]){
                groupedAnagrams[sortedWord] = [];
            }
            groupedAnagrams[sortedWord].push(word);
        }
        return groupedAnagrams;
    }
}


let javaStreams = new Streams();
console.log(javaStreams.fibonacciSequence(10));
console.log(javaStreams.medianOfList(5, 15, 1, 3));
console.log(javaStreams.longestPrefixOf("flower", "flour", "flame"));
// console.log(javaStreams.getMaxProductOfElement([2, 3, 4, 5]));
console.log(javaStreams.anagrams("listen", "silent", "hello", "world", "night", "thing"));