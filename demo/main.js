import bUtils from '../src/index'

console.log(bUtils)

const oDiv = document.createElement('div')

oDiv.style.height = '200px'
oDiv.style.width = '200px'
oDiv.style.position = 'absolute'
oDiv.style.top = '1000px'
oDiv.style.background = 'red'
document.body.appendChild(oDiv)
document.body.style.height = '2000px'
console.dir(oDiv)

document.onclick = () => {
  bUtils.scrollTo(oDiv)
}

const obj = {
  name: 'jack',
  age: 28,
  gender: 'male'
}

console.log(bUtils.cleanObj(obj, ['name']))

