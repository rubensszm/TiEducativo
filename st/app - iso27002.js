

/*
TODO: 
Tooltip sendo bloqueado pela nav
Todos os controles
Shuffle
Design responsivo
*/


/*
DONE: 
Matriz de grupos
Matriz de objetivos
Matriz de controles
Tooltip pra cada objetivo e controle
Transição para tooltip
Div de grupo cresce automaticamente
Todos os objetivos
Footer
Layout do body
Box-shadow
Melhorar fonte
Navbar
 */


var leftContainer = document.createElement("div");
leftContainer.id = "left-container";
leftContainer.style.cssText = "width: 350px; height: 500px; float: left; padding:20px;";
document.getElementById("body").appendChild(leftContainer);

var rightContainer = document.createElement("div");
rightContainer.id = "right-container";
rightContainer.style.cssText = "width: 1500px; height: 2000px; float: left; padding:20px 20px 20px 20px;";
document.getElementById("body").appendChild(rightContainer);


var nodeName = document.createElement("h1");
nodeName.innerText = "Controles";
nodeName.style.cssText += "overflow: hidden; height: 2.4em;";

var node = document.createElement("div");
node.id = "grupo20";
node.className += "list-group shadow";
node.style.cssText += "width: 300px; height: auto; background-color: white; padding: 5px; margin: 15px; border: 1px solid whitesmoke; border-radius: 4px;";

var controles = document.createElement("div");
controles.style.cssText = "margin-top: 40px;";
controles.appendChild(nodeName);
controles.appendChild(node);
document.getElementById("left-container").appendChild(controles); 

var grupo20 = document.getElementById("grupo20");

new Sortable(grupo20, {
	group: 'nested',
	animation: 200,
	// fallbackOnBody: true,
	// swapThreshold: 1
});

var arrayGrupoText = [
	"5 Políticas de segurança da informação", 
	"6 Organização da segurança da informação",
	"7 Segurança em recursos humanos", 
	"8 Gestão de ativos",
	// "9 Controle de acesso", 
	// "10 Criptografia", 
	// "11 Segurança física e do ambiente", 
	// "12 Segurança nas operações", 
	// "13 Segurança nas comunicações", 
	// "14 Aquisição, desenvolvimento e manutenção de sistemas", 
	// "15 Relacionamento na cadeia de suprimento", 
	// "16 Gestão de incidentes de segurança da informação", 
	// "17 Aspectos da segurança da informação na gestão da continuidade do negócio", 
	// "18 Conformidade"
];

for (let index = 0; index < arrayGrupoText.length; index++) {
	var div = document.createElement("div");
	div.style.cssText += "padding-right: 10px; float: left; font-size: 18px; width: 365px; height: auto; margin-top: 50px;";
	
	var par = document.createElement("h1");
	par.textContent = arrayGrupoText[index];
	par.style.cssText += "overflow: hidden; height: 2.4em;";
	div.appendChild(par);
	
	var node = document.createElement("div");
	node.id = "grupo" + index;
	node.className += "list-group GrupoProcesso shadow";
	div.appendChild(node); 
	
	document.getElementById("right-container").appendChild(div); 
	
	new Sortable(node, {
		group: 'shared',
		animation: 200,
		draggable: '',
		// sort: false,
		// emptyInsertThreshold: 20,
	});
}

