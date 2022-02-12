function findMatching(array, name){
    const match = array.filter(function (element){
        return element.toLowerCase() === name.toLowerCase();
    })
    return match
};

function fuzzyMatch(array, letters){
    const match = array.filter((element) => element.startsWith(letters))
    return match
};

function matchName(array, string){
    const driver = array.filter(element => element.name === string)
    return driver
};