import bUtils from '../src/index'
// const bUtils = require('../dist/babyeye-utils').default

console.log(bUtils)

// const oDiv = document.createElement('div')

// oDiv.style.height = '200px'
// oDiv.style.width = '200px'
// oDiv.style.position = 'absolute'
// oDiv.style.top = '1000px'
// oDiv.style.background = 'red'
// document.body.appendChild(oDiv)
// document.body.style.height = '2000px'
// console.dir(oDiv)

// document.onclick = () => {
//   bUtils.scrollTo(oDiv, 8)
// }

// const obj = {
//   name: 'jack',
//   age: 18,
//   gender: 'male'
// }

// console.log(bUtils.cleanObj(obj, ['name']))

// const arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(bUtils.chunkArray(arr, 9))

// const obj = {
//   a: 1,
//   b: function() {
//     return this.a + 1
//   },
//   c: { x: 2 },
//   d: null
// }

// const arr = [1, { b: 2 }]

// const cloneObj = bUtils.deepClone(obj)
// const cloneArr = bUtils.deepClone(arr)

// console.log(cloneObj)
// console.log(cloneArr)

// const arr = [1, 2, 3, 3, 2, 4]
// const uniqueArr = bUtils.unique(arr)
// console.log(uniqueArr)
// console.log(arr)

// const arr = bUtils.range(-1, -10)
// console.log(arr)

// let count = 0
// const oBox = document.getElementById('box')
// const oBtn = document.getElementById('btn')
// function foo(e) {
//   console.log(e)
//   console.log(this)
//   oBox.innerHTML = count++
//   return 111
// }

// const debounceAction = bUtils.debounce(foo, 1000, true)
// oBox.onmousemove = debounceAction

// oBtn.onclick = () => {
//   debounceAction.cancel()
// }
// bUtils.debounce(foo, 1000, true)().then(res => console.log(res))

// const throttleAction = bUtils.throttle(foo, 3000)
// oBox.onmousemove = throttleAction

// oBtn.onclick = () => {
//   throttleAction.cancel()
// }

// throttleAction().then(res => console.log(res))
// const url = 'http://url.com/page?name=Adam&surname=Smith'

// console.log(bUtils.getUrlParams(url))

function delay(time, cb) {
  setTimeout(cb, time)
}

const newDelay = bUtils.promisity(delay)

newDelay(3000).then(() => console.log('3s后执行'))
