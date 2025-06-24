alert("bienvenido a mi página web");


const boton = document.createElement("button");
boton.textContent = "Volver arriba";
boton.style.position = "fixed";
boton.style.bottom = "20px";
boton.style.right = "20px";
boton.style.padding = "10px";
boton.style.background = "#4C7FB2";
boton.style.color = "white";
boton.style.border = "none";
boton.style.borderRadius = "5px";
boton.style.cursor = "pointer";


boton.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


document.body.appendChild(boton);
