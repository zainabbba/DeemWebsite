
let salla_init = document.getElementById('salla_init')
let myBtn=document.getElementById('myBtn')
 let salla_button = document.querySelectorAll('.salla_button')
// let salla_button=document.getElementsByClassName('salla_button')

let iconmenu=document.querySelector('.iconmenu')
let myDropdown=document.querySelector('.myDropdown')
let dropdown_content=document.querySelector('.dropdown-content')
let dropbtn=document.querySelector('.dropbtn')
console.log(myDropdown)

console.log('hello')

for (let index = 0; index < salla_button.length; index++) {
  // salla_init.innerHTML=counter
console.log('hello')
  // salla_button[index].style.backgroundColor='red';
  counter=0

salla_button[index].addEventListener('click', (e) => {
  counter=counter+1
  salla_init.innerText=counter

})
  
}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


iconmenu.addEventListener('click',(e) => { 
 
console.log('he')

myDropdown.classList.toggle("show");


 })

window.addEventListener('click',(e) => { 

  if (!e.target.matches('.dropbtn')) {
 
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
 })
//  // Close the dropdown if the user clicks outside of it
// window.onclick = function(e) {
//   if (!e.target.matches('.dropbtn')) {
//   var myDropdown = document.getElementById("myDropdown");
//     if (myDropdown.classList.contains('show')) {
//       myDropdown.classList.remove('show');
//     }
//   }
// }

//  window.addEventListener('click',(e) => { 

//   if (!e.target.matches('.dropbtn')) {
//     var myDropdown = document.getElementById("myDropdown");
//       if (myDropdown.classList.contains('show')) {
//         myDropdown.classList.remove('show');
//       }
//     }

//   })
