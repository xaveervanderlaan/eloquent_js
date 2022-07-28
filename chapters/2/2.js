function pyramid (char, size) {
  let pattern = ''
  for (let y = 0; y < size; y++) {
    pattern += char
  }
  return pattern
}

const pyramidAlt = (char, size) => {
  let pattern = ''
  for (let x = 0; x < size; x++) {
    pattern += char
    console.log(pattern)
  }
}

const fizzBuzz = () => {
  for (let x = 0; x < 100; x++) {
    console.log(
      (x % 3 === 0 && x % 5 === 0)
        ? 'FizzBuzz'
        : (x % 3 === 0)
            ? 'Fizz'
            : (x % 5 === 0)
                ? 'Buzz'
                : x
    )
  }
}

const chessboard = (size) => {
  console.log('Xaveer\'s solution!\n')

  for (let x = 0; x < size; x++) {
    let row = (x % 2 === 0) ? ' ' : ''

    for (let y = 0; y < size; y++) {
      row += (y % 2 === 0) ? '#' : ' '
    }

    console.log(row)
  }
}

const chessboardAlt = (size) => {
  console.log('Book\'s solution with improvements!\n')

  let board = ''

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      board += ((x + y) % 2 === 0) ? '#' : ' '
    }

    board += '\n'
  }

  console.log(board)
}

// Chapter 2 - exercise 1 - Pyramid
pyramidAlt('#', 10)

console.log('\n=====================================================\n')

// Chapter 2 - exercise 2 - FizzBuzz
fizzBuzz()

console.log('\n=====================================================\n')

// Chapter 2 - exercise 3 - Chessboard
// My solution - less variables needed
chessboard(8)

console.log('\n=====================================================\n')

// Book's solution with tenary operator instead of if
chessboardAlt(8)

// Module for Jest
module.exports = pyramid
