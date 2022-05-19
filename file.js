const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const content = 'Hello!'

const createFile = (fileName, directory) => {
  try {
    fs.writeFileSync(`${directory}${fileName}.txt`, content)
    console.log(`wrote file: ${fileName}`)
  } catch (err) {
    console.error(err)
  }
}

const createFolder = (folderName) => {
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName)
      console.log(`created folder: ${folderName}`)
    }
  } catch (err) {
    console.error(err)
  }
}

const convertYnAnswer = (ynAnswer) => {
  const answers = {
    yes: ['yes', 'y'],
    no: ['no', 'n']
  }

  if (answers.yes.includes(ynAnswer)) {
    return true
  }

  if (answers.no.includes(ynAnswer)) {
    return false
  }
}

// Ask a bunch of questions to generate folders and files alike!
const generateFiles = () => {
  rl.question('Folder name?\n', (folderName) => {
    fs.mkdirSync(`./${folderName}`)
    rl.question('How many files do you want? \n', (amount) => {
      rl.question('Do you want a folder for every file?\n', (ynAnswer) => {
        let x

        const niceYnAnswer = convertYnAnswer(ynAnswer)

        const folderPath = `./${folderName}/`

        if (amount === '0') {
          console.error('ERROR - 0 is not allowed')
        } else {
          for (x = 0; x < amount; x++) {
            if (niceYnAnswer) {
              const nestedPath = `${folderPath}${x}/`

              createFolder(nestedPath)
              createFile(x, nestedPath)
            } else {
              createFile(x, folderPath)
            }
          }
        }
        rl.close()
      })
    })
  })
}

generateFiles()

rl.on('close', () => {
  console.log('\nDONE!')
})
