const button = document.querySelectorAll('.buttons')
const screen = document.querySelector('.screen')
const story = document.querySelector('.story')
const svg = document.querySelector('.svg')
let string = ''
let array =['1','2','3','4','5','6','7','8','9','0','-','+','/','*','.','Enter', 'NumpadEnter']
let stringExspression = []
let stringEqual = []


function clearScreen () {
    screen.value = ''
    string = ''
}
function delOneElem () { 
  string = string.slice(0,-1)
  return screen.value = string
}
function numProsent () {
    if (/\*|\-|\+|\//.test(string)) {
        string = Number(string.slice(0,-1)/100) 
        return screen.value = `${string}`
    } else {string = Number(string)/100
    return screen.value = `${string}`
    }
}
function equleNumbers () {
   stringExspression.push(string)
   string = eval(string)
   screen.value = `${string}`
   stringEqual.push(`${string}`)
   return stringEqual, stringExspression
}
function findBut () {
    button.forEach((val, index)=> {
        val.addEventListener('click', ()=> {
         tupOnElemStory()
            string = `${string}`
             if (index === 0) {
                return clearScreen()
             }
             if (index === 1) {
                return delOneElem()
             }
             if (index === 2) {
                return numProsent()
             }   
             if (string === '0') {
                return string = string+'.'
             }
             if (index === 18) {
               equleNumbers()
             }
             if (index === 18 ) {
               let divbox = document.createElement('div')
               let divExpresssion = document.createElement('div')
               let divEquel = document.createElement('div')
               divExpresssion.classList.add('listE')
               divEquel.classList.add('list')
               divbox.classList.add('box')
         
               for (let i = 0; i< stringEqual.length; i++) {
                  divExpresssion.textContent = stringExspression[i]
                  divEquel.textContent = stringEqual[i]
                  story.append(divbox)
                  divbox.append(divExpresssion)
                  divbox.append(divEquel)
         
               }
             }
             if (string.slice(-1) === '/' && index === 3 || string.length=== 0 && index === 3) {
                return 
             }
             if (string.slice(-1) === '*' && index === 7||string.length=== 0 && index === 7) {
                return 
             }
             if (string.slice(-1) === '.' && index === 17 || string.slice(-1) === '' && index === 17) {
                return 
             }
             if (string.slice(-1) === '-' && index === 11) {
                return 
             }
             if (string.slice(-1) === '+' && index === 15) {
                return 
             }
             if (string.slice(-1)=== '/'||string.slice(-1)=== '*'|| string.slice(-1)=== '-'||string.slice(-1)=== '+'||string.slice(-1)=== '.'){
                if (index === 3 && string.match(/\*|\-|\+/g)[string.length -1] !='/' && string != '') {
                    string = string.slice(0,-1)
                 } 
    
                 if (index === 7 && string.match(/\/|\-|\+|\./g)[string.length -1] !='*') {
                    string = string.slice(0,-1)
                 }
                 if (index === 11 && string.match(/\*|\/|\+|\./g)[string.length -1] !='-') {
                    string = string.slice(0,-1)
                 }
                 if (index === 15 && string.match(/\*|\-|\/|\./g)[string.length -1] !='+') {
                    string =string = string.slice(0,-1)
                 }
                 if (index === 17 && string.match(/\*|\-|\/|\+/g)[string.length -1] !='.') {
                    string =string = string.slice(0,-1)
                 }
             } 
             string = string +  val.textContent
             screen.value = string
        })
    })

}
function keyWrite () {
   document.addEventListener('keydown', (e)=> {
      string = `${string}`
      tupOnElemStory()
      if (e.key === 'Backspace') {
         return delOneElem()
      }
      if (e.key === '%') {
         return numProsent()
      }   
      if (string === '0') {
         return string = string+'.'
      }
      if (e.key === 'Enter' || e.key === 'NumpadEnter') {
         return equleNumbers()
      }
      if (string.slice(-1) === '/' && e.key === '/' || string.length=== 0 && e.key === '/') {
         return 
      }
      if (string.slice(-1) === '*' && e.key === '*'||string.length=== 0 && e.key === "*") {
         return 
      }
      if (string.slice(-1) === '.' && e.key === '.' || string.slice(-1) === '' && e.key === '.') {
         return 
      }
      if (string.slice(-1) === '-' && e.key === '-') {
         return 
      }
      if (string.slice(-1) === '+' && e.key === '+') {
         return 
      }
      if (string.slice(-1)=== '/'||string.slice(-1)=== '*'|| string.slice(-1)=== '-'||string.slice(-1)=== '+'||string.slice(-1)=== '.'){
         if (e.key === '/' && string.match(/\*|\-|\+/g)[string.length -1] !='/' && string != '') {
             string = string.slice(0,-1)
          } 

          if (e.key === '*' && string.match(/\/|\-|\+|\./g)[string.length -1] !='*') {
             string = string.slice(0,-1)
          }
          if (e.key === '-' && string.match(/\*|\/|\+|\./g)[string.length -1] !='-') {
             string = string.slice(0,-1)
          }
          if (e.key === '+' && string.match(/\*|\-|\/|\./g)[string.length -1] !='+') {
             string =string = string.slice(0,-1)
          }
          if (e.key === '.' && string.match(/\*|\-|\/|\.|\+/g)[string.length -1] !='.') {
             string =string = string.slice(0,-1)
          }
      } 
      for (let key of array) {
         if (e.key === key) {
            string = string +  e.key
            screen.value = string
         }
       }
      
   })
}
keyWrite()
findBut()
function addListOfStory () {
   document.addEventListener('keydown', (e)=> {
      if (e.key === 'Enter' || e.key === 'NumpadEnter') {
         let divbox = document.createElement('div')
         let divExpresssion = document.createElement('div')
         let divEquel = document.createElement('div')
         divExpresssion.classList.add('listE')
         divEquel.classList.add('list')
         divbox.classList.add('box')

         for (let i = 0; i< stringEqual.length; i++) {
            divExpresssion.textContent = stringExspression[i]
            divEquel.textContent = stringEqual[i]
            story.append(divbox)
            divbox.append(divExpresssion)
            divbox.append(divEquel)

         }
      }
   })
}
addListOfStory()
function tupOnElemStory () {
   const storyLine = document.querySelectorAll('.list')
   storyLine.forEach((value, index) => {
      value.addEventListener('click', ()=> {
         screen.value = stringEqual[index]
         string = stringEqual[index]
      })
   })
}
function delStory () {
   svg.addEventListener('click', () => {
      const del = document.querySelectorAll('.box')
      stringEqual = []
      stringExspression = []
      del.forEach((value) => {
         story.removeChild(value)
      })
   })
}
delStory()