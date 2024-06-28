// alert("loading");

function addNewWEField(){
    // console.log("Adding New Field");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);


}
// alert("loading");

function addNewAQField(){
    // console.log("Adding New Field");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);


}
// generate cv

function generateCV() {
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    let nameT2 = document.getElementById("nameT2");
    nameT2.innerHTML = nameField;

    let contactField = document.getElementById("contactField").value;
    let contactT = document.getElementById("contactT");
    contactT.innerHTML = contactField;

    let addressField = document.getElementById("addressField").value;
    let addressT = document.getElementById("addressT");
    addressT.innerHTML = addressField;

    let fbField = document.getElementById("fbField").value;
    let fbT = document.getElementById("fbT");
    fbT.innerHTML = fbField;
    fbT.href = fbField;

    let instaField = document.getElementById("instaField").value;
    let instaT = document.getElementById("instaT");
    instaT.innerHTML = instaField;
    instaT.href = instaField;

    let linkedField = document.getElementById("linkedField").value;
    let linkedT = document.getElementById("linkedT");
    linkedT.innerHTML = linkedField;
    linkedT.href = linkedField;

    let objectiveField = document.getElementById("objectiveField").value;
    let objectiveT = document.getElementById("objectiveT");
    objectiveT.innerHTML = objectiveField;

    let weFields = document.getElementsByClassName("weField");
    let weT = document.getElementById("weT");
    weT.innerHTML = "";
    for (let field of weFields) {
      let li = document.createElement("li");
      li.innerHTML = field.value;
      weT.appendChild(li);
    }

    let eqFields = document.getElementsByClassName("eqField");
    let aqT = document.getElementById("aqT");
    aqT.innerHTML = "";
    for (let field of eqFields) {
      let li = document.createElement("li");
      li.innerHTML = field.value;
      aqT.appendChild(li);
    }

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
  }

  function printCV() {
    window.print();
  }

  function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "my-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weAddButton = document.getElementById("weAddButton");
    document.getElementById("we").insertBefore(newNode, weAddButton);
  }

  function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "eqField", "my-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let aqAddButton = document.getElementById("aqAddButton");
    document.getElementById("aq").insertBefore(newNode, aqAddButton);
  }