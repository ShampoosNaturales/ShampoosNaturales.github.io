
"use strict";

// Codigo seccion barra de navegacion normal y  resonsive - redirecciones de ambas barras de navegacion

const nav_sobre_nosotros = document.querySelector(".nav-sobre_nosotros");
const nav_sobre_cupon = document.querySelector(".nav-sobre_cupon");
const nav_dudas  = document.querySelector(".nav-dudas");
const nav_ingresar = document.querySelector(".nav-ingresar");

const aside_resp_sobre_nosotros = document.querySelector(".aside-resp-sobre_nosotros");
const aside_resp_sobre_cupon  = document.querySelector(".aside-resp-sobre_cupon");
const aside_resp_dudas = document.querySelector(".aside-resp-dudas");
const aside_resp_ingresar = document.querySelector(".aside-resp-ingresar");


const sobre_MC_container = document.querySelector(".sobre_MC-container");
const sobre_MC_content = document.querySelector(".sobre_MC-content");
const sobre_MC_cerrar = document.querySelector(".sobre_MC-cerrar");

nav_sobre_nosotros.addEventListener("click", ()=>{ sobre_MC_container.classList.toggle("sobre_MC-container-open");
                                                   setTimeout(()=>{ sobre_MC_content.classList.toggle("sobre_MC-content-open");  },200); });

aside_resp_sobre_nosotros.addEventListener("click", ()=>{ sobre_MC_container.classList.toggle("sobre_MC-container-open");
                                                          setTimeout(()=>{ sobre_MC_content.classList.toggle("sobre_MC-content-open");  },200); });

sobre_MC_cerrar.addEventListener("click", ()=>{ sobre_MC_content.classList.toggle("sobre_MC-content-open");
                                                setTimeout(()=>{ sobre_MC_container.classList.toggle("sobre_MC-container-open");  },200);  });


const sobre_cupon_container = document.querySelector(".sobre_cupon-container");
const sobre_cupon_content = document.querySelector(".sobre_cupon-content");
const sobre_cupon_cerrar = document.querySelector(".sobre_cupon-cerrar");

nav_sobre_cupon.addEventListener("click", ()=>{ sobre_cupon_container.classList.toggle("sobre_cupon-container-open");
                                                setTimeout(()=>{ sobre_cupon_content.classList.toggle("sobre_cupon-content-open"); },200);  });

aside_resp_sobre_cupon.addEventListener("click", ()=>{ sobre_cupon_container.classList.toggle("sobre_cupon-container-open");
                                                       setTimeout(()=>{ sobre_cupon_content.classList.toggle("sobre_cupon-content-open"); },200); });

sobre_cupon_cerrar.addEventListener("click", ()=>{ sobre_cupon_content.classList.toggle("sobre_cupon-content-open");
                                                   setTimeout(()=>{ sobre_cupon_container.classList.toggle("sobre_cupon-container-open"); },300); });


const preguntanos_container = document.querySelector(".preguntanos-container");
const preguntanos_content = document.querySelector(".preguntanos-content");
const preguntanos_cerrar = document.querySelector(".preguntanos-cerrar");
const preguntanos_whatsapp = document.querySelector(".preguntanos-whatsapp");

nav_dudas.addEventListener("click", ()=>{ preguntanos_container.classList.toggle("preguntanos-container-open");
                                          setTimeout(()=>{ preguntanos_content.classList.toggle("preguntanos-content-open");  },200); });

aside_resp_dudas.addEventListener("click" ,()=>{ preguntanos_container.classList.toggle("preguntanos-container-open");
                                                 setTimeout(()=>{ preguntanos_content.classList.toggle("preguntanos-content-open");  },200); });

preguntanos_cerrar.addEventListener("click", ()=>{  preguntanos_content.classList.toggle("preguntanos-content-open");
                                                    setTimeout(()=>{ preguntanos_container.classList.toggle("preguntanos-container-open"); },300); });

