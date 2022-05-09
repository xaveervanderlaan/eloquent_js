const fs = require('fs')

for (let x = 0; x < 22; x++) {
  console.log(x)
}

const content = 'Hello!'

fs.writeFile('./test.txt', content, err => {
  if (err) {
    console.error(err)
  }
})
