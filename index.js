let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('myTable');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('fullName').value;
    row.insertCell(1).innerHTML = document.getElementById('messageDetails').value;
    let actions = row.insertCell(2);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('fullName').value = '';
    document.getElementById('messageDetails').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary mb-3';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Delete row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}