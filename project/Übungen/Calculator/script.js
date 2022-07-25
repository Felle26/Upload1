let haspoint = true

const setpoint = function()
{
    haspoint = true;
}


const appendnumber = function(operation){
    document.getElementById("result").innerHTML += operation;
}

const appendoperation = function(operation){
    document.getElementById("result").innerHTML += operation;
    setpoint();
}

const calculateresult = function(){

    let container= document.getElementById("result");
    let result = eval(container.innerHTML)
    container.innerHTML = result;
    setpoint();
}

const deletelast = function(){
    let container= document.getElementById("result");
    if(container.innerHTML.endsWith(` `))
    {
        container.innerHTML = container.innerHTML.slice(0, -3);
    }
    else{
        container.innerHTML = container.innerHTML.slice(0, -1);

    }

}
const clearresult = function(){
    document.getElementById("result").innerHTML = ``;
    setpoint();
}

const addpoint = function(operation){
    if (document.getElementById("result").innerHTML == "" || document.getElementById("result").innerHTML == " ")
        {
            document.getElementById("result").innerHTML = "0.";
            haspoint = false;
        } else 
            {
                if (haspoint) 
                {
                haspoint = false;
                document.getElementById("result").innerHTML += operation;
                } 
                else 
                {
                alert("zu viele punkte gesetzt"); 
                }
        
            }
  

}

