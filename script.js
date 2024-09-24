function cadastro_cl() {
    document.getElementById('name_result').innerText = document.getElementById('name_cl').value;
    document.getElementById('email_result').innerText = document.getElementById('email_cl').value;
    document.getElementById('phone_result').innerText = document.getElementById('phone_cl').value;
    document.getElementById('phoneType_result').innerText = document.getElementById('phoneType_cl').value;
    document.getElementById('address_result').innerText = document.getElementById('address_cl').value;
    document.getElementById('Doc_result').innerText = document.getElementById('Doc_cl').value;
    document.getElementById('tp_doc_result').innerText = document.getElementById('tp_doc_cl').value;
    document.getElementById('codigo_result').innerText = document.getElementById('codigo_cl').value;
    document.getElementById('estado_result').innerText = document.getElementById('estado_cl').value;
    document.getElementById('cidade_result').innerText = document.getElementById('cidade_cl').value;
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

function cadastro_fornecedor() {
    document.getElementById('nc').innerText = document.getElementById('nome_completo').value;
    document.getElementById('cnpj_span').innerText = document.getElementById('cnpj').value;
    document.getElementById('fab').innerText = document.getElementById('fabricante').value;
    document.getElementById('end').innerText = document.getElementById('endereco').value;
}

function gerarIdFuncionario() {
    return Math.floor(Math.random() * 10000); // Gera um ID aleatório entre 0 e 9999
}

function cadastro_funcionario() {
    document.getElementById('idf').innerText = document.getElementById('id_funcionario').value;
    document.getElementById('nome_span').innerText = document.getElementById('nome').value;
    document.getElementById('cpf_span').innerText = document.getElementById('cpf').value;
    document.getElementById('dn').innerText = document.getElementById('data_nascimento').value;
    document.getElementById('mun').innerText = document.getElementById('municipio').value;
    document.getElementById('uf_span').innerText = document.getElementById('uf').value;
    document.getElementById('end').innerText = document.getElementById('endereco').value;
    document.getElementById('cep_span').innerText = document.getElementById('cep').value;
    document.getElementById('sexo_span').innerText = document.getElementById('sexo').value;
    document.getElementById('peso_span').innerText = document.getElementById('peso').value;
    document.getElementById('gi').innerText = document.getElementById('grau_instrucao').value;
    document.getElementById('pp').innerText = document.getElementById('pis_pasep').value;
    document.getElementById('da').innerText = document.getElementById('data_admissao').value;
    document.getElementById('ct').innerText = document.getElementById('carteira_trabalho').value;
    document.getElementById('serie_span').innerText = document.getElementById('serie').value;
    document.getElementById('setor_span').innerText = document.getElementById('setor').value;
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('id_funcionario').value = gerarIdFuncionario();
});

function cadastro_quarto() {
    document.getElementById('nq').innerText = document.getElementById('numero_quarto').value;
    document.getElementById('tq').innerText = document.getElementById('tipo_quarto').value;
}

function cadastro_servico() {
    document.getElementById('ns').innerText = document.getElementById('nome_servico').value;
    document.getElementById('qt').innerText = document.getElementById('quantidade').value;
    document.getElementById('ts').innerText = document.getElementById('tipo_servico').value;
    document.getElementById('idq').innerText = document.getElementById('id_quarto').value;
}

function gerarIdQuarto() {
    return Math.floor(Math.random() * 10000); // Gera um ID aleatório entre 0 e 9999
}

function cadastro_tipo_quarto() {
    document.getElementById('idq').innerText = document.getElementById('id_quarto').value;
    document.getElementById('tq').innerText = document.getElementById('tipo_quarto').value;
    document.getElementById('car').innerText = document.getElementById('caracteristicas').value;
    document.getElementById('equip').innerText = document.getElementById('equipamentos').value;
    document.getElementById('qi').innerText = document.getElementById('quantidade_itens').value;
    document.getElementById('desc').innerText = document.getElementById('descricao').value;
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('id_quarto').value = gerarIdQuarto();
});
