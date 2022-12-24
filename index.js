// const list = document.createElement('ul');
// list.setAttribute("id","checklist")
// const list_item1 = document.createElement('li');
// list_item1.innerHTML = 'SPW:123';
// const list_item2 = document.createElement('li');
// list_item2.innerHTML = 'SPW:124';
// const list_item3 = document.createElement('li');
// list_item3.innerHTML = 'SPW:125';
// list.appendChild(list_item1);
// list.appendChild(list_item2);
// list.appendChild(list_item3);
// list.append(list_item1,list_item2,list_item3);
// const root = document.getElementById('root');
// root.appendChild(list);

const list_item1 = React.createElement('li', {}, 'SPW:123');
const list_item2 = React.createElement('li', {}, 'SPW:123');
const list_item3 = React.createElement('li', {}, 'SPW:123');
const list = React.createElement('ul', { id: 'checklist' }, [
  list_item1,
  list_item2,
  list_item3,
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(list);