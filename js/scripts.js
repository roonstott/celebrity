// UI Logic
window.onload = function() {
  let form = document.querySelector("form")
  form.onsubmit = function(event) {
    event.preventDefault();

    document.getElementById("reveal").setAttribute('class', 'hidden');
    document.getElementById("error").setAttribute('class', 'hidden');

    const age = parseInt(document.getElementById("age").value);
    const happy = parseInt(document.getElementById("happy").value);
    const looks = parseInt(document.getElementById("looks").value);
    const total = happy + looks;

    console.log("age" + age);
    console.log("looks" + looks);
    console.log("happy" + happy);
    console.log("total" + total);

    let response = document.querySelector("span#match");


    if(!age || !total) {
    document.querySelector("div#error").removeAttribute("class");
    }
    else if(age >= 30 && total >= 8) {
    document.querySelector('div#reveal').removeAttribute('class');
    document.querySelector("span#match").innerText = " Gengis Khan";
  } else if(age <= 29 && total >= 8) {
    document.querySelector('div#reveal').removeAttribute('class');
    document.querySelector("span#match").innerText = " Elvis Presley";
  } else if(age >= 30 && total < 8) {
    document.querySelector('div#reveal').removeAttribute('class');
    document.querySelector("span#match").innerText = " Napoleon Bonaparte";
  } else if(age <= 29 && total < 8) {
    document.querySelector('div#reveal').removeAttribute('class');
    document.querySelector("span#match").innerText = " Hellen Keller";
  }

    
  }
}
