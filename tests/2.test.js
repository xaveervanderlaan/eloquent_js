const pyramid = require('../chapters/2/2')

let pattern = ''

for (let x = 0; x < 10; x++) {
  test('returned pattern to match with intended pattern', () => {
    expect(pyramid('#', x)).toBe(pattern)
    pattern += '#'
  })
}
