
"use strict";



// Codigo apertura de imagenes de social 

const social = document.querySelectorAll(".social");
const apertura_social_container = document.querySelector(".apertura_social-container");
const apertura_social_content = document.querySelector(".apertura_social-content");
const apertura_social_cerrar = document.querySelector(".apertura_social-cerrar");
const apertura_img_container = document.querySelector(".apertura_social-img-container");

let img;

social.forEach(s=>{  s.addEventListener("click", (e)=>{  let target = e.target.className;
                                                         let division = target.split(" ");
                                                         let reDivision = division[1];
                                                         let finalDivision = reDivision.split("-")[0];
                                                         
                                                         img = document.createElement("IMG");
                                                         img.classList.add("img_insertada");
                                                         img.setAttribute("src",`multimedia/imagenes/${finalDivision}.webp`);
                                                         apertura_img_container.appendChild(img);

                                                         apertura_social_container.classList.add("apertura_social-container-open");
                                                         setTimeout(()=>{ apertura_social_content.classList.add("apertura_social-content-open"); },100); });  });

apertura_social_cerrar.addEventListener("click", ()=>{ apertura_social_content.classList.remove("apertura_social-content-open");
                                                       setTimeout(()=>{ apertura_social_container.classList.remove("apertura_social-container-open");
                                                                        apertura_img_container.removeChild(img); },300);  });




// Codigo intersection observer para imagenes de social

const img_socials = document.querySelectorAll(".social");

const img_socials_view = (entryes)=>{ entryes.forEach(entrada=>{  if(entrada.isIntersecting) { img_socials.forEach(social=>{ social.classList.add("social-efect-view"); }); }
                                                                        else img_socials.forEach(social=>{ social.classList.remove("social-efect-view"); });  });  }

const img_socials_watch = new IntersectionObserver(img_socials_view);

img_socials.forEach(social=>{ img_socials_watch.observe(social); });


// Codigo intersection observer para promesas 2 3 y 4

const promesa2_container = document.querySelector(".promesa2-container");
const promesa3_container = document.querySelector(".promesa3-container");
const promesa4_container = document.querySelector(".promesa4-container");

const promesa2_view = (entryes)=> { entryes.forEach(entrada=>{ if(entrada.isIntersecting){ promesa2_container.classList.add("promesas-efect-view"); }
                                                               else { promesa2_container.classList.remove("promesas-efect-view"); } }); }

const promesa2_watch = new IntersectionObserver(promesa2_view);
promesa2_watch.observe(promesa2_container);


const promesa3_view = (entryes)=> { entryes.forEach(entrada=>{ if(entrada.isIntersecting){ promesa3_container.classList.add("promesas-efect-view"); }
                                                               else { promesa3_container.classList.remove("promesas-efect-view"); } }); }

const promesa3_watch = new IntersectionObserver(promesa3_view);
promesa3_watch.observe(promesa3_container);


const promesa4_view = (entryes)=> { entryes.forEach(entrada=>{ if(entrada.isIntersecting){ promesa4_container.classList.add("promesas-efect-view"); }
                                                               else { promesa4_container.classList.remove("promesas-efect-view"); } }); }

const promesa4_watch = new IntersectionObserver(promesa4_view);
promesa4_watch.observe(promesa4_container);


//  Codigo redirecion de boton de compra

const oferta_buttom = document.querySelector(".oferta-buttom");

oferta_buttom.addEventListener("click", ()=>{ window.open("https://go.hotmart.com/U74151808E?ap=5188"); });