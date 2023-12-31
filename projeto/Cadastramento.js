//importaçoes
import Pessoa from "./Pessoa.js";//class
import readline from 'readline-sync';//modulo
import { ETNIA } from "./enums.js";//enum etnia
import { SEXO } from "./enums.js";//enum sexo

//criando variaveis da class pessoa
let paciente0 = new Pessoa('Weslley', 84368224521, 'Mae', '81 985493221', '19/01/2001', ETNIA.BRANCA, SEXO.MASCULINO, '50247-55', 'weslley3443@bol.com');
let paciente1 = new Pessoa('Vagner', 54353454376, 'Outra mae', '88 938459845', '15/12/2002', ETNIA.PARDA, SEXO.FEMININO, '55896-55', 'algo@hotmail.com', "Rogerio do creo");

//lista de pacientes
let listaPacientes = [];

//alimentando a lista
listaPacientes.push(paciente0);
listaPacientes.push(paciente1);

//variavel para deixar rodando em loop o menu
let loop = true;


while (loop) {
  console.clear();
  console.log("== CADASTRO DE PACIENTE ==");
  console.log("========== MENU ==========");
  console.log("0 - Sair do sistema");
  console.log("1 - Listar todos os pacientes");
  console.log("2 - Cadastrar um novo paciente");
  console.log("3 - Buscar o paciente");
  console.log("4 - Alterar o paciente");
  console.log("5 - Remover o paciente");
  console.log("==========================");
  let opcao = readline.questionInt("Escolha uma opcao: ");
  //switch para as opcoes
  switch (opcao) {
    case 1:
      console.log("Listando todos os pacientes");
      console.log("------------------------");
      listar(listaPacientes);
      console.log("------------------------");
      readline.keyInPause();
      break;
    case 2:
      cadastrar(listaPacientes);
      console.log("Paciente cadastrado com sucesso!");
      readline.keyInPause();
      break;
    case 3:
      buscar(listaPacientes);
      readline.keyInPause();
      break;
    case 4:
      alterar(listaPacientes);
      readline.keyInPause();
      break;
    case 5:
      remover(listaPacientes);
      readline.keyInPause();
      break;
    case 0:
      console.log("Saindo do sistema...");
      loop = false;
      break;
    default:
      console.log("Opção invalida!");
      break;
  }
}

//faz um console.log de todos os objetos da lista
function listar(listaPacientes) {
  let count = 0;
  for (const p of listaPacientes) {
    console.log(`Paciente ${count++}`);
    console.log(p);
  }
}
//cadastra um novo objeto para a lista
function cadastrar(listaPacientes) {
  let nome, nomeS, nomeMae, cpf, tel, dataNasc, etnia, sexo, cep, email
  do {
    try {
      nome = readline.question("Digite o nome do paciente:");
      if (!isNaN(nome)) {
        throw 'Números não são permitidos'
      }
      if (nome.length < 3) {
        throw 'Nome muito pequeno'
      }
    } catch (e) {
      console.log(e + "\n");
    }
  } while (!isNaN(nome) || nome.length < 3);

  let pergunta = readline.question("Tem nome social ?(s/n) ");
  nomeS;
  if (pergunta == "S" || pergunta == "s") {
    nomeS = readline.question("Digite seu nome social: ");
  }

  do {
    try {
      nomeMae = readline.question("Digite o nome da mãe:");
      if (!isNaN(nomeMae)) {
        throw 'Números não são permitidos'
      }
      if (nomeMae.length < 3) {
        throw 'Nome muito pequeno'
      }
    } catch (e) {
      console.log(e + "\n");
    }
  } while (!isNaN(nomeMae) || nomeMae.length < 3);

  do {
    try {
      cpf = readline.questionInt("Digite o cpf:");
      if (isNaN(Number(cpf))) {
        throw 'Letras não são permitidos'
      }
      if (cpf.length != 11) {
        throw 'Tamanho incorreto'
      }
    } catch (e) {
      console.log(e + "\n");
    }
  } while (isNaN(cpf) || cpf.length != 11);

  do {
    try {
      let ddd = readline.question("Digite o ddd do telefone:");
      if (isNaN(ddd)) {
        throw 'Letras não são permitidos'
      }
      let numero = readline.question("Digite o número do telefone:");
      if (isNaN(numero)) {
        throw 'Letras não são permitidos'
      }
      tel = ddd + " " + numero
      if (tel.length != 12) {
        throw 'Número incorreto'
      }
    } catch (e) {
      console.log(e + "\n");
    }
  } while (tel.length != 12);

  do {
    try {
      let dia = readline.question("Digite o dia que nasceu:");
      let mes = readline.question("Digite o mes que nasceu:");
      let ano = readline.question("Digite o ano que nasceu:");
      dataNasc = dia + '/' + mes + '/' + ano;
      if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
        throw 'Letras não são permitidos'
      }
      if (dataNasc.length != 10) {
        throw 'Tamanho incorreto'
      }
    } catch (e) {
      console.log(e + "\n");
    }
  } while (dataNasc.length != 10);
  let opcao = readline.questionInt("Digite a etnia\n1-Amarela\n2-Branca\n3-Preta\n4-Parda\n5-Indigena\n");
  etnia;
  switch (opcao) {
    case 1:
      etnia = ETNIA.AMARELA;
      break;

    case 2:
      etnia = ETNIA.BRANCA;
      break;

    case 3:
      etnia = ETNIA.PRETA;
      break;

    case 4:
      etnia = ETNIA.PARDA;
      break;

    case 5:
      etnia = ETNIA.INDIGENA;
      break;

    default:
      console.log("Valor errado");
      etnia = "Undefined";
      break;
  }
  opcao = readline.questionInt("Digite o sexo\n1-Masculino\n2-Femenino\n3-Outros\n");
  sexo;
  switch (opcao) {
    case 1:
      sexo = SEXO.MASCULINO;
      break;

    case 2:
      sexo = SEXO.FEMININO;
      break;

    case 3:
      sexo = SEXO.OUTROS;
      break;

    default:
      console.log("Valor errado");
      sexo = "Undefined";
      break;
  }

  do {
    try {
      cep = readline.question("Digite o cep(xxxxx-xxx):");

      if (cep.length != 9) {
        throw 'Tamanho incorreto'
      }
    } catch (e) {
      console.log(e + "\n");
    }
  } while (cep.length != 9);
  email = readline.question("Digite o email:");
  let paciente;
  if (pergunta == "S" || pergunta == "s") {
    paciente = new Pessoa(nome, cpf, nomeMae, tel, dataNasc, etnia, sexo, cep, email, nomeS);
  } else {
    paciente = new Pessoa(nome, cpf, nomeMae, tel, dataNasc, etnia, sexo, cep, email);
  }
  listaPacientes.push(paciente);
}

