const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const fvChapter = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');

    listItem.appendChild(newSpan);
    newSpan.textContent = fvChapter;
    listItem.appendChild(newBtn);
    newBtn.textContent = '❌';
    list.appendChild(listItem);

    newBtn.addEventListener('click', () => {
      list.removeChild(listItem);
    });

    input.focus();
});