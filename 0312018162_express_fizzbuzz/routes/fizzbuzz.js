var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:userId', function(req, res, next) { 
  
 let x = 0;
 let arr = [];

  while (x < req.params.userId) {
    x += 1;
    if (x % 15 === 0) {
      arr.push('FizzBuzz');
    } else if (x % 3 === 0) {
      arr.push('Fizz');
    } else if (x % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(x);
    }
  }
 
    let fizzbuzz = arr.join(', ');
    res.send(fizzbuzz);
  
});


module.exports = router;