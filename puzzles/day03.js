/*
------------------------------
PART 1 - Rucksack Reorganization
------------------------------
*/

function splitSacks(str){
    const rucksacks = str.split(`\n`);
    const splitSacks = [];
    rucksacks.forEach(rucksack=>{
        const items = rucksack.split('');
        let comp1 = [];
        let comp2 = [];
        const halfway = rucksack.length/2;
        for(let i = 0; i < halfway; i++){
            comp1.push(rucksack[i]);
        }
        for(let j = halfway; j< rucksack.length; j++){
            comp2.push(rucksack[j]);
        }
        comp1 = comp1.join('');
        comp2 = comp2.join('');
        splitSacks.push([comp1, comp2]) ;
    });
    return splitSacks;
}

function calculatePriority(letter){
    const lowerCaseItems = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const upperCaseItems = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let priority = 0;
    for(let i = 0; i < lowerCaseItems.length; i++){
        if (lowerCaseItems[i] === letter){
            priority = i+1;
        }
    }
    for(let j = 0; j < upperCaseItems.length; j++){
        if (upperCaseItems[j] === letter){
            priority = j+27;
        }
    }
    return priority;
}

function rucksackDuplicatePrioritySums(str){
    const rucksacks = splitSacks(str);
    let prioritySums = 0;
    let items = [];
    rucksacks.forEach(sack=>{
        let repeats = [];
        const compartment1 = sack[0].split('');
        const compartment2 = sack[1].split('');
        for(let i = 0; i < compartment1.length; i++){
            for(let j = compartment2.length-1; j > 0; j--){
                if(compartment1[i]===compartment2[j]){
                    repeats.push(compartment1[i]);
                }    
            }
        }
        if(repeats[0]){
            items.push(repeats[0]); 
        }              
    });
    console.log(items)
    items.forEach(item=>{
        prioritySums += calculatePriority(item);
    })
    console.log(prioritySums)
    return prioritySums;
}

rucksackDuplicatePrioritySums(`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`);

//8163 + 8909 + 9621 + 10606 + 850 + 3320 + 4489