var arrayItemText = [
	[
		"5.1 Orientação da direção para segurança da informação"
	], 
	[
		"6.1 Organização interna", 
		"6.2 Dispositivos móveis e trabalho remoto"
	],
	[
		"7.1 Antes da contratação", 
		"7.2 Durante a contratação", 
		"7.3 Encerramento e mudança da contratação"
	], 
	[
		"8.1 Responsabilidade pelos ativos", 
		"8.2 Classificação da informação", 
		"8.3 Tratamento de mídias"
	], 
	// ["9.1 Requisitos do negócio para controle de acesso", "9.2 Gerenciamento de acesso do usuário", "9.3 Responsabilidades dos usuários", "9.4 Controle de acesso ao sistema e à aplicação"], 
	// ["10.1 Controles criptográficos"], 
	// ["11.1 Áreas seguras", "11.2 Equipamentos"], 
	// ["12.1 Responsabilidades e procedimentos operacionais", "12.2 Proteção contra códigos maliciosos", "12.3 Cópias de segurança", "12.4 Registros e monitoramento", "12.5 Controle de software operacional", "12.6 Gestão de vulnerabilidades técnicas", "12.7 Considerações quanto à auditoria de sistemas de informação"],
	// ["13.1 Gerenciamento da segurança em redes", "13.2 Transferência de informação"],
	// ["14.1 Requisitos de segurança de sistemas de informação", "14.2 Segurança em processos de desenvolvimento e de suporte", "14.3 Dados para teste"], 
	// ["15.1 Segurança da informação na cadeia de suprimento", "15.2 Gerenciamento da entrega do serviço do fornecedor"], 
	// ["16.1 Gestão de incidentes de segurança da informação e melhorias"],
	// ["17.1 Continuidade da segurança da informação", "17.2 Redundâncias"],
	// ["18.1 Conformidade com requisitos legais e contratuais", "18.2 Análise crítica da segurança da informação"]
];

var arrayItemTooltip = [
	[ // 5
		"Objetivo: Prover uma orientação e apoio da direção para a segurança da informação, de acordo com os requisitos do negócio e com as leis e regulamentações relevantes."
	],
	[ // 6
		"Objetivo: Estabelecer uma estrutura de gerenciamento, para iniciar e controlar a implementação da	segurança da informação dentro da organização.", 
		"Objetivo: Garantir a segurança das informações no trabalho remoto e no uso de dispositivos móveis."
	],
	[ // 7
		"Objetivo: Assegurar que funcionários e partes externas entendam suas responsabilidades e estejam em conformidade com os papéis para os quais eles foram selecionados.", 
		"Objetivo: Assegurar que os funcionários e partes externas estão conscientes e cumprem as suas responsabilidades pela segurança da informação.", 
		"Objetivo: Proteger os interesses da organização como parte do processo de mudança ou encerramento da contratação."
	],
	[ // 8
		"Objetivo: Identificar os ativos da organização e definir as responsabilidades apropriadas para a proteção dos ativos.", 
		"Objetivo: Assegurar que a informação receba um nível adequado de proteção, de acordo com a sua	importância para a organização.", 
		"Objetivo: Prevenir a divulgação não autorizada, modificação, remoção ou destruição da informação armazenada nas mídias."
	],
	// ["", "", "", ""],
	// [""],
	// ["", ""],
	// ["", "", "", "", "", "", ""],
	// ["", ""],
	// ["", "", ""],
	// ["", ""],
	// [""],
	// ["", ""],
	// ["", ""]
];

var arraySubitemText = [
	[ // 5
		[
			"Políticas para segurança da informação", 
			"Análise crítica das políticas para segurança da informação"
		]
	],
	[ // 6
		[ // 6.1
			"Responsabilidades e papéis pela segurança da informação", 
			"Segregação de funções", 
			"Contato com autoridades", 
			"Contato com grupos especiais",
			"Segurança da informação no gerenciamento de projetos"
		], 
		[ // 6.2
			"Política para o uso de dispositivo móvel", 
			"Trabalho remoto"
		]
	],
	[ // 7
		[ // 7.1
			"Seleção", 
			"Termos e condições de contratação"
		], 
		[ // 7.2
			"Responsabilidades da direção", 
			"Conscientização, educação e treinamento em segurança da informação",
			"Processo disciplinar"
		], 
		[ // 7.3
			"Responsabilidades pelo encerramento ou mudança da contratação"
		]
	],
	[ // 8
		[ // 8.1
			"Inventário dos ativos", 
			"Proprietário dos ativos",
			"Uso aceitável dos ativos",
			"Devolução de ativos"
		], 
		[ // 8.2
			"Classificação da informação", 
			"Rótulos e tratamento da informação",
			"Tratamento dos ativos"
		], 
		[ // 8.3
			"Gerenciamento de mídias removíveis", 
			"Descarte de mídias",
			"Transferência física de mídias"
		]
	],
	//[["Política de controle de acesso", "Acesso às redes e aos serviços de rede"], ["Registro e cancelamento de usuário", "Provisionamento para acesso de usuário"], ["Uso da informação de autenticação secreta"], ["", ""]]
];

