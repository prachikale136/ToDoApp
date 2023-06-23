var title1,
    about1,
    list;
var taskContents;
function Add1(title, about) {
    this.tasktitle = title;
    this.taskabout = about;

}
taskContents = [
    new taskContent(10, "marker"),
    new taskContent(20, "cellphone"),
    new taskContent(30, "eraser")
]
function loadItems() {
    str = "";
    for (var i = 0; i < taskContent.length; i++) {
        console.log(taskContent.length);
        console.log(taskContent.itemId);

        str += "<li>" + taskContent[i].taskContent + "*" + taskContent[i].taskabout + "</li>";
    }
    text1.innerHTML = str;
}

function Add1() {
    title1.value = " ";
    about1.value = " ";

}
function loadElements()
{

title1=document.getElementById("title1");
about1=document.getElementById("About1");

list=document.getElementById("text1");
loadItems();
}
