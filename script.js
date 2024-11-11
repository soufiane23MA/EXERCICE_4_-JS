
/**
 * rappeler les élement du DOM
 */
//const facebookEL = document.querySelector('.grid1')
//const twiterEl = document.querySelector('.grid2');
//const instaEl = document.querySelector('.grid3');
const textEl = document.querySelectorAll('.text');
const gridEl = document.querySelectorAll('.box');
const parentDiv = document.querySelector('.grid-el');
const bodyEl = document.querySelector('.body');
const originalColor = getComputedStyle(parentDiv).backgroundColor;
const originalBodyColor = getComputedStyle(bodyEl).backgroundColor;



console.log(gridEl);
console.log(textEl);

/**
 * faire une boucle pour la classe grid , pour 
 * ciblés les 3 boites et mettre le style de la 
 * classe active( changer les styles  ),
 * dans la ligne 24 j'ai cree une nouvelle variable 
 * pour cibler le texte de chaque grid(boite).
 */
gridEl.forEach(grid => {

	grid.addEventListener('click', () => {
		const bodyColor = getComputedStyle(grid).backgroundColor;
		const gridColor = getComputedStyle(grid).backgroundColor;

		if (bodyEl.style.backgroundColor === gridColor) {
			bodyEl.style.backgroundColor = originalBodyColor;
			 
		} else {
			bodyEl.style.backgroundColor = gridColor;
			 
			 
			 
		 }
		 

		/*if (parentDiv.style.backgroundColor === gridColor) {
			parentDiv.style.backgroundColor = originalColor;
		} else { parentDiv.style.backgroundColor = gridColor; }*/
		
		grid.classList.toggle('active');
		const text = grid.querySelector('.text')

		if (text.style.visibility === "visible") {
			text.style.visibility = "hidden";

		} else { text.style.visibility = "visible"; }
		const icon = grid.querySelector('.icon i');
		if (icon) {
			icon.classList.toggle('bouge');
		}else{ icon.classList.toggle('icon i') }
	});

});



/**
 * j'ai laisser ce code on commentaire , puisque c'est le 
 * ici j'ai commencer pour faire fonctionner chaque grid
 *  à part,
 */


/*twiterEl.addEventListener('click', () => {
	
	twiterEl.classList.toggle('active');
	if (textEl.style.visibility === "visible") {
		textEl.style.visibility = "hidden";
	} else { textEl.style.visibility ="visible"; }
	
});

instaEl.addEventListener('click', () => {
	
	instaEl.classList.toggle('active');
	forEach(text => {
		if (textEl.style.visibility === "visible") {
			textEl.style.visibility = "hidden";
		} else { textEl.style.visibility = "visible"; }
		
	});
	
});

facebookEL.addEventListener('click', () => {
	facebookEL.classList.toggle('active');
	if (textEl.style.visibility === "visible") {
		textEl.style.visibility = "hidden";
	} else { textEl.style.visibility = "visible"; }

});*/
/*const iconEl = document.querySelector('.icon i');
iconEl.addEventListener('click', () => {
	iconEl.classList.toggle('bouge');
	console.log(iconEl);
})*/
/*const iconEl = document.querySelectorAll('.icon i');
iconEl.forEach(icon => {
	icon.addEventListener('click',() => {
	icon.classList.toggle('bouge');
})
});*/