preguntanos_whatsapp.addEventListener("click", ()=>{ window.open("https://wa.me/message/VJCLXO6NKU5KO1");  });



aside_resp_ingresar.addEventListener("click", ()=>{ window.open("https://go.hotmart.com/U74151808E?ap=0a46"); }); 

nav_ingresar.addEventListener("click", ()=>{ window.open("https://go.hotmart.com/U74151808E?ap=0a46"); });


// Codigo seccion barra de navegacion responsive - solo abrir y cerrar

const menu_resp = document.querySelector(".nav-resp-menu");
const aside_resp_closed = document.querySelector(".aside-resp-cerrar");

const aside_container = document.querySelector(".aside-resp-container");
const aside_content = document.querySelector(".aside-resp-content");

menu_resp.addEventListener("click", ()=>{ aside_container.classList.toggle("aside-resp-container-open");
                                          setTimeout(()=>{ aside_content.classList.toggle("aside-resp-content-open"); },100); });

aside_resp_closed.addEventListener("click", ()=>{ aside_content.classList.toggle("aside-resp-content-open");
                                                  setTimeout(()=>{ aside_container.classList.toggle("aside-resp-container-open"); },300); });

// Redirección para boton de Main

const main_ingresar = document.querySelector(".main-buttom-container");

main_ingresar.addEventListener("click", ()=>{ window.open("https://go.hotmart.com/U74151808E?ap=0a46") });


// Interseccion observer para Main

const main_img_content = document.querySelector(".main-img-content");
const main_decoration = document.querySelector(".main-img-decoration");

const view_main = (entryes)=>{ entryes.forEach(entradas=>{  if(entradas.isIntersecting) { main_decoration.classList.add("main-decoration-view"); }
                                                            else { main_decoration.classList.remove("main-decoration-view");  }  }); }

const watch_main = new IntersectionObserver(view_main);

watch_main.observe(main_img_content);













// Intesection Observer para targetas -----------------------------------------------------------

const accesos_content = document.querySelector(".accesos-content");

const tempos = ["1s",".3s","1.5s",".2s","1s",".5s"];

const set_IO = ()=>{ const view_targetas = (entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting){ for(let i=0; i<tempos.length; i++){ const targeta = document.querySelector(`.targeta-${i}`);
                                                                                                                                                   targeta.style.animation =`targeta_view ${tempos[i]} forwards`;  }  }

                                                                                   else { for(let i=0; i<tempos.length; i++){ const targeta = document.querySelector(`.targeta-${i}`);
                                                                                                                              targeta.style.animation = `none`;  }  }   }); } 
                     
                     const watch_targetas = new IntersectionObserver(view_targetas);
                     watch_targetas.observe(accesos_content);  }

                     set_IO();








// Codigo seccion Promesa inicial







// Codigo seccion problemas 2

const problemas2_img = document.querySelector(".problemas2-img");
const problemas2_decoration = document.querySelector(".problemas2-decoration");


const view_problemas2_img = (entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting){ problemas2_decoration.classList.add("problemas2-decoration-view");
                                                                                                problemas2_img.classList.add("problemas2-decoration-view"); }

                                                                   else  { problemas2_decoration.classList.remove("problemas2-decoration-view");
                                                                           problemas2_img.classList.remove("problemas2-decoration-view"); }  }); }

const watch_problemas2_img = new IntersectionObserver(view_problemas2_img);
watch_problemas2_img.observe(problemas2_img);










// Codigo seccion promesa 1 ----------------------------------------------------------------------

const promesa1_img = document.querySelector(".promesa1-img");
const promesa1_2_img = document.querySelector(".promesa1-2-img");
const promesa1_decoration = document.querySelector(".promesa1-decoration");

const view_promesa1_img = (entryes)=> {  entryes.forEach(entrada=>{ if (entrada.isIntersecting){  promesa1_decoration.classList.add("promesa1-efect-view");
                                                                                                  promesa1_img.classList.add("promesa1-efect-view"); }

                                                                    else { promesa1_decoration.classList.remove("promesa1-efect-view");
                                                                           promesa1_img.classList.remove("promesa1-efect-view"); }  });  }

