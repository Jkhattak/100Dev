document.querySelector('button').addEventListener('clikc', getRapName)

async function getRapName() {
    const res = await fetch('localhost:8000/api/savage')
    const data = res.json()
    
    console.log(data);
}