let arrCorrectAnswers = [{question: 'question1', correctAnswer:1},
	{question: 'question2', correctAnswer:2},
	{question: 'question3', correctAnswer:3},
	{question: 'question4', correctAnswer:4}];

let arrAnswers = [];

for (let i = 0; i < arrCorrectAnswers.length; i++) {
	arrAnswers[i] = prompt('Вопрос № ' + (i+1));				// задаем вопрос
	if (arrAnswers[i] === null) {										// если нажат 'Esc'
		alert('Отмена');
		break;
	}
	if (arrAnswers[i] === '') {											// если ответ на вопрос не введен
		alert('Вы не ответили на вопрос');
		arrAnswers[i] = prompt('Вопрос № ' + (i+1));
	}
}
let trueAnswers = 0;
function buildQuiz (arr) {												// сравниваем ответы
	for (let i = 0; i < arrCorrectAnswers.length; i++) {
		if (arr[i] == arrCorrectAnswers[i].correctAnswer) {
			trueAnswers +=1;
		}
	}
}

buildQuiz (arrAnswers);
const heading = document.querySelector('h2');
heading.textContent = 'Правильных ответов: ' + trueAnswers;				// Выводим результат в разметку
heading.style.color = 'blue';
heading.style.textAlign = 'center';
heading.style.padding = '100px';
heading.style.backgroundColor = 'yellow';