const view_promesa1_2_img = (entryes)=>{ entryes.forEach(entrada=>{  if(entrada.isIntersecting){ promesa1_2_img.classList.add("promesa1-efect-view"); }

                                                                     else promesa1_2_img.classList.remove("promesa1-efect-view"); }); }


const watch_promesa1_2_img = new IntersectionObserver(view_promesa1_2_img);
watch_promesa1_2_img.observe(promesa1_2_img);

const watch_promesa1_img = new IntersectionObserver(view_promesa1_img);
watch_promesa1_img.observe(promesa1_img);



// codigo seccion promesa 2 --------------------------------------------------------------------------

const promesa2_img = document.querySelector(".promesa2-img");
const promesa2_decoration = document.querySelector(".promesa2-decoration");

const view_promesa2_img  = (entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting){ promesa2_img.classList.add("promesa2-img-view");
                                                                                               promesa2_decoration.classList.add("promesa2-decoration-view");  }

                                                                   else { promesa2_img.classList.remove("promesa2-img-view");
                                                                          promesa2_decoration.classList.remove("promesa2-decoration-view"); } });  }

const watch_promesa2_img = new IntersectionObserver(view_promesa2_img);
watch_promesa2_img.observe(promesa2_img);


// Codigo seccio promesa 3 ----------------------------------------------------------------------------

const promesa3_img = document.querySelector(".promesa3-img");
const promesa3_decoration = document.querySelector(".promesa3-decoration");

const view_promesa3_img = (entryes)=>{ entryes.forEach(entrada=>{  if(entrada.isIntersecting){ promesa3_img.classList.add("promesa3-efect-view");
                                                                                               promesa3_decoration.classList.add("promesa3-efect-view"); }
                                                                                               
                                                                   else { promesa3_img.classList.remove("promesa3-efect-view");
                                                                          promesa3_decoration.classList.remove("promesa3-efect-view"); }       }); }

const watch_promesa3_img = new IntersectionObserver(view_promesa3_img);
watch_promesa3_img.observe(promesa3_img);


// codigo seccion promesa 4 ----------------------------------------------------------------------------

const promesa4_img = document.querySelector(".promesa4-img");
const promesa4_decoration = document.querySelector(".promesa4-decoration");
const promesa4_button = document.querySelector(".promesa4-button");

const view_promesa4_img = (entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting){ promesa4_img.classList.add("promesa4-view");
                                                                                              promesa4_decoration.classList.add("promesa4-view"); }
                                                                                              
                                                                  else { promesa4_img.classList.remove("promesa4-view");
                                                                         promesa4_decoration.classList.remove("promesa4-view"); }  }); }

const watc_promesa4_img = new IntersectionObserver(view_promesa4_img);
watc_promesa4_img.observe(promesa4_img);

promesa4_button.addEventListener("click", ()=>{ window.open("https://go.hotmart.com/U74151808E?ap=0a46") });

// Codigo seccion promesa 5 ----------------------------------------------------------------------------

const promesa5_img = document.querySelector(".promesa5-img");
const promesa5_decoration = document.querySelector(".promesa5-decoration");
const promesa5_tittle_dinamico = document.querySelector(".promesa5-tittle-dinamico");
let count = true;

const view_promesa5_img = (entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting) { promesa5_img.classList.add("promesa5-efect-view");
                                                                                               promesa5_decoration.classList.add("promesa5-efect-view");
                                                                                               active_enlinea(count);
                                                                                               count = false; }
                                                                  
                                                                  else { promesa5_img.classList.remove("promesa5-efect-view");
                                                                         promesa5_decoration.classList.remove("promesa5-efect-view"); }  });  }

const watch_promesa5_img = new IntersectionObserver(view_promesa5_img);

watch_promesa5_img.observe(promesa5_img);

