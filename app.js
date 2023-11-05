const form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", () => {
  let values = Object.values(localStorage);
  // values.JSON.parse(values);
  // console.log(values);
  values.forEach((itemObject) => {
    itemObject = JSON.parse(itemObject);
    expense(itemObject);
  });
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let details = {
    expense: event.target.expense.value,
    description: event.target.description.value,
    category: event.target.category.value,
  };
  let details_stringfy = JSON.stringify(details);
  localStorage.setItem(event.target.description.value, details_stringfy);
  expense(details);
});

function expense(obj) {
  const parent = document.getElementById("listItem");
  // Creating the child element
  const child = document.createElement("li");
  child.className = "items";
  child.textContent =
    obj.expense + " - " + obj.description + " - " + obj.category;
  //  Creating the Delete Button
  let delButton = document.createElement("input");
  delButton.value = "Delete Expense";
  delButton.type = "button";
  delButton.className = "delbtn";
  // creating edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit Expense";
  editButton.className = "editbtn";
  // onclick event on delButton
  delButton.onclick = () => {
    localStorage.removeItem(obj.description);
    parent.removeChild(child);
  };
  editButton.addEventListener("click", () => {
    localStorage.removeItem(obj.description);
    parent.removeChild(child);
    document.getElementById("expense").value = obj.expense;
    document.getElementById("description").value = obj.description;
    document.getElementById("category").value = obj.category;
  });
  child.appendChild(delButton);
  child.appendChild(editButton);
  parent.appendChild(child);
}
