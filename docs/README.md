# Documentação do Projeto (TIDocs)

Esta pasta armazena a documentação do projeto para a disciplina de **Trabalho Interdisciplinar 1** dos cursos de Tecnologia da Informação da **[PUC Minas](https://pucminas.br)**. Essa documentação é estruturada na forma de um site que fica disponível por meio do GitHub Pages e pode ser incluído, também, no site da solução hospedada. Um [exemplo publicado do TIDocs](https://webtech-puc-minas.github.io/ti1-template/) está disponível por meio do repositório do **[WebTech PUC Minas](https://github.com/webtech-pucminas)**.

A documentação do projeto inclui as seguintes seções:

1. Introdução
2. Contexto
3. Concepção
4. Metodologia
5. Solução
6. FAQ (Questões frequentes)
7. Referências Bibliográficas

O template para o site é estruturado e permite que a equipe evolua a documentação do projeto à medida que avance no desenvolvimento.

# Orientações gerais

Esta seção traz explicações breves sobre o conjunto de artefatos que precisam ser incluídos na documentação do projeto com uma conjunto de links importantes para que se entenda como criar cada coisa.

## Problema

Muitos pais enfrentam dificuldades para equilibrar o tempo que seus filhos passam em frente às telas com atividades ao ar livre e momentos de qualidade em família. O crescente uso de dispositivos eletrônicos e jogos online tem levado as crianças a ficarem cada vez mais sedentárias e dependentes dessas tecnologias, o que pode prejudicar seu desenvolvimento físico, emocional e social.

Ao mesmo tempo, os pais desejam proporcionar experiências enriquecedoras e saudáveis para seus filhos, mas muitas vezes se deparam com a falta de informações relevantes e direcionadas. A ausência de um guia abrangente e centralizado que ofereça sugestões de atividades ao ar livre, dicas práticas para reduzir o tempo de tela e orientações para criar momentos significativos em família aumenta a sensação de sobrecarga e incerteza.

Dessa forma, a dificuldade em encontrar recursos confiáveis que ajudem os pais a equilibrar o tempo das crianças nas telas com atividades lúdicas que favoreçam uma formação mais saudável das crianças e que aumentem o tempo de qualidade em família são os principais objetivos a serem sanados.

## Objetivos

O principal foco deste projeto é desenvolver um software que solucione o problema enfrentado pelos pais em equilibrar o tempo de seus filhos entre telas e atividades recreativas, além de promover momentos de qualidade em família.

A plataforma concentra seus esforços nas seguintes questões:
Centralização de informações relevantes: Concentra informações úteis para os pais em um único lugar, oferece orientações sobre como equilibrar o tempo de tela das crianças, sugere atividades ao ar livre e promove momentos significativos em família.

Otimização da organização das rotinas familiares: Desenvolve ferramentas que auxiliam os pais na organização e planejamento de suas rotinas familiares, incluindo a criação de cronogramas adaptáveis que permitem a inclusão de tempo para atividades ao ar livre, momentos de qualidade em família e redução do tempo de tela das crianças.

Esses objetivos específicos direcionam o desenvolvimento da plataforma, fornecendo soluções práticas e eficazes para os desafios enfrentados pelos pais na criação de um ambiente equilibrado para seus filhos.

## Justificativa

A decisão de desenvolver um software para auxiliar os pais na gestão do tempo de tela das crianças e na promoção de atividades lúdicas em família foi baseada na necessidade evidente de equilibrar o uso de dispositivos eletrônicos com momentos de qualidade. A partir de entrevistas feitas pelos componentes do grupo e também pesquisas realizadas em artigos e vídeos (os dados estão disponíveis no Design Thinking e também nas referências bibliográficas deste documento), é possível destacar os impactos negativos do uso excessivo de telas na saúde e no desenvolvimento das crianças, reforçando a importância de promover atividades mais saudáveis e interativas.

Uma plataforma centralizada pode contribuir para sanar essa dificuldade, fornecendo orientações práticas e apoio aos pais, enquanto facilita a organização da rotina familiar, permitindo que eles dediquem mais tempo de qualidade com seus filhos. Promover atividades em família não só fortalece os laços afetivos, mas também contribui para o bem-estar emocional de todos os membros da família, tornando essa iniciativa fundamental para fortalecer as relações familiares e aumentar a felicidade geral.

## Público-Alvo

Nosso público-alvo abrange uma ampla série de pessoas interessadas em promover o desenvolvimento saudável das crianças, incluindo pais, responsáveis, educadores, psicólogos e outros profissionais ligados à educação infantil. Identificamos diferentes perfis:

Pessoas preocupadas com o tempo de tela: pais e responsáveis preocupados com o tempo excessivo que as crianças passam em frente às telas e que buscam soluções eficazes para limitar esse tempo.
Pais ocupados: famílias com agendas lotadas que enfrentam desafios para organizar atividades fora do ambiente digital. Valorizam soluções apropriadas e de fácil acesso.
Responsáveis em busca de orientação: indivíduos interessados em receber orientações sobre como promover atividades recreativas e momentos de qualidade em família, mesmo tendo pouco conhecimento prévio sobre o assunto.
Famílias multigeracionais: incluem membros de diferentes idades, como avós, que também participam da criação e cuidado das crianças.

A maioria dos usuários possui alguma experiência básica com tecnologia, como navegar na internet e usar aplicativos em smartphones ou tablets. A aplicação será intuitiva e de fácil acesso, atendendo também aos usuários com menos experiência tecnológica.

## Personas

![persona](https://github.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m-20241-3-i-n-kids/assets/96635074/ad5964f9-1552-442d-a6c2-a2636729d270)

## Histórias de Usuários

![historia-de-usuário](https://github.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m-20241-3-i-n-kids/assets/96635074/dad9a497-9cb4-4ea1-80a1-39b78ee07047)

## Requisitos

Os requisitos de um projeto são classificados em dois grupos:

-   [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
    correspondem a uma funcionalidade que deve estar presente na plataforma.
    Ex:

ID Descrição do Requisito Prioridade

RF-001 O sistema deve permitir o cadastro de usuário ALTA

RF-002 O sistema deve permitir o login de usuários cadastrados ALTA

RF-003 O sistema deve permitir a atualização dos dados de um usuário cadastrado MÉDIA

RF-004 O sistema deve permitir a exclusão de usuários cadastrados MÉDIA

RF-005 O sistema deve permitir a criação de postagens por um usuário cadastrado ALTA

RF-006 O sistema deve permitir a atualização dos dados das postagens criadas por um usuário cadastrado MÉDIA

RF-007 O sistema deve permitir a exclusão das postagens criadas por um usuário cadastrado MÉDIA

RF-008 O sistema deve permitir a exibição de todas as postagens cadastradas ALTA

RF-009 O sistema deve permitir a filtragem das postagens cadastradas por nome BAIXA

RF-010 O sistema deve permitir contactar os desenvolvedores do processo BAIXA

RF-011 O sistema deve permitir que o usuário cadastrado monte a rotina do seu filho ALTA

RF-012 O sistema deve permitir a criação das tarefas da rotina pelo usuário cadastrado ALTA

RF-013 O sistema deve permitir a atualização das tarefas da rotina criada pelo usuário cadastrado MÉDIA

RF-014 O sistema deve permitir a exclusão das tarefas da rotina criada pelo usuário cadastrado MÉDIA

RF-015 O sistema deve permitir a filtragem das tarefas da rotina pelo nome BAIXA

RF-016 O sistema deve permitir a visualização de informações sobre a empresa BAIXA

RF-017 O sistema deve permitir que o usuário navegue facilmente entre as telas através de um menu ALTA

RF-018 O sistema deve permitir que os usuários autenticados acessem apenas suas informações cadastradas MÉDIA

RF-019 O sistema deve permitir que os usuários cadastrados recebam notificações por e-mail quando uma nova atividade for cadastrada BAIXA

RF-020 O sistema deve fornecer um botão de "Voltar ao topo" em todas as páginas para facilitar a navegação do usuário

-   [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
    correspondem a uma característica técnica, seja de usabilidade, desempenho, confiabilidade, segurança ou outro.
    Ex:

ID Descrição do Requisito Prioridade

RNF-001 O sistema deve ser responsivo, adequando a diversos tamanhos de telas ALTA

RNF-002 O sistema deve ser compatível com diversos navegadores MÉDIA

RNF-003 O sistema deve ser acessível para diversos perfis de usuários (permitindo que pessoas com deficiências possam ter acesso) ALTA

RNF-004 O sistema deve ter um SEO que facilite a busca da página na web BAIXA

RNF-005 O sistema deve conter uma boa consistência visual MÉDIA

RNF-006 O sistema deve possuir uma navegação de fácil acesso, aumentando a inclusão diversas de faixas etárias ALTA

RNF-007 O sistema deve ser otimizado, facilitando o carregamento da página MÉDIA

RNF-008 O sistema deve ser modular, com facilidade de manter e atualizar o código ALTA

## User Flow

![screen-flow](https://github.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m-20241-3-i-n-kids/assets/96635074/ea52f2b2-2b0f-4aa4-9764-c0e3f52d8034)

## Wireframes

Para acessar o wireframe da I&N KIDS, [clique aqui](https://www.figma.com/file/VYJuUgPqb4IjK8J1MbaY9Y/I%26N-Kids---Wireframe?type=design&node-id=0%3A1&mode=design&t=gQdlTpqRGvfZo1w2-1).

## Gestão de Projetos

Divisão de papéis no grupo e apresentação da estrutura da ferramenta de controle de tarefas (Kanban).
O grupo da I&N KIDS é composto por sete (7) membros distribuídos da seguinte forma:
Scrum Master: Julia Rodrigues Cronenberger
Product Owner: Artur Bomtempo Colen
Desenvolvedores:

-   Artur Bomtempo Colen;
-   Daniella Emily Cornelio da Silva;
-   Davi Gonçalves Ayres Lanna;
-   Leticia Paulinelli Costa Marini;
-   Lucas Alves Berão;
-   Pedro Henrique Félix Dos Santos

O principal responsável pela documentação do projeto foi Artur Bomtempo. Assim, além de escrever parte do conteúdo presente neste documento, também foi responsável por receber e compilar neste arquivo (TIDocs) partes da documentação escritas por Julia Cronenberger, Pedro Félix e Letícia Paulinelli.

Para dividir as tarefas do projeto I&N KIDS, estamos utilizando a metodologia Kanban através da plataforma GitHub Projects. O quadro de gerenciamento está estruturado em colunas para "A Fazer", "Em Andamento" e "Feito". Esta ferramenta tem sido uma ótima experiência, facilitando bastante a organização geral do grupo e nossas estratégias para alcançar nosso objetivo principal de finalizar o software no tempo estimado.

<img width="1440" alt="github-projects" src="https://github.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m-20241-3-i-n-kids/assets/96635074/4a7d4a9b-ce25-40e7-beac-08ea3b6eeb55">
