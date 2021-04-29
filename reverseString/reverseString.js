const reverseString = function(words) {
    let reversedWords = "";
    for(let i = 0; i < words.length; i++){
        reversedWords += words.charAt((words.length - 1) - i) ;
    }
    return reversedWords;
}

module.exports = reverseString
