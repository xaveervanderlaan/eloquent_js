const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const content = 'Hello!'

const writeTestFile = (fileName, directory) => {
  try {
    fs.writeFileSync(`${directory}${fileName}.txt`, content)
    console.log(`wrote file: ${fileName}`)
  } catch (err) {
    console.error(err)
  }
}

const generateFiles = () => {
  if (!fs.existsSync('./test')) {
    fs.mkdirSync('./test')
  }
  rl.question('How many files do you want? \n', (amount) => {
    if (amount === '0') {
      console.error('ERROR - 0 is not allowed')
    } else {
      for (let x = 0; x < amount; x++) {
        writeTestFile(x, './test/')
      }
    }
    rl.close()
  })
}

generateFiles()

rl.on('close', () => {
  console.log('\nDONE!')
})
