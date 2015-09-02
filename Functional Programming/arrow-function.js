var add = function(x, y){
	return x + y;
} 

let add = (x, y) => x + y;

let add = (x, y) => {
	return x + y;
};


var square = function(x){
	return x * x;
};

let square = x => x * x;


var total = function(){
	return square(2) * add(3, 4);
};

let total = () => square(2) + add(3, 4);
