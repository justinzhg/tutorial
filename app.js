/*
const amount = 8

if(amount < 10){
	console.log('small number');
}
else{
	console.log('large number');
}

//console.log('first app');
console.log(__dirname)
//console.log(process)
setInterval(() => {
	console.log('hello world')
}, 1000)
*/

/*
names = require('./names.js')
sayHi = require('./utils.js').sayHi
require('./mind-grenade.js')
*/

//console.log(names)
//sayHi(names.john)

/*
const os = require('os')
const user = os.userInfo()

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
}

console.log(user)
console.log(`The System Uptime is ${os.uptime()} seconds`)
console.log(currentOS)
*/

/*
const path = require('path')
console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
*/

/*
const { readFileSync, writeFileSync } = require('fs')
const first = readFileSync('./test1.txt', 'utf8')
const second = readFileSync('./test2.txt', 'utf8')
console.log(first, second)

writeFileSync('./result-sync.txt', 
	`Here is the result: ${first}, ${second}`,
	{flag: 'a'})
*/

/*
const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./test1.txt', 'utf8', (err, result) => {
	if(err) {
		console.log(err)
		return
	}
	console.log(result)
	const first = result;
	readFile('./test2.txt', 'utf8', (err, result) => {
		if(err) {
			console.log(err)
			return
		}
		
		const second = result;
		console.log(result)
		writeFile('./result-async.txt',
		`Here is the result: ${first}, ${second}`,
		(err, result) => {
			if(err) {
				console.log(err)
				return
			}
			console.log(result)
		})
	})
})

console.log('done')
*/

/*
const http = require('http')

const server = http.createServer((req, res) => {
	if (req.url === '/'){
		res.end('Welcome to our home page')
	}
	else if (req.url === '/about'){
		res.end('History about us')
	}
	else{
		res.end(`
		<h1>404</h1>
		<p>We can't find the page you are looking for</p>
		<a href="/">back home</a>`)
	}
})

server.listen(5000)
*/

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)