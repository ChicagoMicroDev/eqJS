let board = "";
let size = 8;
for(x = 0; x < size; x++){
    for (y = 0; y < size; y++){
        if((x + y ) % 2 === 0)
            board += " ";
        else board += "#";
    }
    board += '\n'
}
console.log(board);