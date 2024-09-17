document.getElementById('addTaskBtn').addEventListener('click', () => {
    const input = document.getElementById('taskInput');
    const task = input.value.trim();
    if (task) {
        const item = document.createElement('li');
        item.className = 'list-group-item d-flex justify-content-between align-items-center';
        item.innerHTML = `${task} <button class="btn btn-danger btn-sm">Delete</button>`;
        item.querySelector('button').onclick = () => item.remove();
        document.getElementById('taskList').appendChild(item);
        input.value = '';
    }
});

document.getElementById('taskInput').addEventListener('keypress', e => {
    if (e.key === 'Enter') document.getElementById('addTaskBtn').click();
});