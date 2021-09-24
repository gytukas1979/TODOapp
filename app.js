let submitButton = document.getElementById('submitButton');
let feedback = document.getElementById('feedback');
let mainInput = document.getElementById('mainInput');
let todoDiv = document.getElementById('todoDiv');
let doneDiv = document.getElementById('doneDiv');
let todoListButton = document.getElementById('todoListButton');
let doneListButton = document.getElementById('doneListButton');
let mediaQueryChange = window.matchMedia('(max-width:820px)');
let mediaQueryOnload = window.matchMedia('(max-width:820px)');


if(mediaQueryOnload.matches) {
    doneDiv.classList.add('hide');
}

function createTodoDiv () {
    let jobDiv = document.createElement('div');
    jobDiv.classList.add('todoDiv');
    jobDiv.style.backgroundColor = 'lightblue';
    let h3 = document.createElement('h3');
    h3.innerText = mainInput.value.charAt(0).toUpperCase() + mainInput.value.slice(1).toLowerCase();

    let todoButtons = document.createElement('div');
    let moveToDoneButton = document.createElement('button');
    moveToDoneButton.innerText = 'Move to Done';
    moveToDoneButton.classList.add('btn', 'btn-blue');
    todoButtons.appendChild(moveToDoneButton);
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('btn', 'btn-red', 'margin-top');
    todoButtons.appendChild(deleteButton);

    jobDiv.appendChild(h3);
    jobDiv.appendChild(todoButtons);
    todoDiv.appendChild(jobDiv);
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (mainInput.value == '') {
        if(feedback.classList.contains('hide')){
            feedback.classList.remove('hide');
        }
        if(!mainInput.classList.contains('red-border')){
            mainInput.classList.add('red-border');
        }
    } else {
        if(!feedback.classList.contains('hide')) {
            feedback.classList.add('hide');
        }
        if(mainInput.classList.contains('red-border')) {
            mainInput.classList.remove('red-border');
        }
        createTodoDiv();
    }
    mainInput.value ='';
})

todoDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-red')) {
        e.target.parentElement.parentElement.remove();
    } else if (e.target.classList.contains('btn-blue')) {
        e.target.innerText = 'Move back';
        e.target.parentElement.parentElement.style.backgroundColor = '#eccdcd';
        doneDiv.appendChild(e.target.parentElement.parentElement);
    }
})

doneDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-red')) {
        e.target.parentElement.parentElement.remove();
    } else if (e.target.classList.contains('btn-blue')) {
        e.target.innerText = 'Move to Done';
        e.target.parentElement.parentElement.style.backgroundColor = 'lightblue';
        todoDiv.appendChild(e.target.parentElement.parentElement);
    }
})

todoListButton.addEventListener('click', () => {
    if(todoListButton.classList.contains('btn-black')) {
        todoListButton.classList.remove('btn-black');
        todoListButton.classList.add('btn-white');
        doneListButton.classList.remove('btn-white');
        doneListButton.classList.add('btn-black');
        todoDiv.classList.remove('hide');
        doneDiv.classList.add('hide');
    } 
})

doneListButton.addEventListener('click', () => {
    if(doneListButton.classList.contains('btn-black')) {
        doneListButton.classList.remove('btn-black');
        doneListButton.classList.add('btn-white');
        todoListButton.classList.remove('btn-white');
        todoListButton.classList.add('btn-black');
        doneDiv.classList.remove('hide');
        todoDiv.classList.add('hide');
    } 
})

mediaQueryChange.addEventListener('change', () => {
    if(!todoDiv.classList.contains('hide') && !doneDiv.classList.contains('hide')) {
        doneDiv.classList.add('hide');
    } else {
        if (todoDiv.classList.contains('hide')) {
            todoDiv.classList.remove('hide');
        } else {
            doneDiv.classList.remove('hide');
        }
    }
})