// --------- rellenar tittle dinamico con mes correspondiente ----------

const list_Months = [[0,"Enero"],[1,"Febrero"],[2,"Marzo"],[3,"Abril"],[4,"Mayo"],[5,"Junio"],[6,"Julio"],[7,"Agosto"],[8,"Septiembre"],[9,"Octubre"],[10,"Noviembre"],[11,"Diciembre"]];

const datos = new Date();
let mes = datos.getMonth();

for(let i=0; i <list_Months.length; i++) { if(mes == list_Months[i][0]) { let month_current = list_Months[i][1];
                                                                          let new_tittle = `${month_current} al 50% OFF`;
                                                                          promesa5_tittle_dinamico.innerHTML = new_tittle;
                                                                          break;  } }

// Abrir modal de promesa 5

const promesa5_generar = document.querySelector(".promesa5-generar");
const promesa5_usar = document.querySelector(".promesa5-usar");
const promesa5_comprar = document.querySelector(".promesa5-comprar");

const generar_cupon_container = document.querySelector(".generar_cupon-container");
const generar_cupon_content = document.querySelector(".generar_cupon-content");

const como_usar_container = document.querySelector(".como_usar-container");
const como_usar_content = document.querySelector(".como_usar-content");
const como_usar_cerrar = document.querySelector(".como_usar-cerrar");
const como_usar_video = document.querySelector(".como_usar-video");
const como_usar_comprar = document.querySelector(".como_usar-comprar");

const tiempo_container = document.querySelector(".tiempo-container");
const tiempo_tittle = document.querySelector(".tiempo-tittle");
const tiempo_tittle_img  = document.querySelector(".tiempo-tittle-img");
const tiempo_hora = document.querySelector(".tiempo-hora");
const tiempo_minutos = document.querySelector(".tiempo-minutos");
const tiempo_segundos = document.querySelector(".tiempo-segundos");



//  Funciones para rellenar barra de tiempo limitado

let hora = 1;
let minuto = 59;
let segundo = 59;

const set_Zeros = (numb)=>{ if(numb<10 && numb>0) { let result = `0${numb}`;
                                                    return result; }

                            else if(numb<=0) { return "00"; }

                            else return numb;  }


const change_time = ()=>{ tiempo_hora.innerHTML = set_Zeros(hora);
                          tiempo_minutos.innerHTML = set_Zeros(minuto);
                          tiempo_segundos.innerHTML = set_Zeros(segundo);
                          
                          setInterval(()=>{ if(segundo>0) { segundo--;
                                                            tiempo_segundos.innerHTML = set_Zeros(segundo);  }

                                            else { if(minuto>0){ minuto--;
                                                                 segundo = 59;
                                                                 tiempo_segundos.innerHTML = set_Zeros(segundo);
                                                                 tiempo_minutos.innerHTML = set_Zeros(minuto); }

                                                   else { if(hora>0) { hora--;
                                                                       minuto = 59;
                                                                       tiempo_minutos.innerHTML = set_Zeros(minuto);
                                                                       tiempo_hora.innerHTML= set_Zeros(hora); }

                                                          else { hora,minuto,segundo = "00";
                                                                 tiempo_hora.innerHTML = set_Zeros(hora);
                                                                 tiempo_minutos.innerHTML = set_Zeros(minuto);
                                                                 tiempo_segundos.innerHTML = set_Zeros(segundo); }    }    } },1000); }


// Condicional de usuario antiguo
// Insertar el tiempo que le queda

let User = localStorage.getItem("Old_User");

