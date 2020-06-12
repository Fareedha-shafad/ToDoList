var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj1 = JSON.parse(this.responseText);
    var res1=myObj1;
    var output='';
    
    for(var i=0;i<myObj1.length;i++)
    {
        //console.log("inside the for loop now")
       if((res1[i].completed)==true)
        {
            output+=`<input id="check1" " type="checkbox" checked="checked" disabled style="";>
            <label>${res1[i].title}</label><br><hr>`;
              
        }
       else{
      
        output+=`<input type="checkbox" onclick="f(this)"  ><label>${res1[i].title}</label><br><hr>`;
        
       }
       
  }
 
  document.getElementById("print").innerHTML = `${output}`;
  
}
};
xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xmlhttp.send();

var counter=0;

function f(val){

var prmse=new Promise(function(resolve,reject){
 if (val.checked==true){
        counter=counter+1;
        console.log(counter)
        if(counter>=5){
        
        resolve(" Congrats. 5 Tasks have been Successfully Completed ");

      }
    }
    else{
        counter=counter-1;
        console.log(counter);
      
      }
});
  prmse.then(function(s){
    alert(s);
  });

}
