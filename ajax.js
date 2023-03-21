//console.log("correcto");

document.querySelector("#botton").addEventListener("click", traerDatos());

function traerDatos() {
  //console.log("dentro de la function");

  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://randomuser.me/api/", true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(this.responseText);

      let datos = JSON.parse(this.responseText);
      console.log(datos.results);

      let title = document.querySelector("#title");
      title.innerHTML = "";
      let contenido = document.querySelector("#contenido");
      contenido.innerHTML = "";
      let propiedadesDos = document.querySelector("#propiedadesDos");
      contenido.innerHTML = "";
      let img = document.querySelector("#img");
      contenido.innerHTML = "";

      //const obj = { info: "info", results: "results" };
      for (let item of datos.results) {
        //console.log(item.email);
        title.innerHTML += `
        <h2>${item.name.first} ${item.name.last} </h2>
        `;
        contenido.innerHTML += `
        <div> Edad: ${item.dob.age} <br /> Fecha de Nacimiento: 2000 <br /> Genero: ${item.gender}  </div>
        `;
        propiedadesDos.innerHTML += `
        <p> Cel: ${item.cell} <br /> Email: ${item.email} <br/> Direccion: ${item.location.street.name} ${item.location.street.number} - ${item.location.city}, ${item.location.country} </p>
        `;
        img.innerHTML += `
        <img src="${item.picture.large}" alt="Foto de Perfil" id="img"> </img>
        `;
      }
    }
  };
}

function mostrar(objeto) {
    let dato=document.getElementById(objeto).style.display;
    if(dato=="none"){
      document.getElementById(objeto).style.display = "block";
    }else{
      document.getElementById(objeto).style.display = "none";
    }   
}



