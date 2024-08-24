
let id = 0;

let tasks = []

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



    }

    let div = document.createElement("div")

    addTasks(div);

// edit box

let edit=document.querySelectorAll(".edit")

 const editorBox=(index)=>{
    let editTask=document.getElementById("editTask")
    let cancel=document.getElementById("cancel")
    let change=document.getElementById("change")
    
  // close the editorbox  
    cancel.addEventListener("click",()=>{
      
       document.getElementById('editor').style.display="none";
  
    })
    
  // edit task
  //adding text in editbox
    editTask.textContent=tasks[index].text;
    
    //change text
    change.addEventListener("click",()=>{
      tasks[index].text="editting";
      document.getElementById('editor').style.display="none";
      
      console.log(tasks[index].text,editTask.textContent);
    
    })  
    
 }

edit.forEach((editbtn,i)=>{
     editbtn.addEventListener("click",()=>{
        
        document.getElementById("editor").style.display="block";
        editorBox(i);
     })
     
    
     
})
})



// delete elements 



const deleteTask = () => {

    let item = document.querySelectorAll(".item");

    let deletebtn = document.querySelectorAll(".delete");


    deletebtn.forEach((tapToDel, j) => {

        //console.log("outer",j)

        deletebtn[j].addEventListener("click", () => {

            console.log(item.length, tasks.length, item.length == tasks.length, j)



            if (item.length == tasks.length && j < item.length) {

                //    console.log("inner",j)

                item[j].remove();

                let deletedItem = tasks.splice(j, 1);

                let div = document.createElement("div");

                deletebtn = document.querySelectorAll(".delete");



            }



        })



    })



}

document.body.addEventListener("click", deleteTask)