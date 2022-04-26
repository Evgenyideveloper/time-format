
/* Вывести текущий день и время на страницу в таком формате
Добрый день (утро, вечер, ночь в зависимости от времени суток)
Сегодня: Понедельник
Текущее время: 12:05:15 PM
До нового года осталось 175 дней
 */

const timerHours = document.getElementById('timer-hours');
const timerMinutes = document.getElementById('timer-minutes');
const timerSeconds = document.getElementById('timer-seconds'); 
const timerNewYear = document.getElementById('timer-new-year'); 

const currentDay = () =>{

	const goodAfternoon = () =>{
		const date = new Date();

		let hour = date.getHours();		
		
		let helloMan;
		
		if (hour>=6 && hour<12) helloMan = "Доброе утро";

		if (hour>=12 && hour<18) helloMan = "Добрый день";

		if (hour>=18 && hour<24) helloMan = "Добрый вечер";

		if (hour>=0 && hour<6) helloMan = "Доброй ночи";

		timerHours.innerHTML = helloMan;
	}
	goodAfternoon();
	
	const weekDay = () =>{
	
		let days = [
			  'Воскресенье',
			  'Понедельник',
			  'Вторник',
			  'Среда',
			  'Четверг',
			  'Пятница',
			  'Суббота'
		];
		let d = new Date();
		let n = d.getDay();
			
		timerMinutes.innerHTML = 'Сегодня: ' + `${days[n]}`;
	}
	weekDay();
	
	const currentTime = () =>{
		const date = new Date();

		let hour = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		
		hour = hour < 10 ? '0' + hour : hour;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;
		timerSeconds.innerHTML = `Текущее время: ${hour}:${minutes}:${seconds}`;
	}
	currentTime();
	
	const getNewYear = () =>{
		const date = new Date().getTime();
		const dateNewYear = new Date('31 december 2022').getTime();
		const timeDifference = (dateNewYear - date)/1000;
		
		let days = Math.floor(timeDifference /60/60/24);
		
		timerNewYear.innerHTML = `До нового года осталось: ${days} дней`;
	}
	getNewYear();
	
}
currentDay();