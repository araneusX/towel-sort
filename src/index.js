module.exports = function towelSort (matrix) {
  return (matrix ? matrix : []).reduce((line, row, i) => i % 2 === 0 ? line.concat(row) : line.concat(row.reverse()), []);
}
