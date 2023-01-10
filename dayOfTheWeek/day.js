document.querySelector('button').addEventListener('click', run)




function run() {
    document.querySelector('body').style.backgroundColor = 'pink'
    let searchbar = document.querySelector('#searchbar').value
    // document.querySelector('#display').innerText = searchbar
    if (searchbar == 'tuesday' || searchbar =="Tuesday"){
        alert(searchbar)
    } else if (searchbar === 'thursday' || searchbar==='Thursday') {
        console.log(searchbar)
    } else {
        console.log('BORING DAY')
    }

    
}
