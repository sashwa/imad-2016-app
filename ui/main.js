var button=document.getElementById('counter');

button.onclick=function(){
  //Creta Make a request
  var request=new XMLhttpRequest();
  
  //capture response and storee in variable
  request.onreadystatechange=function(){
      if(request.readystate===XMLhttpRequest.DONE){
          //action required
          if(request.status===200){
           var counter=request.responseText;
            var span = document.getElementById('count');

           span.innerHTML=counter.toString();
          }
      }
  };
  
  //Make a request
  request.open('GET','http://sashwa.imad.hasura-app.io/',true);
  request.send(null);
  
    
};


var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //make request
    
    //capture list
    var names=['name1','name2','name3','name4'];
    var list="";
    for (var i=0;i=names.length;i++){
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
};