var arraySubitemTooltip = [
	[ // 5
		[ // 5.1
			"Controle: Convém que um conjunto de políticas de segurança da informação seja definido, aprovado pela direção,	publicado e comunicado para todos os funcionários e partes externas relevantes.", 
			"Controle: Convém que as políticas para a segurança da informação sejam analisadas criticamente a intervalos planejados ou quando mudanças significativas ocorrerem, para assegurar a sua contínua pertinência, adequação e eficácia."
		]
	],
	[ // 6
		[ // 6.1
			"Controle: Convém que todas as responsabilidades pela segurança da informação sejam definidas e atribuídas.",
			"Controle: Convém que funções conflitantes e áreas de responsabilidade sejam segregadas para reduzir as oportunidades de modificação não autorizada ou não intencional, ou uso indevido dos ativos da organização.", 
			"Controle: Convém que contatos apropriados com autoridades relevantes sejam mantidos.",
			"Controle: Convém que contatos apropriados com grupos especiais, associações profissionais ou outros fóruns	especializados em segurança da informação sejam mantidos.",
			"Controle: Convém que a segurança da informação seja considerada no gerenciamento de projetos, independentemente do tipo do projeto."
		], 
		[ // 6.2
			"Controle: Convém que uma política e medidas que apoiam a segurança da informação seja adotada para	gerenciar os riscos decorrentes do uso de dispositivos móveis.", 
			"Controle: Convém que uma política e medidas que apoiam a segurança da informação sejam implementadas para proteger as informações acessadas, processadas ou armazenadas em locais de trabalho remoto"
		]
	],
	[ // 7
		[ // 7.1
			"Controle: Convém que verificações do histórico sejam realizadas para todos os candidatos a emprego, de acordo com a ética, regulamentações e leis relevantes, e seja proporcional aos requisitos do negócio, aos riscos percebidos e à classificação das informações a serem acessadas.", 
			"Controle: Convém que as obrigações contratuais com funcionários e partes externas, declarem as suas responsabilidades e a da organização para a segurança da informação."
		], 
		[ // 7.2
			"Controle: Convém que a Direção solicite a todos os funcionários e partes externas que pratiquem a segurança da	informação de acordo com o estabelecido nas políticas e procedimentos da organização.", 
			"Controle: Convém que todos os funcionários da organização e, onde pertinente, partes externas devem recebam treinamento, educação e conscientização apropriados, e as atualizações regulares das políticas e procedimentos organizacionais relevantes para as suas funções.",
			"Controle: Convém que exista um processo disciplinar formal, implantado e comunicado, para tomar ações contra funcionários que tenham cometido uma violação de segurança da informação."
		], 
		[ // 7.3
			"Controle: Convém que as responsabilidades e obrigações pela segurança da informação que permaneçam	válidas após um encerramento ou mudança da contratação, sejam definidas, comunicadas aos funcionários ou partes externas e sejam cumpridas."
		]
	],
	[ // 8
		[ // 8.1
			"Controle: Convém que os ativos associados com informação e com os recursos de processamento da informação sejam identificados e um inventário destes ativos seja estruturado e mantido.", 
			"Controle: Convém que os ativos mantidos no inventário tenham um proprietário.",
			"Controle: Convém que regras para o uso aceitável das informações, dos ativos associados com a informação e dos recursos de processamento da informação, sejam identificadas, documentadas e implementadas.",
			"Controle: Convém que todos os funcionários e partes externas devolvam todos os ativos da organização que estejam em sua posse, após o encerramento de suas atividades, do contrato ou acordo."
		], 
		[ // 8.2
			"Controle: Convém que a informação seja classificada em termos do seu valor, requisitos legais, sensibilidade e	criticidade para evitar modificação ou divulgação não autorizada.", 
			"Controle: Convém que um conjunto apropriado de procedimentos para rotular e tratar a informação seja desenvolvido e implementado de acordo com o esquema de classificação da informação adotado pela organização.",
			"Controle: Convém que procedimentos para o tratamento dos ativos sejam desenvolvidos e implementados de	acordo com o esquema de classificação da informação adotada pela organização."
		], 
		[ // 8.3
			"Controle: Convém que existam procedimentos implementados para o gerenciamento de mídias removíveis, de acordo com o esquema de classificação adotado pela organização.", 
			"Controle: Convém que as mídias sejam descartadas de forma segura, quando não forem mais necessárias, por meio de procedimentos formais.",
			"Controle: Convém que mídias contendo informações sejam protegidas contra acesso não autorizado, uso impróprio ou corrupção, durante o transporte."
		]
	],
];

