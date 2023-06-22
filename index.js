let container = document.getElementById('container')
let btn = document.getElementById('btn')
let YN = document.getElementById('YN')
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let p1 = document.createElement('p')
let p2 = document.createElement('p')
let p3 = document.createElement('p')
let p4 = document.createElement('p')
let p5 = document.createElement('p')
let p6 = document.createElement('p')
const hackerman = async (src) =>
{
    return new Promise((resolve,reject)=>
    {
        
        setTimeout(()=>
        {
            resolve(src)
        },2000)
    })
}
loading = async () =>{
    let pro1 = await hackerman('Device Connected SuccessFully...')
    p1.textContent = pro1
    let pro2 = await hackerman('Do You want to fetch data, Y/N?')
    p2.textContent = pro2
    YN.classList.add('show')
    btn1.addEventListener('click', async ()=>
    {
        let pro3 = await hackerman('Hacking data⚠️, take a coffee and wait some time....')
        YN.classList.remove('show')
        p2.textContent = pro3; 
        let pro4 = await hackerman('Hacked Instagram data successfully')
        p3.textContent = pro4
        let pro5 = await hackerman('Username Identified: RandomUser_12')
        p4.textContent = pro5

        //Type here the Username of the user and location
        let pro6 = await hackerman('Data is sent to the database, check it out and Enjoy!!!')
        p5.textContent = pro6
        
    })
    btn2.addEventListener('click', async ()=>
    {
        let pro4 =  await hackerman('Hacking Cancellation...')
        YN.classList.remove('show')
        p2.textContent = pro4
        let pro5 = await hackerman('Hacking cancelled successfully!!!')
        p3.textContent = pro5

    })
    
}

btn.addEventListener('click', ()=>
{
    loading()
    container.appendChild(p1)
    container.appendChild(p2)
    container.appendChild(p3)
    container.appendChild(p4)
    container.appendChild(p5)
})