 class tasks{
    constructor(task, date,status,modalEle,toStart,toPending,toCompleted){
        this.task=task;
        this.date=date;
        this.status=status;
        this.modalEle=modalEle;
        this.toStart=toStart;
        this.toPending=toPending;
        this.toCompleted=toCompleted;
    }
    modal(){
this.modalEle.style.display="flex";
    }
    close(){
       this.modalEle.style.display="none";
       this.task.value="";
this.date.value="";
this.status.value="";
    }
    addtask(){
        if(this.status.value=="to-start"){
            var ul=document.getElementById("ul-start");
            ul.innerHTML+=`<li id="li"> <p>${this.task.value}</p><p>${this.date.value}</p><p>${this.status.value}</p></li>`;
 
     }
     if(this.status.value=="pending"){
        var ul=document.getElementById("ul-pending");
            ul.innerHTML+=`<li id="li"> <p>${this.task.value}</p><p>${this.date.value}</p><p>${this.status.value}</p></li>`;
 
     }
     if(this.status.value=="completed"){
        var ul=document.getElementById("ul-completed");
            ul.innerHTML+=`<li id="li"> <p>${this.task.value}</p><p>${this.date.value}</p><p>${this.status.value}</p></li>`;
 
     }
    }
 }
 var toStart=document.getElementById("to-start");
 var toPending=document.getElementById("pending");
 var toCompleted=document.getElementById("completed");
 var modalEle=document.getElementById("k");
 var task=document.getElementById("name");
 var date=document.getElementById("date");
 var stat=document.getElementById("sel");
 
 var taskC=new tasks(task,date,stat,modalEle,toStart,toPending,toCompleted);

 function modal(){
    taskC.modal();
 }
function close1(){
    taskC.close()
}
function AddTask(){
    if(task.value=="" || stat.value=="" || date.value==""){
        alert("all the input fileds are required");
     
        

    }
    else{
    taskC.addtask();
    taskC.close();
    }
}
