

// spinner
const createSpinner = ()=>{
    const spinner = document.createElement('div');
    spinner.id = "spinner";
    spinner.classList.add(' hidden spinner');
    spinner.style.color = "red";
    spinner.textContent = "cargando...";
    

};
const showSpinner = ()=> {};
const hideSpinner = ()=> {};