//busca um objeto especifico da lista
function buscar(listaPacientes) {
  let cpfBusca = readline.questionInt(
    "Cpf do paciente que deseja buscar: "
  );
  for (const a of listaPacientes) {
    if (a.cpf == cpfBusca) {
      console.log("Resultado da busca");
      console.log("------------------------");
      console.log(a);
      return;
    }
  }
  console.log("Paciente não existe");
}

//altera um objeto da lista
function alterar(listaPacientes) {
  let cpfBusca = readline.questionInt(
    "Cpf do paciente que deseja alterar: "
  );
  for (const a of listaPacientes) {
    if (a.cpf == cpfBusca) {
      a.setNome = readline.question("Digite o nome do paciente:");
      let pergunta = readline.question("Tem nome social ?(s/n) ");
      if (pergunta == "S" || pergunta == "s") {
        a.setNomeS = readline.question("Digite seu nome social: ");
      }
      if (pergunta == "N" || pergunta == "n") {
        a.setNomeS = "Null";
      }
      a.setNomeMae = readline.question("Digite o nome da mãe:");
      a.setCpf = readline.questionInt("Digite o cpf:");
      a.setTel = readline.question("Digite o telefone:");
      a.setDataNasc = readline.question("Digite a data de nascimento:");
      let opcao = readline.questionInt("Digite a etnia\n1-Amarela\n2-Branca\n3-Preta\n4-Parda\n5-Indigena\n");
      switch (opcao) {
        case 1:
          a.setEtnia = ETNIA.AMARELA;
          break;

        case 2:
          a.setEtnia = ETNIA.BRANCA;
          break;

        case 3:
          a.setEtnia = ETNIA.PRETA;
          break;

        case 4:
          a.setEtnia = ETNIA.PARDA;
          break;

        case 5:
          a.setEtnia = ETNIA.INDIGENA;
          break;

        default:
          console.log("Valor errado");
          a.setEtnia = "Undefined";
          break;
      }
      opcao = readline.questionInt("Digite o sexo\n1-Masculino\n2-Femenino\n3-Outros\n");
      switch (opcao) {
        case 1:
          a.setSexo = SEXO.MASCULINO;
          break;

        case 2:
          a.setSexo = SEXO.FEMININO;
          break;

        case 3:
          a.setSexo = SEXO.OUTROS;
          break;

        default:
          console.log("Valor errado");
          a.setSexo("Undefined");
          break;
      }
      a.setCep = readline.question("Digite o cep:");
      a.setEmail = readline.question("Digite o email:");
      console.log("paciente alterado com sucesso!");
      return;
    }
  }
  console.log("Paciente não existe");
}

//remove 1 paciente da lista
function remover(listaPacientes) {
  let cpfBusca = readline.questionInt(
    "Cpf do paciente que deseja excluir: "
  );
  for (const a of listaPacientes) {
    if (a.cpf === cpfBusca) {
      console.log(`Excluido paciente ${a.nome} do sistema..."`);
      listaPacientes.splice(a, 1);
      console.log("paciente excluído com sucesso!");
      return;
    }
  }
  console.log("Esse paciente nao existe");
}