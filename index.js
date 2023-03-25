function saturdayFun(str = 'roller-skate'){
    return `This Saturday, I want to ${str}!`
}

function mondayWork(str = 'go to the office'){
    return `This Monday, I will ${str}.`
}

function wrapAdjective(pStr = '*'){

    function one(str = 'special'){
        return `You are ${pStr}${str}${pStr}!`
    }

    return one;
}