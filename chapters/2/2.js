function pyramid (char, size) {
  let pattern = ''
  for (let y = 0; y < size; y++) {
    pattern += char
  }
  return pattern
}

module.exports = pyramid
