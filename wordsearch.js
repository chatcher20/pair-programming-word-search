const transpose = function(matrix) {
    let array = [];

    for (let i = 0; i < matrix[0].length; i++) {
      array.push([]);
    }
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        array[col][row] = matrix[row][col];
      }
    }
       
    return array;
};


const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const newLetters = transpose(letters)
    const verticalJoin = newLetters.map(ls => ls.join(''))
    let res = ''
    let hRes = ''
    if (horizontalJoin.includes(word)) return true
    for(let h of horizontalJoin){
        hRes += h;
    }
    if(hRes.includes(word)) return true
    if(verticalJoin.includes(word)) return true
    for (let v of verticalJoin)
    {
        res += v;
    }
    if(res.includes(word)) return true

    return false
}

module.exports = wordSearch
