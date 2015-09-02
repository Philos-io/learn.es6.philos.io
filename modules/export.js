// Exporting a function
export function Arva(){
	var app = new Application();

	manageApp(app);
}

function manageApp(application){
	console.log(application);
}

// Exporting a class
export class Application{
	run(){
		console.log('the app is running');
	}
}












// export let company = 'Bizboard';

// export const engineers = ['Hans', 'Tom'];


// // This function isn't exported
// function helper(){

// }

// export {detectCats, Kittydar};

// // no `export` keyword required here
// function detectCats(canvas, options) { ... }
// class Kittydar { ... }


// // Default export 
// export default function ()