const fs = require('fs')

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
    generateFiles()
  } else {
    for (let x = 0; x < 22; x++) {
      writeTestFile(x, './test/')
    }
  }
}

generateFiles()
