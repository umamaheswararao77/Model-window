const model = document.querySelector('.model');
const btnclose_model =document.querySelector('.close-model');
const btnopen_model=document.querySelectorAll('.show-model');
const overlay =document.querySelector('.overlay');



const openModel = function () {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModel = function () {
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0;i<btnopen_model.length;i++)
  
    btnopen_model[i].addEventListener('click',openModel);
  
    btnclose_model.addEventListener('click',closeModel);

    overlay.addEventListener('click',closeModel);



  