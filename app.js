const form=document.getElementById("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let details = {
      expense: event.target.expense.value,
      description: event.target.description.value,
      category:event.target.category.value
      }
    let details_stringfy = JSON.stringify(details);
    localStorage.setItem(event.target.description.value, details_stringfy);
      expense(details);
  });

  function expense(obj){
    const parent=document.body;
    // Creating the child element
    const child=document.createElement("li");
    child.textContent=obj.expense+"-"+obj.description+"-"+obj.category;
    //  Creating the Delete Button
    let delButton = document.createElement("input")
    delButton.value = "Delete Expense";
    delButton.type = "button";
    // creating edit button
    const editButton = document.createElement("button");
    editButton.textContent="Edit Expense"
     // onclick event on delButton
     delButton.onclick = () => {
      localStorage.removeItem(obj.description);
      parent.removeChild(child);
  }
  editButton.addEventListener("click",()=>{
    localStorage.removeItem(obj.description);
    parent.removeChild(child);
    document.getElementById("expense").value=obj.expense;
    document.getElementById("description").value=obj.description;
    document.getElementById("category").value=obj.category;
  })
  child.appendChild(delButton);
  child.appendChild(editButton);
  parent.appendChild(child)
    
  }