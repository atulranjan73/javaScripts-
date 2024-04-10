function printPattern(numRows) {
    let currentRow = 1;
    let start = 1;
    let end = currentRow;
    let pattern = '';
  
    while (currentRow <= numRows) {
      let row = '';
      for (let i = start; i <= end; i++) {
        row += i + ' ';
      }
      pattern += row + '\n';
  
      if (currentRow % 2 === 1) {
        start = 1;
        end += currentRow;
      } else {
        start += currentRow;
        end = start;
      }
      currentRow++;
    }
    console.log(pattern);
  }
  
  printPattern(5);