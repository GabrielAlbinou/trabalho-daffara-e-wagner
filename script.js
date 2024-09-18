function cadastro_cl(){
    const no_cl = document.getElementById('name_cl').value;
    const em_cl = document.getElementById('email_cl').value;
    const tel_cl = document.getElementById('phone_cl').value;
    const tpTel_cl = document.getElementById('phoneType_cl').value;
    const end_cl = document.getElementById('address_cl').value;
    const doc_cl = document.getElementById('Doc_cl').value;
    const tpDoc_cl = document.getElementById('tp_doc_cl').value;
    const cod_cl = document.getElementById('codigo_cl').value;
    const est_cl = document.getElementById('estado_cl').value;
    const city_cl = document.getElementById('cidade_cl').value;

    document.getElementById('2').innerText = "nome do gay é: " + no_cl;
    document.getElementById('3').innerText = "email do gay é: " + em_cl;
    document.getElementById('4').innerText = "telefone do gay é: " + tel_cl;
    document.getElementById('5').innerText = "tipo do gay é: " + tpTel_cl;
    document.getElementById('6').innerText = "endereço do gay é: " + end_cl;
    document.getElementById('7').innerText = "documento do gay é: " + doc_cl;
    document.getElementById('8').innerText = "tipo do documento do gay é: " + tpDoc_cl;
    document.getElementById('9').innerText = "codigo do gay é: " + cod_cl;
    document.getElementById('10').innerText = "estado do gay é: " + est_cl;
    document.getElementById('11').innerText = "cidade do gay é: " + city_cl;
}

function cadastro_prod(){
    const desc = document.getElementById('descricao').value;
    const nome = document.getElementById('nome').value;
    const forn = document.getElementById('fornecedor').value;
    const codi = document.getElementById('codigo').value;
    const unid = document.getElementById('unidade').value;
    const data = document.getElementById('data').value;
    const comp = document.getElementById('preco_compra').value;
    const vend = document.getElementById('preco_').value;
    const prod = document.getElementById('descricao').value;
    const fabr = document.getElementById('descricao').value;
    document.getElementById('ds').innerText = desc;
}
