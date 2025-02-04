const form = document.querySelector("form");

//==========stockage
//
const storeData = () => {
  window.localStorage.todoList = list.innerHTML;
};
//==========restaurer le stockage
function getTodoListe() {
  if (window.localStorage.todoList.value) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML += `<li>Cliquez sur un todo liste pour le supprimer</li>`;
  }
}

window.addEventListener("load", getTodoListe);

// ================Ajouter (à) la liste
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(item.value);
  list.innerHTML += `
    <li>${item.value} </li>
    `;
  item.value = "";
  storeData();
});

// //===========suprimer prmeiere methode

// list.addEventListener("click", (e) => {
//   e.target.remove();
// });
//=============suprimer prmeiere methode

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeData();
});
