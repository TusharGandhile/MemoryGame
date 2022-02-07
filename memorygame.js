let card = document.querySelectorAll('.cell');
let front = document.querySelectorAll('.front');
const cont=document.querySelector('.container');
const score =document.querySelector('.score span');

shuffle();
clicking();
function shuffle(){

	card.forEach(c => {
		const num=[...Array(card.length).keys()];
		const random = Math.floor(Math.random()*card.length);

		c.style.order=num[random];
	})
}

function clicking(){

	for(let i=0; i < card.length; i++){

		front[i].classList.add('show');

		setInterval(()=>{
			front[i].classList.remove('show');
		},2000)

		card[i].addEventListener("click",()=>{
			front[i].classList.add('flip');
			console.log("clicked")
			const flippedcard=document.querySelectorAll('.flip');

			if(flippedcard.length ==2){

			cont.style.pointerEvents='none';

			setInterval(()=>{

				cont.style.pointerEvents='all';
			},1000);		

				match(flippedcard[0],flippedcard[1]);
			}
		})
	}
}

let count=0;
function match(cardone,cardtwo){

if(cardone.dataset.index == cardtwo.dataset.index){
	count++;

	score.innerHTML = parseInt(score.innerHTML)+1;
	cardone.classList.remove('flip');
	cardtwo.classList.remove('flip');

	cardone.classList.add('match');
	cardtwo.classList.add('match');
	
}
if(count==card.length/2){
		alert("you won!!")
	}else{
	setTimeout(()=>{
	cardone.classList.remove('flip')
	cardtwo.classList.remove('flip'),1000})
}
}
