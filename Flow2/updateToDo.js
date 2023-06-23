const addUser = document.getElementById("btn");
const btntext = addUser.innerText
const textfield = document.getElementById("title");
document.getElementById('about');
let records = document.getElementById('list');

let userArray = [];
let objstr = localStorage.getItem('users');
if (objstr != null) {
    userArray = JSON.parse(objstr)
}
userArray = JSON.parse(objstr);


edit_id = null;
addUser.onclick() => {
    const name = textfield.value;
    if (edit_id != null) {
        // edit
        userArray.splice(edit_id, 1, {name})
        edit_id = null;
    } else {
        // insert

        userArray.push(name);
    } saveInfo(userArray);
    textfield.value = '';
    dispalyInfo();
    addUser.innerText = btntext
}

function saveInfo(userArray) {
    let str = JSON.stringify(userArray);
    localStorage.setItem('users', str);
    dispalyInfo();
}


function dispalyInfo() {
    let statement = '';
    userArray.forEach(user => {
        statement += <li></li>
    })
    records.innerHTML = statement;


}


function editInfo() {
    edit_id = id;
    textfield.value = userArray[id].name;
    addUser.innerText = ''
}


function deleteInfo() {
    userArray.splice(id, 1);
    saveInfo(userArray);


}