if(User) { promesa5_generar.setAttribute("disabled",false);
           promesa5_generar.innerHTML = `Tu cupon<b style="color:green">""</b> 031016`;
           promesa5_generar.style.backgroundColor = "green";

           let border = document.querySelectorAll(".tiempo-border-container");
           border.forEach(borde=>{ borde.style.border = "3px solid #11C90E"; });
           tiempo_tittle.innerHTML = "Descuento 50% Activo";
           tiempo_tittle.style.color = "#11C90E";
           tiempo_tittle_img.setAttribute("src","multimedia/iconos/habilitado2.svg");

           let datos = new Date();
           let current_time = datos.getTime();
           let ingreso = localStorage.getItem("Ingreso");
           
           let result = (current_time - ingreso)/1000;
           let result2 = Math.round(result)/60;
           let result3 = Math.round(result2);

           if(result3 < 60){ minuto = 60-result3;
                             change_time();
                             console.log("Validation 1");  }

           if(result3>=120) { hora= "00";
                              minuto = "00";
                              segundo = "00";
                              change_time();

                              tiempo_tittle.innerHTML = "Descuento Finalizado";
                              tiempo_tittle.style.color = "red";
                              tiempo_tittle_img.setAttribute("src","multimedia/iconos/habilitado2.svg");
                              let border = document.querySelectorAll(".tiempo-border-container");
                              border.forEach(borde=>{ borde.style.border = "3px solid red"; });
                              tiempo_tittle_img.setAttribute("src","multimedia/iconos/vencido.svg");

                              promesa5_generar.innerHTML = `Cupon vencido`;
                              promesa5_generar.style.backgroundColor = "red";

                              localStorage.setItem("Old_User",false);

                              console.log("Validation 2"); }

           if(result3 >= 60 && result3<120)  { hora--;
                                               let restar =  result3 - 60;
                                               minuto = 60 - restar;
                                               change_time(); 
                                               console.log("Validation 3"); }  }




//  10:23 empezo
//  12:23 terminaría

promesa5_generar.addEventListener("click", ()=>{ generar_cupon_container.classList.toggle("generar_cupon-container-open");
                                                 setTimeout(()=>{ generar_cupon_content.classList.toggle("generar_cupon-content-open");
                                                                  setTimeout(()=>{ let replace = document.querySelector(".generar_cupon-replace");

                                                                                   let replace1 =  `<h4>Cupon generado con exito</h4>
                                                                                                    <p>Usted obtendra un 50% de descuento con este cupon</p>
                                                                                                    <span>031016</span>
                                                                                                    <button class="generar_cupon-replace1-siguiente">Siguiente</button>`;

                                                                                   let div = document.createElement("DIV");
                                                                                   div.classList.add("generar_cupon-replace1");
                                                                                   div.innerHTML = replace1;
                                                                                   generar_cupon_content.replaceChild(div,replace);

                                                                                   const generar_cupon_replace1_siguiente = document.querySelector(".generar_cupon-replace1-siguiente");
                                                                                   const generar_cupon_replace1 = document.querySelector(".generar_cupon-replace1");
                                                                                   generar_cupon_replace1_siguiente.addEventListener("click", ()=>{ let replace2 = `<h4>Cupon vence en</h4>
                                                                                                                                                                    <span>2 horas</span>
                                                                                                                                                                    <p><b class="importante">Atencion:</b> Pasado el tiempo, el cupon dejara de ser valido y pasara a otro usuario.</p>
                                                                                                                                                                    <button class="generar_cupon-replace2-comprar">Comprar el curso</button>
                                                                                                                                                                    <button class="generar_cupon-replace2-navegar">Seguir navegando</button>`;
                                                                                                                                                     
                                                                                                                                                     let div = document.createElement("DIV");
                                                                                                                                                     div.classList.add("generar_cupon-replace2");
                                                                                                                                                     div.innerHTML = replace2;
                                                                                                                                                     generar_cupon_content.replaceChild(div,generar_cupon_replace1); 

                                                                                                                                                     const generar_cupon_replace2_comprar = document.querySelector(".generar_cupon-replace2-comprar");
                                                                                                                                                     const generar_cupon_replace2_navegar = document.querySelector(".generar_cupon-replace2-navegar");

                                                                                                                                                     let datos = new Date();
                                                                                                                                                     let ingreso = datos.getTime();
                                                                                                                                                     localStorage.setItem("Old_User",true);
                                                                                                                                                     localStorage.setItem("Ingreso",ingreso);

                                                                                                                                                     generar_cupon_replace2_comprar.addEventListener("click", ()=>{ window.open("https://go.hotmart.com/U74151808E?ap=0a46"); });
                                                                                                                                                     generar_cupon_replace2_navegar.addEventListener("click", ()=>{ generar_cupon_content.classList.toggle("generar_cupon-content-open");
                                                                                                                                                                                                                    promesa5_generar.setAttribute("disabled",false);
                                                                                                                                                                                                                    promesa5_generar.innerHTML = `Tu cupon<b style="color:green">""</b> 031016`;
                                                                                                                                                                                                                    promesa5_generar.style.backgroundColor = "green";
                                                                                                                                                                                                                    setTimeout(()=>{ generar_cupon_container.classList.toggle("generar_cupon-container-open");
                                                                                                                                                                                                                                     change_time();
                                                                                                                                                                                                                                     let border = document.querySelectorAll(".tiempo-border-container");
                                                                                                                                                                                                                                     tiempo_tittle.innerHTML = "Descuento 50% Activo";
                                                                                                                                                                                                                                     tiempo_tittle.style.color = "#11C90E";
                                                                                                                                                                                                                                     tiempo_tittle_img.setAttribute("src","multimedia/iconos/habilitado2.svg");
                                                                                                                                                                                                                                     border.forEach(borde=>{ borde.style.border = "3px solid #11C90E"; });  },200); }); });  },1500);  },200); });


