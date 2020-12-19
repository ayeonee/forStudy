//클로저
function f() {
    var a = [];
    var i;
	
    for(i = 0; i < 3; i++){
      a[i] = function() {
        return i;
        }
    }
	return a;
  }
  var b = f();
  console.log( b[0]() ); 
  console.log( b[1]() ); 
  console.log( b[2]() ); 

//0 1 2가 제대로 출력되게 하려면
function ff() {
    var a = [];
    var i;
	
    for(i = 0; i < 3; i++){
      a[i] = (function(x) {
        return function(){
			return x;
		}
        })(i);
    } //파라미터를 받는 함수
	return a;
  }
  var b = ff();
  console.log( b[0]() ); 
  console.log( b[1]() ); 
  console.log( b[2]() ); 
