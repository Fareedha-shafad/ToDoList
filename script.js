console.log("script is working");


function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;  
    

    function valid(log,pass,callback){
        console.log(log);
        console.log(pass);
        if((log=="admin")&&(pass=="12345"))
    {
                console.log("valid");
                 if(callback()){

        console.log("go");
     
                 }
                }
    else{
        alert("invalid ");
       
    }
    
}    
        

if(valid(username,password,goto)){
    
}
else{
    return false;
}
}

       function goto(){
           window.location.href="todo.html";
           
       }