promesa5_usar.addEventListener("click", ()=>{ como_usar_container.classList.toggle("como_usar-container-open");
                                              setTimeout(()=>{ como_usar_content.classList.toggle("como_usar-content-open");
                                                               como_usar_video.setAttribute("src","multimedia/videos/Como usar.mp4");
                                                               como_usar_video.play(); },200);
                                                               como_usar_comprar.addEventListener("click", ()=>{ window.open("https://go.hotmart.com/U74151808E?ap=0a46"); });   });

como_usar_cerrar.addEventListener("click", ()=>{  como_usar_content.classList.toggle("como_usar-content-open");
                                                  setTimeout(()=>{ como_usar_container.classList.toggle("como_usar-container-open");
                                                                   como_usar_video.setAttribute("src","#nothing"); },200); });

promesa5_comprar.addEventListener("click",  ()=>{ window.open("https://go.hotmart.com/U74151808E?ap=0a46"); });












// Codigo seccion personas en linea dinamico

const enlinea_container = document.querySelector(".enlinea-container");
const enlinea_content = document.querySelector(".enlinea-content");
const enlinea_tittle = document.querySelector(".enlinea-tittle");

const active_enlinea = (count)=>{  if(count){ let number_random = Math.random()*13+14;
                                              let number_round = Math.round(number_random);
                                              enlinea_tittle.innerHTML = `${number_round} personas ingresaron al curso`;

                                              enlinea_container.classList.add("enlinea-container-open");
                                              setTimeout(()=>{ enlinea_content.classList.add("enlinea-content-open");
                                                               setTimeout(()=>{ enlinea_content.classList.remove("enlinea-content-open");
                                                                                setTimeout(()=>{ enlinea_container.classList.remove("enlinea-container-open"); },500);  },4000);  },300);


                                              setTimeout(()=>{  let number_random = Math.random()*13+14;
                                              let number_round = Math.round(number_random);
                                              enlinea_tittle.innerHTML = `${number_round} personas ingresaron al curso`;

                                              enlinea_container.classList.add("enlinea-container-open");
                                              setTimeout(()=>{ enlinea_content.classList.add("enlinea-content-open");
                                                               setTimeout(()=>{ enlinea_content.classList.remove("enlinea-content-open");
                                                                                setTimeout(()=>{ enlinea_container.classList.remove("enlinea-container-open"); },500);  },4000);  },300); },20000);  }  }

