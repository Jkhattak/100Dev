alert('hello!!!')
document.querySelector('button').addEventListener('click', getRapName)

async function getRapName() {
    try{

    

    const res = await fetch('http://localhost:8000/api/savage')
    const data = res.json()

    console.log(data);
}catch(err){
    console.log()
}}