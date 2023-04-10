

/*const  panels = document.querySelectorAll('.panel')

panels.forEach((panel) =>{
        panel.addEventListener('click', () =>
        {
            removeActiveClasses()
            panel.classList.add('active')

        })

})
function removeActiveClasses(){
    panels.forEach( panel=>
    {
        panel.classList.remove('active')
    })
}*/
const panals=document.querySelectorAll('.panel')
panals.forEach((i) =>{
    i.addEventListener('click', () =>
    {
        removeActiveClasses()
        i.classList.add('active')
    })

function removeActiveClasses(){
    panals.forEach(panel => 
        {
            panel.classList.remove('active')
        })
}


})