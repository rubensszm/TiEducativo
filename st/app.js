

document.body.innerHTML = '<div id="left-container" style="width: 350px; height: auto; float: left; padding:20px; "></div><div style="width: 270px; height: 1000px; float: left; padding:20px; padding-top: 40px;"><p class="EtiquetaCategoria" style="padding-top: 150px;">Engenharia</p><p class="EtiquetaCategoria">Ger. Projetos</p><p class="EtiquetaCategoria">Ger. Processos</p><p class="EtiquetaCategoria">Suporte</p></div><div id="right-container" style="width: 1275px; height: 1000px; float: left; padding:20px; padding-top: 40px;"><p class="EtiquetaNivel">Nível 2</p><p class="EtiquetaNivel">Nível 3</p><p class="EtiquetaNivel">Nível 4</p><p class="EtiquetaNivel">Nível 5</p></div>';

var node = document.createElement("div");
node.id = "grupo20";
node.className += "list-group dragdrop-target";
node.style.cssText += "width: 300px; height: auto; background-color: lightgray; padding: 10px; margin: 15px; border: 1px solid whitesmoke; border-radius: 4px;";
document.getElementById("left-container").appendChild(node); 

var arrayGrupoText = ["Nível 2", "Nível 3", "Nível 4", "Nível 5"];

for (let index = 0; index < 16; index++) {
	var node = document.createElement("div");
	node.id = "grupo" + index;
	node.className += "list-group GrupoProcesso dragdrop-target";
	document.getElementById("right-container").appendChild(node); 
}

var arrayItemText = ["Gerenciamento de requisitos", "Planejamento do projeto", "Controle e monitoramento do projeto", "Contratação e gestão de fornecedores", "Medição e análise",
"Garantia de qualidade de processo e produto", "Gerenciamento de configuração", "Desenvolvimento de requisitos", "Solução técnica", "Integração do produto",
"Verificação", "Validação", "Gerenciamento integrado do projeto", "Gerenciamento de riscos", "Foco no processo organizacional",
"Definição do processo organizacional", "Treinamento organizacional", "Análise de decisão e resolução", "Gerenciamento quantitativo do projeto", "Desempenho do processo organizacional",
"Inovação e implantação organizacional", "Análise e resolução de causas"];

shuffle(arrayItemText);

for (let index = 0; index < 22; index++) {
	var nodeItem = document.createElement("div");
	nodeItem.id = "item" + index;
	nodeItem.className += "list-group-item ItemProcesso dragdrop";
	nodeItem.innerText = arrayItemText[index];
	document.getElementById("grupo20").appendChild(nodeItem);
}

var grupo0 = document.getElementById('grupo0'), grupo1 = document.getElementById('grupo1'), grupo2 = document.getElementById('grupo2'), grupo3 = document.getElementById('grupo3'),
grupo4 = document.getElementById('grupo4'), grupo5 = document.getElementById('grupo5'), grupo6 = document.getElementById('grupo6'), grupo7 = document.getElementById('grupo7'), 
grupo8 = document.getElementById('grupo8'), grupo9 = document.getElementById('grupo9'), grupo10 = document.getElementById('grupo10'), grupo11 = document.getElementById('grupo11'), 
grupo12 = document.getElementById('grupo12'), grupo13 = document.getElementById('grupo13'), grupo14 = document.getElementById('grupo14'), grupo15 = document.getElementById('grupo15'),
grupo20 = document.getElementById("grupo20");

new Sortable(grupo20, {
	group: 'shared',
	animation: 200
});


new Sortable(grupo0, {
	group: 'shared',
	animation: 200,
	draggable: '',
	onAdd: function(evt) {
		if (evt.item.innerText !== "Gerenciamento de requisitos") {
			HandleAddedItem(evt);
		}
	}
});

new Sortable(grupo1, {
	group: 'shared',
	animation: 200,
	draggable: '',
	onAdd: function(evt) {
		if (evt.item.innerText !== "Desenvolvimento de requisitos"
		&& evt.item.innerText !== "Solução técnica"
		&& evt.item.innerText !== "Integração do produto"
		&& evt.item.innerText !== "Verificação"
		&& evt.item.innerText !=="Validação") {
			HandleAddedItem(evt);
		}
	}
});

