const ulHijos=document.getElementById('listaDesordenada');
const numHijos=document.getElementById('listaDesordenada').children.length;
const pasosFoto = document.getElementById('fotosPasos');

ulHijos.firstElementChild.style.listStyleImage = "url('media/bullet_s3.png')";
ulHijos.addEventListener('click',(e)=>{
  
  //¿índice del li que hay debajo del ul?
  //recorremos para arriba el DOM sabiendo que los LI están dentro de los UL/OL
  //Si no lo encontramos, subimos un elemento para arriba ambas variables
  var papaUl = e.target.parentNode;
  var hijoUl = e.target
  var foto = "paso";
  
  while(papaUl.tagName != 'UL'){
    papaUl = papaUl.parentNode;//this is the UL
    hijoUl = hijoUl.parentNode;//this is the LI
  }
  const indice=Array.from(papaUl.children).indexOf(hijoUl);
  
  //Ahora que sabemos qué LI tuvo el click, cambiamos su icono y a sus "hermanos" también
  Array.from(papaUl.children).forEach((elem, id) => {
    if(id === indice){ 
    
      Array.from(elem.children).forEach((hijos)=>{
        if(hijos.classList.contains('grayed')){
          hijos.classList.remove('grayed');
          hijos.classList.add('oscuro');
        }
      })
      foto = "media/paso" + (indice + 1) + ".png";

      elem.style.listStyleImage = "url('media/bullet_s3.png')";
      pasosFoto.setAttribute("src", foto);
      }else{
        if(id==0){
          papaUl.children[0].style.listStyleImage="";
        }
        Array.from(elem.children).forEach((hijos)=>{
          if(hijos.classList.contains('oscuro')){
            hijos.classList.remove('oscuro');
            hijos.classList.add('grayed');
          }
        })
        elem.style.listStyleImage="";
      }
    
  }
  );

});

//console.log(ulHijos);
//ulHijos[1].addEventListener('click', (e) =>{console.log(e, e.target.item)});
//ulHijos[0].addEventListener('click', (e) =>{console.log(e, e.target.item)});
//ulHijos.addEventListener('click', (child) => {
//  console.log(child);
//});

