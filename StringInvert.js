function stringInvert(str){
     let a = ''
     // inversão da string por loop for
    for(i = str.length - 1; i >= 0; i--){
         a += str[i]
    }
    return a
}
console.log(stringInvert('Pizza Calabreza'))