new Sortable(grupo2, {
	group: 'shared',
	animation: 200,
	draggable: '',
	onAdd: function(evt) {
		HandleAddedItem(evt);
	}
});

new Sortable(grupo3, {
	group: 'shared',
	animation: 200,
	draggable: '',
	onAdd: function(evt) {
		HandleAddedItem(evt);
	}
});

new Sortable(grupo4, {
	group: 'shared',
	animation: 200,
	draggable: '',
	onAdd: function(evt) {
		if (evt.item.innerText !== "Planejamento do projeto"
		&& evt.item.innerText !== "Controle e monitoramento do projeto"
		&& evt.item.innerText !== "Contratação e gestão de fornecedores") {
			HandleAddedItem(evt);
		}
	}
});

new Sortable(grupo5, {
	group: 'shared',
	animation: 200,
	draggable: '',
	onAdd: function(evt) {
		if (evt.item.innerText !== "Gerenciamento integrado do projeto"
		&& evt.item.innerText !== "Gerenciamento de riscos") {
			HandleAddedItem(evt);
		}
	}
});

new Sortable(grupo6, {
	group: 'shared',
	animation: 200,
	draggable: '',
	onAdd: function(evt) {
		if (evt.item.innerText !== "Gerenciamento quantitativo do projeto") {
			HandleAddedItem(evt);
		}
	}
});

new Sortable(grupo7, {
	group: 'shared',
	animation: 200,
	draggable: '',
	onAdd: function(evt) {
		HandleAddedItem(evt);
	}
});

new Sortable(grupo8, {
	group: 'shared',
	animation: 200,
	draggable: '',
	onAdd: function(evt) {
		HandleAddedItem(evt);
	}
});

new Sortable(grupo9, {
	group: 'shared',
	animation: 200,
	draggable: '',
	onAdd: function(evt) {
		if (evt.item.innerText !== "Foco no processo organizacional"
		&& evt.item.innerText !== "Definição do processo organizacional"
		&& evt.item.innerText !== "Treinamento organizacional") {
			HandleAddedItem(evt);
		}
	}
});

new Sortable(grupo10, {
	group: 'shared',
	animation: 200,
	draggable: '',
	onAdd: function(evt) {
		if (evt.item.innerText !== "Desempenho do processo organizacional") {
			HandleAddedItem(evt);
		}
	}
});

new Sortable(grupo11, {
	group: 'shared',
	animation: 200,
	draggable: '',
	onAdd: function(evt) {
		if (evt.item.innerText !== "Inovação e implantação organizacional") {
			HandleAddedItem(evt);
		}
	}
});

new Sortable(grupo12, {
	group: 'shared',
	animation: 200,
	draggable: '',
	onAdd: function(evt) {
		if (evt.item.innerText !== "Medição e análise"
		&& evt.item.innerText !== "Garantia de qualidade de processo e produto"
		&& evt.item.innerText !== "Gerenciamento de configuração") {
			HandleAddedItem(evt);
		}
	}
});

new Sortable(grupo13, {
	group: 'shared',
	animation: 200,
	draggable: '',
	onAdd: function(evt) {
		if (evt.item.innerText !== "Análise de decisão e resolução") {
			grupo20.appendChild(evt.item);
		}
	}
});

new Sortable(grupo14, {
	group: 'shared',
	animation: 200,
	draggable: '',
	onAdd: function(evt) {
		HandleAddedItem(evt);
	}
});


new Sortable(grupo15, {
	group: 'shared',
	animation: 200,
	draggable: '',
	onAdd: function(evt) {
		if (evt.item.innerText !== "Análise e resolução de causas") {
			HandleAddedItem(evt);
		}
	}
});

function HandleAddedItem(evt) {
	if (grupo20.firstChild != null) {
		grupo20.insertBefore(evt.item, grupo20.childNodes[evt.oldIndex]);
	} else{
		grupo20.appendChild(evt.item);
	}
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	
	return array;
}
