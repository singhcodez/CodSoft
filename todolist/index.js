
let id = 0;

let tasks = []
let editSection;
let deleteTask;
const task = document.getElementById("task");

//tasks adding in in task array

document.getElementById("add").addEventListener("click", (e) => {

    e.preventDefault();



    let newTask = {

        text: task.value,

        key: id++

    }

    tasks = [newTask, ...tasks]

    task.value = "";



    // adding task in list

    const addTasks = (div) => {

        let list = document.getElementById("list");

        tasks.map((task, i) => {

            let item = ` 

             <li class="item">

              <p class="text">${task.text}</p> 

              <div class="editSec">

                <span class="edit">✍🏻</span>

                <span class="delete">❌</span>

              </div>

            </li>

          `;



            div.innerHTML += item;

        })

        list.replaceChild(div, list.childNodes[0]);
        
        
        editSection();

    }

    let div = document.createElement("div")

    addTasks(div);
   
   

})


// delete elements 



 deleteTask = () => {

    let items = document.querySelectorAll(".item");
    let deletebtn = document.querySelectorAll(".delete");


    deletebtn.forEach((tapToDel, j) => {

        //console.log("outer",j)

        deletebtn[j].addEventListener("click", () => {



            if (items.length == tasks.length && j < items.length) {

                //    console.log("inner",j)

                items[j].remove();

                let deletedItem = tasks.splice(j, 1);

             

                deletebtn = document.querySelectorAll(".delete");

                editSection();

            }



        })



    })



}

document.body.addEventListener("click", deleteTask)


// edit box
 editSection=()=>{
  
let edit=document.querySelectorAll(".edit")

 const editorBox=(index)=>{
    let editTask=document.getElementById("editTask")
    let cancel=document.getElementById("cancel")
    let change=document.getElementById("change")
    
  //adding text in editbox
   console.log(1)
    editTask.value=tasks[index].text;
    console.log(2)
    
  // close the editorbox  
  
    cancel.addEventListener("click",()=>{
      
       document.getElementById('editor').style.display="none";
     
      
    },{once:true})
 
  // edit task 
  

    //change text
    
    change.addEventListener("click",()=>{
      
      
      let items = document.querySelectorAll(".item");
      
     tasks[index].text=editTask.value;
    items[index].children[0].textContent=tasks[index].text;
      document.getElementById('editor').style.display="none";
      
    },{once:true})  
    
    return 1;
 }

edit.forEach((editbtn,i)=>{
    
     editbtn.addEventListener("click",(e)=>{
        document.getElementById("editor").style.display="block";
        editorBox(i);
        
     })
     
    
     
}) 

}