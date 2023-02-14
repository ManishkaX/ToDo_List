/* eslint-disable indent */

console.log('Hello world!');

const lastAction = [];

// const notes = document.querySelectorAll('.note');

// console.log(notes);

// const note = {
//     taskTitle: 'Task Name',
//     isCompleted: false,
//     deadline: Date.now(),
//     urlFile: ''
// }
console.log(window.location.href);

const addNoteButton = document.querySelector('.addButton');
const sortByCompButton = document.querySelector('.sortByCompleteButton');
const removeButton = document.querySelector('.removeButton');
const sortByDateButton = document.querySelector('.sortByDateButton');

console.log(removeButton);
// console.log(addNoteButton);

sortByCompButton.addEventListener('click', () => {
    window.location.href += 'sortByComp';
});

sortByDateButton.addEventListener('click', () => {
    window.location.href += 'sortByDate';
});

addNoteButton.addEventListener('click', (e) => {
    alert('Закрой обратно');
});

removeButton.addEventListener('click', (e) => {
    console.log('Tap on Remove Button');

    lastAction.push('remove');
});

function actionHandler() {
    if (lastAction.length === 0) {
        return null;
    }

    if (lastAction.at(0) === 'add') console.log('Add action');

    if (lastAction.at(0) === 'remove') {
        console.log('Remove action');

    }
}

const grid = document.querySelector('.grid');

grid.addEventListener('click', { handleEvent: eventListener });

function eventListener(event) {
    if (event.target.className.includes('note')) {
        const id = event.target.innerHTML.split('</p>').filter(p => p.includes('id')).at(0).split('>').at(1);

        console.log(id);
    }
}

