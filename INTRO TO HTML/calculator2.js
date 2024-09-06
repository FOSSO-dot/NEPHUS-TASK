function number(value){
    document.getElementById("display").value += value;
}

function EvaluteAnswer(){
    var resultSet = document.getElementById("display").value;
    var answer = eval(resultSet);
    document.getElementById("display").value = answer;
}
function remove(){
    var del = document.getElementById("display").value;
    var newval =  del.slice(0,-1);
    document.getElementById("display").value = newval;
}