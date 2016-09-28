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