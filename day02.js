/*
------------------------------
PART 1 - Rock Paper Scissors
------------------------------
*/
function strategyGuide(str){
    const drawPts = 3;
    const winPts = 6;
    const rockPts = 1;
    const paperPts = 2;
    const scissorsPts = 3;
    
    const rock = 'x';
    const paper = 'y';

    let totalScore = 0;

    str = str.toLowerCase();
    const sets = str.split(`\n`);
    const rounds = sets.map(set=> set.split(' '));

    rounds.forEach(round=>{
        let result = rockPaperScissors(round);
        if(result === 'draw'){
            totalScore += drawPts;
        }else if(result === 'win'){
            totalScore += winPts;
        }else{
            totalScore += 0;
        }

        if(round[1]=== rock){
            totalScore += rockPts;
        }else if(round[1] === paper){
            totalScore += paperPts;
        }else{
            totalScore += scissorsPts;
        }

    })
    console.log(totalScore);
    return totalScore;
    
}

function rockPaperScissors([a, b]){
    let draw = false;
    let loss = false;
    let win = false;
    const y = b.toLowerCase();
    const x = a.toLowerCase();

    ((y === 'x' && x === 'c') || (y === 'y' && x === 'a') || (y === 'z' && x === 'b')) ? win = true : ((y === 'x' && x === 'b') || (y === 'y' && x === 'c') || (y === 'z' && x === 'a')) ? loss = true : draw = true;

    if(draw){
        return 'draw';
    }else if(win){
        return 'win';
    }else{
        return 'lose';
    }
}


/*
------------------------------
PART 2 - Rock Paper Scissors
------------------------------
*/
function correctStrategy(str){
    const drawPts = 3;
    const winPts = 6;
    const rockPts = 1;
    const paperPts = 2;
    const scissorsPts = 3;

    const rock = 'a';
    const paper = 'b';
    const scissors = 'c';
    
    const lose = 'x';
    const draw = 'y';
    const win = 'z';

    let totalScore = 0;

    str = str.toLowerCase();
    const sets = str.split(`\n`);
    const rounds = sets.map(set=> set.split(' '));

    rounds.forEach(round=>{
        if(round[1] === lose){
            if(round[0] === rock){
                totalScore += scissorsPts;
            }else if(round[0] === paper){
                totalScore += rockPts;
            }else{
                totalScore += paperPts;
            }
            totalScore += 0;
        }else if(round[1] === win){
            if(round[0] === rock){
                totalScore += paperPts;
            }else if(round[0] === paper){
                totalScore += scissorsPts;
            }else{
                totalScore += rockPts;
            }
            totalScore += winPts;
        }else{
            if(round[0] === rock){
                totalScore += rockPts;
            }else if(round[0] === paper){
                totalScore += paperPts;
            }else{
                totalScore += scissorsPts;
            }
            totalScore += drawPts;
        }
    })
    console.log(totalScore);
    return totalScore;  
}

correctStrategy(`A Y
B X
C Z`)