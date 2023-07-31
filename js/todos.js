
const inputbox=document.getElementById("inbox");
const inputcont=document.getElementById("list");

function Addtask(){
    if(inputbox.value ===''){
        alert("You must write something");
            }
     else
            {
         let li=document.createElement("li");
         inputcont.appendChild(li);
         li.innerHTML=`<div class="container">
         <div class="dropzone box" draggable="true" data-item="${inputbox.value}">${inputbox.value}</i>
         </div>`
         let span =document.createElement("span");
         span.innerHTML="\u00d7";
         li.appendChild(span);
            }
            inputbox.value="";
            data();
}

inputcont.addEventListener("click",function(e){
if(e.target.tagName==="LI"){
e.target.classList.toggle("checked");
data();
}
else if(e.target.tagName==="SPAN")
{
    e.target.parentElement.remove();
    data();
}
},false);

function data(){
    localStorage.setItem("dat",list.innerHTML);
}

function show()
{
    list.innerHTML=localStorage.getItem("dat");
}

show();

var draggedElement = null;
var items;

function handleDragStart(e) {
    this.style.opacity = "0.4";
    draggedElement = this;

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("item", this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) 
        e.preventDefault();

    e.dataTransfer.dropEffect = "move";
    return false;
}

function handleDragEnter(e) {
    this.classList.add("dragover");
}

function handleDragLeave(e) {
    this.classList.remove("dragover");
}

function handleDrop(e) {
    if (e.stopPropagation)
        e.stopPropagation();

    if (draggedElement != this) {
        draggedElement.innerHTML = this.innerHTML;
        draggedElement.setAttribute("data-item", this.innerHTML);

        let replacedItem = e.dataTransfer.getData("item");
        this.innerHTML = replacedItem;
        this.setAttribute("data-item", replacedItem);
    }

    return false;
}

function handleDragEnd(e) {
    this.style.opacity = "1";

    items.forEach(function(item) {
        item.classList.remove("dragover");
    });
}

document.addEventListener("DOMContentLoaded", event => {
    items = document.querySelectorAll(".container .box");

    items.forEach(function(item) {
      item.addEventListener("dragstart", handleDragStart);
      item.addEventListener("dragenter", handleDragEnter);
      item.addEventListener("dragover", handleDragOver);
      item.addEventListener("dragleave", handleDragLeave);
      item.addEventListener("drop", handleDrop);
      item.addEventListener("dragend", handleDragEnd);
    });
});




































// const draggables = document.querySelectorAll('.draggable');
// const containers = document.querySelectorAll('.container');

// draggables.forEach(draggable => {
//     draggable.addEventListener('dragstart',() => {
//        draggable.classList.add('dragging');
//     })
//     draggable.addEventListener('dragend',() => {
//         draggable.classList.remove('dragging');
//      })
// })

// containers.forEach(container => {
//     container.addEventListener('dragover',e => {
//         e.preventDefault();
//         const afterElement = getDragAfterElement(container, e.clientY)
//        const draggable = document.querySelector('.dragging')
//        container.appendChild(draggable);
//     })
// })

// function getDragAfterElement(container, y){
//     const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
//     draggableElements.reduce((closest , child) => {
//       const box = child.getBoundingClientReact()
      
//       console.log(box)
//     }, {offset: Number.POSITIVE_INFINITY})
// }




// let input = prompt("What you would like to do!!")
// const todos=['breakfast','bath','coding']
// while(input!='quit' && input!='q')
// {
//     if(input==='list'){
//         console.log("*********************")
//         for(let i=0;i<todos.length;i++)
//         {
//             console.log(`${i}: ${todos[i]}`)
//         }
//         console.log("*********************")
//     }
//     else if(input==='New')
//     {
//         const todo=prompt("enter what new you want to add")
//         todos.push(todo)
//         console.log(`${todo}, Is added to list`)
//     }
//     else if(input==='Delete')
//     {
//         const con=prompt("enter the index to delete")
//         const temp=todos.splice(con,1)
//         console.log(`${temp}, deleted!!`)
//     }

// input = prompt("what would you like to do?")
    

// }
// console.log("OK , YOU QUIT!!")