//shuffle(arrayItemText);

for (let i = 0; i < arrayItemText.length; i++) {
	for (let j = 0; j < arrayItemText[i].length; j++) {
		
		var nodeTooltip = document.createElement("span")
		nodeTooltip.className = "CustomItemTooltipText";
		nodeTooltip.innerText = arrayItemTooltip[i][j];
		
		var paragraph = document.createElement("p");
		paragraph.innerText = arrayItemText[i][j];
		paragraph.className = "CustomItemTooltip";
		paragraph.style.cssText = "display: inline;";
		paragraph.appendChild(nodeTooltip);
		
		var nodeItemNest = document.createElement("div");
		nodeItemNest.className += "list-group nested-sortable";

		var nodeItem = document.createElement("div");
		nodeItem.id = "item" + i + j;
		nodeItem.className += "list-group-item ItemProcesso";
		nodeItem.style.cssText += "padding: 20px 12px;";
		nodeItem.appendChild(paragraph);
		nodeItem.appendChild(nodeItemNest);

		document.getElementById("grupo" + i).appendChild(nodeItem);
		
		new Sortable(nodeItem, {
			group: 'nested',
			animation: 200,
			// fallbackOnBody: false,
			// swapThreshold: 1,
			// sort: false,
			draggable: '',
			onAdd: function(evt) {
				if (!CheckIfItemBelongs(evt)) {
					HandleAddedItem(evt);
				}
			}
		});
	}
}

var counter = 0;
for (let i = 0; i < arraySubitemText.length; i++) {
	for (let j = 0; j < arraySubitemText[i].length; j++) {
		for (let k = 0; k < arraySubitemText[i][j].length; k++) {
			
			var nodeItemTooltip = document.createElement("span");
			nodeItemTooltip.className = "CustomSubitemTooltipText";
			nodeItemTooltip.innerText = arraySubitemTooltip[i][j][k];

			var paragraph = document.createElement("p");
			paragraph.innerText = arraySubitemText[i][j][k];
			paragraph.className = "CustomSubitemTooltip";
			paragraph.style.cssText = "display: inline";
			paragraph.appendChild(nodeItemTooltip);
			
			var nodeItem = document.createElement("div");
			nodeItem.id = "subitem" + counter;
			nodeItem.className += "list-group-item ItemProcesso nested";
			nodeItem.appendChild(paragraph);
			
			document.getElementById("grupo20").appendChild(nodeItem);
			
			counter++;
		}		
	}	
}

function HandleAddedItem(evt) {
	if (grupo20.firstChild != null) {
		grupo20.insertBefore(evt.item, grupo20.childNodes[evt.oldIndex]);
	} else {
		grupo20.appendChild(evt.item);
	}
}

function ShuffleList(array) {
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

function CheckIfItemBelongs(evt) {
	var index = evt.to.id.substring(evt.to.id.length-2, evt.to.id.length);

	var i = index[0];
	var j = index[1];
	
	var resultado = false;
	
	arraySubitemText[i][j].forEach(element => {
		if (evt.item.innerText.includes(element)) {
			resultado = true;
		}
	});
	
	return resultado;
}
