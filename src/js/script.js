function inserir(){
    let numero = document.getElementById("posicao").value;
    let novo = document.getElementById("novo").value;
    document.getElementsByClassName("time")[numero].innerHTML = novo;
}