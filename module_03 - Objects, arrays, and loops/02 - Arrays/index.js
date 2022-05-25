var list = [
  'apple', // 0
  'milk', // 1
  'bread' // 2
]

list.push('bacon')

console.log(list)
console.log(list.length)

var lastItem = list.pop()
console.log(list)
console.log(lastItem)

var firstItem = list.shift()
console.log(list)
console.log(firstItem)

list.unshift('butter')
console.log(list)

console.log('slice', list.slice(1, 2))
console.log(list)
console.log('splice', list.splice(0, 1))
console.log(list)

console.log(list.indexOf('apple'))
console.log(list.indexOf('milk'))
console.log(list[0])

if (list.indexOf('milk') === -1)
  list.push('milk')
console.log(list)

var milk = list.find(function(item) {
  return item === 'bread'
})

console.log(milk)

list.forEach(function(listItem) {
  console.log(listItem)
})