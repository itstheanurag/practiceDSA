// leetcode- 36. Valid Sudoku


var isValidSudoku = function(board) {
    let rows= [], cols = [], boxes = []
    for(let i=0; i<board.length; i++){
        rows.push(new Set())
        cols.push(new Set())
        boxes.push(new Set())
    }
    
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length; j++){
            let cell = board[i][j]
            if(cell == '.') continue;
            let boxNums = 3*Math.floor(i/3)+ Math.floor(j/3)
            if(rows[i].has(cell)|| cols[j].has(cell)|| boxes[boxNums].has(cell)) return false
            rows[i].add(cell)
            cols[j].add(cell)
            boxes[boxNums].add(cell)
        }
    }
    return true
};