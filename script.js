function cadastro_cl() {
    const na_cl = document.getElementById('name_cl').value;
    const email_cl = document.getElementById('email_cl').value;
    const phone_cl = document.getElementById('phone_cl').value;
    const phoneType_cl = document.getElementById('phoneType_cl').value;
    const address_cl = document.getElementById('address_cl').value;
    const Doc_cl = document.getElementById('Doc_cl').value;
    const tp_doc_cl = document.getElementById('tp_doc_cl').value;
    const codigo_cl = document.getElementById('codigo_cl').value;
    const estado_cl = document.getElementById('estado_cl').value;
    const cidade_cl = document.getElementById('cidade_cl').value;

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
    const qnt_prod = document.getElementById('quantidade').value;
    const cod_fabr = document.getElementById('codigo_fabricante').value;
}

function cadastro_fornecedor() {
    const nc = document.getElementById('nome_completo').value;
    const cnpj = document.getElementById('cnpj').value;
    const fabr = document.getElementById('fabricante').value;
    const end = document.getElementById('endereco').value;
}

function gerarIdFuncionario() {
    return Math.floor(Math.random() * 10000); // Gera um ID aleatório entre 0 e 9999
}

function cadastro_funcionario() {
    const func_id = document.getElementById('id_funcionario').value;
    const func_nm = document.getElementById('nome').value;
    const func_cpf = document.getElementById('cpf').value;
    const func_nasc = document.getElementById('data_nascimento').value;
    const func_muni = document.getElementById('municipio').value;
    const func_uf = document.getElementById('uf').value;
    const func_end = document.getElementById('endereco').value;
    const func_cep = document.getElementById('cep').value;
    const func_sex = document.getElementById('sexo').value;
    const func_pes = document.getElementById('peso').value;
    const func_grau = document.getElementById('grau_instrucao').value;
    const func_pis = document.getElementById('pis_pasep').value;
    const func_data_ad = document.getElementById('data_admissao').value;
    const func_cart = document.getElementById('carteira_trabalho').value;
    const func_serie = document.getElementById('serie').value;
    const func_set = document.getElementById('setor').value;
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('id_funcionario').value = gerarIdFuncionario();
});

function cadastro_quarto() {
    const num_q = document.getElementById('numero_quarto').value;
    const tp_quarto = document.getElementById('tipo_quarto').value;
}

function cadastro_servico() {
    const nm_ser = document.getElementById('nome_servico').value;
    const qnt_ser = document.getElementById('quantidade').value;
    const tp_ser = document.getElementById('tipo_servico').value;
    const id_ser = document.getElementById('id_quarto').value;
}

function gerarIdQuarto() {
    return Math.floor(Math.random() * 10000); // Gera um ID aleatório entre 0 e 9999
}

function cadastro_tipo_quarto() {
    const id_quarto = document.getElementById('id_quarto').value;
    const tp_qto = document.getElementById('tipo_quarto').value;
    const cara_quarto = document.getElementById('caracteristicas').value;
    const equi_quarto = document.getElementById('equipamentos').value;
    const qnt_itens = document.getElementById('quantidade_itens').value;
    const desc_quarto = document.getElementById('descricao').value;
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('id_quarto').value = gerarIdQuarto();
});
