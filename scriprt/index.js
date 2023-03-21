const button = document.querySelectorAll('.buttons')
const screen = document.querySelector('.screen')
let string = ''
let array =['1','2','3','4','5','6','7','8','9','0','-','+','/','*','.','Enter', 'NumpadEnter']
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
    string = eval(string)
    return screen.value = `${string}`
}
function findBut () {
    button.forEach((val, index)=> {
        val.addEventListener('click', ()=> {
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
                return equleNumbers()
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