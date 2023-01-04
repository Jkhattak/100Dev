document.getElementById('check').addEventListener('click', check)

function check () {
   let day =  document.querySelector('#today').value.toLowerCase

   

   if (day ==='Tuesday' || day==='Thursday') {
    day = day.toLowerCase
    alert(day)
   }

}