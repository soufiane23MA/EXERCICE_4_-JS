
/**
 * rappeler les élement du DOM
 */
const facebookEL = document.querySelector('.grid1')
const twiterEl = document.querySelector('.grid2');
const instaEl = document.querySelector('.grid3');
const textEl = document.querySelectorAll('.text');
const gridEl = document.querySelectorAll('.box');
const gridStyle = document.querySelector('.grid-el');


console.log(gridEl);
console.log(textEl);

/**
 * faire une boucle pour la classe grid , pour 
 * ciblés les 3 boites et mettre le style de la 
 * classe active( changer les styles  ),
 * dans la ligne 24 j'ai cree une nouvelle variable 
 * pour sibler le texte de chaque grid(boite).
 */
gridEl.forEach(grid => {

	grid.addEventListener('click', () => {
		const gridColor = getComputedStyle(grid).backgroundColor;
		gridStyle.style.backgroundColor = gridColor;

		if (gridStyle.style.backgroundColor === gridColor) {
			gridStyle.style.backgroundColor = ' ';
		} else { gridStyle.style.backgroundColor = gridColor; }
		grid.classList.toggle('active');

		const text = grid.querySelector('.text')
		if (text.style.visibility === "visible") {
			text.style.visibility = "hidden";

		} else { text.style.visibility = "visible"; }
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
