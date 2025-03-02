let amigos = []

function agregarAmigo() {
  let inputAmigo = document.getElementById('amigo');
  let amigo = inputAmigo.value;
  console.log(amigo);
  if (amigo == "") {
    alert("Por favor, inserte un nombre");
    return;
  }
  else {
    amigos.push(amigo);
    console.log(amigos);
    console.log(amigos.length);
    inputAmigo.value = "";
    inputAmigo.focus();
    actualizarLista();
  };
};

function actualizarLista() {
  let lista =  document.getElementById('listaAmigos');
  lista.innerHTML = "";

  for(const amigo of amigos){
  console.log(amigo);
  var li = document.createElement("li");
  li.innerText=amigo;
  lista.appendChild(li);
  };
};

function sortearAmigo() {
  if (amigos.length != 0 ) {
  let indice = Math.floor(Math.random() * amigos.length);
  console.log(indice);
  let amigoSecreto = amigos[indice];
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `¡Felicitaciones! el amigo secreto es: ${amigoSecreto}`;
  };
}; 

function reiniciar() {
  amigos = [];
  document.getElementById('listaAmigos').innerHTML = "";
  document.getElementById('resultado').innerHTML = "";
  document.getElementById('amigo').value = ""; 
  document.getElementById('amigo').focus(); 
}



