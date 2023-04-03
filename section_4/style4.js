const buttons = document.querySelectorAll("[data-carrusel-btn]");
let elementoN=1;

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
    const offset= button.dataset.carruselBtn === 'next'? 'next':'prev';
//    let carruselData = document.querySelector("[data-carrusel]").getBoundingClientRect();
    const tarjetaX = document.querySelector("[data-carrusel]").firstElementChild.getBoundingClientRect().x;
    const dataCarrusel = document.querySelector("[data-carrusel]");
    let mover=528;
    console.log(mover, elementoN, tarjetaX);
    
    if (offset === 'prev') {
      if(elementoN==4) return;
      mover *=elementoN;
      dataCarrusel.style.transform = `translate(-${mover}px)`;
      dataCarrusel.style.transition = 'all 1s'
      elementoN+=1;
    }else{
      if(elementoN==1) return;
      elementoN-=1;
      /*
      cuando mover es 2, vuelvo atrás sin problema porque le añado la misma cantidad que le quité.
      si es más de 2, tengo que calcular cuanto volver, a partir de la posición de mover. lo que tengo que
      volver es solo la distancia de una tarjeta a partir de la posición mover.
      */
      mover-=528*elementoN;
      dataCarrusel.style.transform = `translate(${mover}px)`;
      
    }
    console.log(elementoN);
  });
});
