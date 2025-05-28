let tarefas = []; //cria um array vazio para armazenar as tarefas
function adicionarTarefa() {
  //recbe o valor do input do usuáio
  const inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();

  const mensagem = document.getElementById("mensagem");
  //se o valor do input for vazio, mostra mensagem de erro para o usuário
  if (tarefa == "") {
    let mensagemErro = "Por favor, digite uma tarefa!";
    mensagem.textContent = mensagemErro;
    mensagem.style.color = "red"; // Define a cor da mensagem de erro como vermelho
  } else {
    //se o valor do input não for vazio, mostra mensagem de sucesso para o usuário
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemSucesso;
    mensagem.style.color = "green"; // Define a cor da mensagem de sucesso como verde

    tarefas.push(tarefa); //adiciona a tarefa no array de tarefas
    renderizarTarefas(); //chama a função para renderizar as tarefas na tela
  }

  // Limpa o campo de entrada após adicionar a tarefa
  inputTarefa.value = "";
}
function renderizarTarefas() {
  //cria novo item (li) e coloca na lista (ul)
  const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = ""; //limpa a lista antes de renderizar novamente

  for (let i = 0; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li");

    // Cria um span para o texto da tarefa
    let textoTarefa = document.createElement("span");
    textoTarefa.textContent = tarefas[i];
    novaTarefa.appendChild(textoTarefa);

    let botaoRemover = document.createElement("button");
    botaoRemover.className = "remover";
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => removerTarefa(i);

    let botaoEditar = document.createElement("button");
    botaoEditar.className = "editar";
    botaoEditar.textContent = "Editar tarefa";
    botaoEditar.onclick = () => editarTarefa(i);

    novaTarefa.appendChild(botaoRemover);
    novaTarefa.appendChild(botaoEditar);
    listaTarefas.appendChild(novaTarefa);
  }
}

function removerTarefa(i) {
  tarefas.splice(i, 1);
  renderizarTarefas();
}
function editarTarefa(i) {
  let tarefaEditada = prompt("Digite a nova tarefa:", tarefas[i]);
  // Verifica se o usuário inseriu algum valor e não cancelou o prompt
  if (tarefaEditada !== null && tarefaEditada.trim() !== "") {
    tarefas[i] = tarefaEditada.trim(); // Atualiza a tarefa no array, removendo espaços extras
    renderizarTarefas(); // Re-renderiza a lista de tarefas
  } else if (tarefaEditada !== null && tarefaEditada.trim() === "") {
    // Opcional: Informar ao usuário que a tarefa não pode ser vazia
    alert("A tarefa não pode ser vazia.");
  }
}

function limparTarefas() {
  const mensagem = document.getElementById("mensagem");
  if (tarefas.length === 0) {
    mensagem.textContent = "Não há tarefas para remover!"; //mostra mensagem de erro para o usuário
    mensagem.style.color = "red"; // Define a cor da mensagem de erro como vermelho
  } else {
    tarefas = []; //limpa o array de tarefas
    renderizarTarefas(); //chama a função para renderizar as tarefas na tela (agora vazia)
    mensagem.textContent = "Todas as tarefas foram removidas!"; //mostra mensagem de sucesso para o usuário
    mensagem.style.color = "green"; // Define a cor da mensagem de sucesso como verde
  }
}
