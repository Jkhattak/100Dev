document.querySelector('#check').addEventListener('click', check)

function check() {
   let day=document.querySelector('#today').value

   
   
   day = day.toLowerCase()

   if (day =='tuesday' || day=='thursday') {
    
    alert('We have a class today')
   } else {
      alert('We do not have a class today')
   }

}