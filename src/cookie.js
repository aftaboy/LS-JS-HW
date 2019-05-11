/* eslint-disable no-console */
/*
 ДЗ 7 - Создать редактор cookie с возможностью фильтрации

 7.1: На странице должна быть таблица со списком имеющихся cookie. Таблица должна иметь следующие столбцы:
   - имя
   - значение
   - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)

 7.2: На странице должна быть форма для добавления новой cookie. Форма должна содержать следующие поля:
   - имя
   - значение
   - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)

 Если добавляется cookie с именем уже существующией cookie, то ее значение в браузере и таблице должно быть обновлено

 7.3: На странице должно быть текстовое поле для фильтрации cookie
 В таблице должны быть только те cookie, в имени или значении которых, хотя бы частично, есть введенное значение
 Если в поле фильтра пусто, то должны выводиться все доступные cookie
 Если дабавляемая cookie не соответсвуте фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 Если добавляется cookie, с именем уже существующией cookie и ее новое значение не соответствует фильтру,
 то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена

 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */

function getCookies() {
  let cookies = document.cookie.split('; ');
  let result = [];

  cookies.forEach(e => {
    let cc = e.split('=');

    result.push({ name: cc[0], value: cc[1] });
  });

  return result;
}

const homeworkContainer = document.querySelector('#homework-container');
// текстовое поле для фильтрации cookie
const filterNameInput = homeworkContainer.querySelector('#filter-name-input');
// текстовое поле с именем cookie
const addNameInput = homeworkContainer.querySelector('#add-name-input');
// текстовое поле со значением cookie
const addValueInput = homeworkContainer.querySelector('#add-value-input');
// кнопка "добавить cookie"
const addButton = homeworkContainer.querySelector('#add-button');
// таблица со списком cookie
const listTable = homeworkContainer.querySelector('#list-table tbody');

filterNameInput.addEventListener('keyup', function() {
  // здесь можно обработать нажатия на клавиши внутри текстового поля для фильтрации cookie
});

function renderCookie(name, value) {
  let tr = document.createElement('tr'),
    tdName = document.createElement('td'),
    tdValue = document.createElement('td'),
    tdBtn = document.createElement('td'),
    delBtn = document.createElement('button');

  tdName.textContent = name;
  tdValue.textContent = value;
  delBtn.textContent = 'delete';
  delBtn.addEventListener('click', () => {
    deleteCookie(name);
    tr.remove();
  });
  tdBtn.appendChild(delBtn);

  tr.appendChild(tdName);
  tr.appendChild(tdValue);
  tr.appendChild(tdBtn);
  listTable.appendChild(tr);
}

function deleteCookie(name) {
  document.cookie = `${name}=""; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
}

function renderTable() {
  let myCookies = getCookies();

  listTable.innerHTML = null;

  myCookies.forEach(e => {
    if (!e.name) { 
      return;
    }
    renderCookie(e.name, e.value);
  });
}

renderTable();

addButton.addEventListener('click', () => {
  if (!addNameInput.value || !addValueInput.value) {
    return;
  }
  document.cookie = `${addNameInput.value}=${addValueInput.value}`;

  renderTable();
});
