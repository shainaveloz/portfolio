let todoList = []
const addButton = document.getElementById('add-item');
const input = document.getElementById('list-input');

addButton.addEventListener('click', add);
input.addEventListener('keydown',((e) => {
    console.log('event', e)
}))
// loadList();

// function loadList() {
//     document.getElementById('to-do-list-form').addEventListener('submit', add)
// }
function add(input){
    console.log('this is working!!')
    console.log(input)
    // todoList.push(item)
    // const parent = document.getElementById('to-do-list');
    // const listItem = document.createElement('li');
    // const editButton = document.createElement('button');
    // const deleteButton = document.createElement('button');
    // listItem.innerText = item;
    // listItem.className = 'list-item';
    // editButton.className = 'edit-button';
    // editButton.innerText = 'Edit';
    // deleteButton.className = 'delete-button';
    // deleteButton.innerText = 'Delete';
    // parent.appendChild(listItem);
    // parent.appendChild(editButton);
    // parent.appendChild(deleteButton);
}

function remove(item){
    console.log(item);
    const list = document.getElementById('to-do-list');
    list.removeChild(item)
    todoList.splice(item, 1);
}

function clearList(){
    todoList = [];
    const list = document.getElementById('to-do-list');
    for(let i = 0; i < list.children.length; i++){
        list.removeChild(i)
    }
}