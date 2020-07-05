function fibonacci(n) {
	  var num1 = 1;
	  var num2 = 1;
	  for(var i=3;i<=n;i++){
		var num3 = num1 + num2;
		num1 = num2;
		num2 = num3;
	  }
	  if(n == 1 || n==2){
		  return 1;
	  }
	  return num3;
	}
	//console.log(fibonacci(10));
	module.exports = fibonacci;