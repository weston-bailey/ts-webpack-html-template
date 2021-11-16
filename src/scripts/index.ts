// modules can be used 
import hello from './module'
// css file just needs to be required in the main js
require('../styles/index.css')

console.log('hello from the index')
console.log(hello())

// regular DOM still works!
const myBody: HTMLElement = document.querySelector('body')
console.log(myBody)
