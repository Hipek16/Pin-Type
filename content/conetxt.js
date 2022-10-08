document.addEventListener('click', resetInputs, true);

function resetInputs() {
  let inputs = document.getElementById("pin").elements;
  inputs[0].focus();
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        }

}


document.addEventListener('keydown', cofnij, true);

function cofnij(){
  let key = event.keyCode || event.charCode;
  let poprzedniElement = document.activeElement.previousElementSibling;

  if( key == 8 && poprzedniElement){
    poprzedniElement.focus();
   console.log("backspace");
  }
}

function autoTab() {
let aktualnePole = document.activeElement;
	if (aktualnePole.value.length === 1) {
    let nastepnyElement = aktualnePole.nextElementSibling;
    if (nastepnyElement){
      nastepnyElement.focus()
    } else {
      let arr = [];
      let inputs = document.getElementById("ping").elements;
      for (let i = 0; i < inputs.length; i++) {
        arr.push(inputs[i].value);
        inputs[i].value = ""; 
      }
      console.log(arr);
      inputs[0].focus();
      document.getElementById("dialog").showModal();
      document.getElementById("dialog").querySelector("p").innerText = "Twój PIN to\n" + arr.join('');
             }
		}  
}