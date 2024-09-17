function cadastro_cl(){
    const no_cl = document.getElementById('name').value;
    document.getElementById('nome').style.color='red';
    document.getElementById('nome').innerText = no_cl;
}