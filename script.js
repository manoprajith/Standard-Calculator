function dis(num) {
  document.getElementById("output").value += num;
}

function result() {
  try{
    let x = document.getElementById("output").value;
    let y = eval(x);
    document.getElementById("output").value = y;
  }
  catch{
    alert("Invalid Expression");
  }
}

function clr() {
  document.getElementById("output").value = "";
}

function d(){
  output.value = output.value.slice(0, - 1);
}