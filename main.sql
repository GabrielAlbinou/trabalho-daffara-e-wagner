create table cliente(
  id int primary key AUTOINCREMENT,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  tipo_telefone TEXT NOT NULL,
  endereco TEXT NOT NULL,
  documento TEXT NOT NULL,
  tipo_documento TEXT NOT NULL,
  codigo_cliente TEXT NOT NULL,
  estado TEXT,
  cidade TEXT
);

create table quarto(
  numero INT primary key,
  tipo_quarto_id INT NOT NULL,
  foreign key(tipo_quarto_id) references tipo_quarto(id)
);
create table tipo_quarto(
  tipo_quarto_id INT primary key autoincrement,
  tipo_quarto TEXT NOT NULL,
  caracteristicas TEXT NOT NULL,
  equipamentos TEXT NOT NULL,
  quant_itens INT NOT NULL,
  descrição TEXT NOT NULL
);
create table funcionarios(
  id INT primary key autoincrement,
  nome TEXT NOT NULL,
  cpf TEXT NOT NULL,
  data_nasc DATE NOT NULL,
  municipio TEXT NOT NULL,
  uf TEXT NOT NULL,
  endereço TEXT NOT NULL,
  cep TEXT NOT NULL,
  sexo TEXT NOT NULL,
  grau_instrução TEXT NOT NULL,
  pis/pasep TEXT NOT NULL,
  data_adm date NOT NULL,
  Cart_trabalho TEXT NOT NULL,
  serie TEXT NOT NULL,
  setor TEXT NOT NULL
);

create table fornecedor(
  id INT primary key autoincrement,
  nome_completo TEXT NOT NULL,
  cnpj TEXT NOT NULL,
  fabricante TEXT NOT,
  endereço TEXT NOT NULL
  );

create table servico(
  id INT primary key autoincrement,
  nome_servico TEXT NOT NULL,
  quantidade INT NOT NULL,
  tipo_servico TEXT NOT NULL,
  quarto_id INT NOT NULL,
  FOREIGN KEY (quarto_id) REFERENCES quarto(numero)
);

create table produto(
  id INT primary key autoincrement,
  descricao TEXT NOT NULL,
  nome_produto TEXT NOT NULL,
  fornecedor INT NOT NULL,
  codigo_produto TEXT NOT NULL,
  unidade_medida TEXT NOT NULL,
  data_entrega DATE NOT NULL,
  preco_compra REAL(10,2) NOT NULL,
  preco_venda REAL(10,2) NOT NULL,
  quantidade INT NOT NULL,
  codigo_fabricante TEXT NOT NULL,
  FOREIGN KEY (fornecedor) REFERENCES fornecedor(id)
);
