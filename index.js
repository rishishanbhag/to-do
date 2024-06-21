

const addtask=document.getElementById('add-task');
const taskContainer=document.getElementById('task-container');
const inputask=document.getElementById('input-task');

addtask.addEventListener('click',function(){
    
    let task= document.createElement('div');
    task.classList.add('task');

   let li=document.createElement('li');
    li.innerText=`${inputask.value}`;
    task.appendChild(li);

    let checkbutton=document.createElement('button');
    checkbutton.innerHTML='<i>done</i>';
    checkbutton.classList.add("checkTask");
    task.appendChild(checkbutton);


    let deletebutton=document.createElement('button');
    deletebutton.innerHTML='<i class="material-icons">delete</i>';
    deletebutton.classList.add("deleteTask");
    task.appendChild(deletebutton);

    if (inputask.value===''){
        alert("please enter the task");
    }
    else{
        taskContainer.appendChild(task);
    }

    inputask.value="";

    checkbutton.addEventListener('click',function(){
        checkbutton.parentElement.style.textDecoration="line-through";
    })

    deletebutton.addEventListener('click',function(e){
        let target =e.target;
        target.parentElement.parentElement.remove();
    })



})