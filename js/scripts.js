// UI Logic
window.onload = function() {
  let form = document.querySelector("form")
  form.onsubmit = function(event) {
    event.preventDefault();

  document.getElementById("reveal").setAttribute('class', 'hidden');

  }
}