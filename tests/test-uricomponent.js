

var maple = require('../treeRouter.js')
   , tree = new maple.RouteTree()
   , assert = require('assert')

tree.define('/hello/:world/', function () {
})

tree.define('/colon/:test/definite/', function () {
})

var match = tree.match('/hello/dude')
assert.equal(match.params.world, 'dude')

match = tree.match('/hello/hello%20world/')
assert.equal(match.params.world, 'hello world')
console.log(match.params.world)

match = tree.match('/colon/hello%20world/definite/') //test decodeURIComponent
assert(match.perfect)
assert.equal(match.params.test, 'hello world')

match = tree.match('/hello/notable%5Gtodecode')
assert.equal(match.params.world, 'notable%5Gtodecode') //when not a valid URI, it will just attach string verbatum
