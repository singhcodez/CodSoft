let id=0;
let tasks=[]
const task=document.getElementById("task");
//task adding in list & in task array
  document.getElementById("add").addEventListener("click",(e)=>{
    e.preventDefault();
    
   let newTask={
     text:task.value,
     key:id++
   }
    tasks=[newTask,...tasks]
    task.value="";
    console.log(tasks)
    
      // adding task 
  let list = document.getElementById("list");
  let div=document.createElement("div")
  
      tasks.map((task,i)=>{ let item=` 
             <li class="item">
              <p class="text"><b>${i+1} </b>${task.text}</p> 
              <div class="editSec">
                <span class="edit">✍🏻</span>
                <span class="delete">❌</span>
              </div>
            </li>
          `;      
    
      div.innerHTML+=item;
  })
   list.replaceChild(div,list.childNodes[0]);   
    
  })
  
    // delete elements 
    


          
 console.log(tasks)