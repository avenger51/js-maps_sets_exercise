new Set([1,1,2,2,3,4])
//Set(4) {1, 2, 3, 4}


[...new Set("referee")].join("")
//'ref'
//... spread to array but splits the letter like 'r', 'e', 'f'.
//set removes duplicates..
//the .join adds each letter back into a string...
//that's completely intuitive..../s

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//Map(2) {Array(3) => true, Array(3) => false}
//[[Entries]]
//0
//: 
//{Array(3) => true}
//key
//: 
//(3) [1, 2, 3]
//value
//: 
//true
//1
//: 
//{Array(3) => false}
//key
//: 
//(3) [1, 2, 3]
//value

//=============================================================================================

//## **hasDuplicate**
//
//Write a function called hasDuplicate which accepts an array and returns true or false 
//if that array contains a duplicate
//hasDuplicate([1,3,2,1]) // true
//hasDuplicate([1,5,-1,4]) // false

//function hasDuplicate(array)
const hasDuplicate = arr => new Set(arr).size !== arr.length
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! I HAD NO IDEA YOU COULD EVEN DO ARR => IN THIS WAY
//same as: 
//function hasDuplicate(arr) {
// ` return new Set(arr).size !== arr.length;
//}
//const duplicates = new Set(array); //this will just pull out duplicates......
//THIS IS WHAT I WAS DOING
if (newArray.length != array.length) {
    return true;
}
if duplicates[value] ? true : false;


//=============================================================================================

//## **vowelCount**
//
//Write a function called vowelCount which accepts a string and returns a map where the keys 
//are numbers and the values are the count of the vowels in the string.
//vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
//vowelCount('Colt') // Map { 'o' => 1 }
//NOT EVEN CLOSE TO THE SOLUTION BUT HERE IS WHAT I WAS DOING
1.  input a String
2.  return a Map
3.  map should be where the keys are the values of the vowel 

function vowelCount(string) {

    const vowels =['a', 'e', 'i', 'o', 'u']
   // maybe no? Set can't have filter or foreach? const mapVowelCount = new Set(string);
    const mapVowelCount = Array.from(string);
   
   return mapVowelCount.filter((letter) {
        if letter is in vowels
        do key add(letter + '=>' )
    }

        if letter is in vowels
        map add (value + '=>' some count here)
    }


    mapVowelCount.((value) => if in vowels ? true : false
     map add (value + '=>' some count here)
    have to loop and count the vowels
        
        
    }




    if mapVowelCount.has(vowels) 
}