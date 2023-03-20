const button = document.querySelectorAll('.buttons')
const screen = document.querySelector('.screen')
let string = ''
function clearScreen () {
    screen.value = ''
    string = ''
}
function delOneElem () { 
  return string = string.slice(0,-1)
}
function numProsent () {
    string = Number(string)/100
}
function equleNumbers () {
    for (let num of string) {
        if (num!= '+' || num!='-'||num!='*'||num!='/') {

        }
    }
}
function repet () {
    screen.value = string
    setTimeout(repet, 100)
}
repet()
function findBut () {
    button.forEach((val, index)=> {
        val.addEventListener('click', ()=> {
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
             if (string.slice(-1) === '/' && index === 3 || string.slice(-1) === '' && index === 3) {
                return
             }
             if (string.slice(-1) === '*' && index === 7|| string.slice(-1) === '' && index === 7) {
                return
             }
             if (string.slice(-1) === '-' && index === 11) {
                return
             }
             if (string.slice(-1) === '+' && index === 15) {
                return
             }
             if (string.slice(-1)=== '/'||string.slice(-1)=== '*'|| string.slice(-1)=== '-'||string.slice(-1)=== '+'){
                if (index === 3 && string.match(/\*|\-|\+/g)[string.length -1] !='/' && string != '') {
                    string = string.slice(0,-1)
                 } 
    
                 if (index === 7 && string.match(/\/|\-|\+/g)[string.length -1] !='*') {
                    string = string.slice(0,-1)
                 }
                 if (index === 11 && string.match(/\*|\/|\+/g)[string.length -1] !='-') {
                    string = string.slice(0,-1)
                 }
                 if (index === 15 && string.match(/\*|\-|\//g)[string.length -1] !='+') {
                    string =string = string.slice(0,-1)
                 }
             } 
             string = string +  val.textContent
        })
    })

}
findBut()