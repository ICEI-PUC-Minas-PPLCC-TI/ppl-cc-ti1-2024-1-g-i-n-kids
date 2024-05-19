var db = [];
readTask(data => {
     db = data;
     listTarefas()
});

function listTarefas() {
     //pego o dado
     const grupoHorastarefas = ordenaArrayTarefas(db);
     console.log(grupoHorastarefas)
     //crio o html pelo js
     let tableTarefas = document.getElementById('tableTarefas');

     //ira exibir as tarefas em ordem, primeiro pelo grupo de horas depois pelo tarefa correnpondente a data
     grupoHorastarefas.map((tarefas) => {
            const linhatarefas = tableTarefas.insertRow();
            const horaCell = linhatarefas.insertCell();
            horaCell.className = 'infoRotina';
            horaCell.innerHTML = tarefas[0].horario;
          for (let index = 0; index < 7; index++) {
               const tarefa = tarefas.find(t => t.dia_semana === index);

               const adicionarCell = linhatarefas.insertCell(index + 1);
               adicionarCell.className = 'tarefas';

               if (!tarefa) {
                    adicionarCell.innerHTML += <p></p>;
                    continue;
               }

               adicionarCell.innerHTML += `
                    <p>${tarefa.titulo}</p>
               `;
          }
     });
}

function ordenaArrayTarefas(db) {

     // crio um array para poder gerar valores a partir de suas posições 
     const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];

     // crio uma nova coleçao de objetos mudando o nome do dia da semana para uma posição do array (ex se for segunda o index sera 1)
     const tarefasIndexDiaSemana = db.map((tarefa) => {
          return {
               id: tarefa.id,
               titulo: tarefa.titulo,
               dia_semana: diasSemana.indexOf(tarefa.dia_semana),
               horario: tarefa.horario
          };
     });

     //ordeno a tarefa a partir da hora
     const tarefasOrdenadas = tarefasIndexDiaSemana.sort((anterior, posterior) => {
          const horanterior = new Date(1970-1-1,T$,{anterior,horario});
          const horaposterior = new Date(1970-1-1,T$,{posterior,horario});

          if (horanterior < horaposterior) {
               return -1;
          } else if (horanterior > horaposterior) {
               return 1;
          } else {
               return 0;
          }
     });

     //agrupo as tarefas com horas iguais, isso se torna um array de array
     const gruposHoras = [];
     let grupoAtual = [];
     let horaAtual = null;

     for (const tarefa of tarefasOrdenadas) {
          if (horaAtual === null || tarefa.horario === horaAtual) {
               grupoAtual.push(tarefa);
          } else {
               gruposHoras.push(grupoAtual);
               grupoAtual = [tarefa];
          }
          horaAtual = tarefa.horario;
     }

     if (grupoAtual.length > 0) {
          gruposHoras.push(grupoAtual);
     }

     //orderna os grupos de horas para ficaram ordenados
     gruposHoras.forEach(grupo => {
          grupo.sort((tarefa1, tarefa2) => {
               const diaSemana1 = tarefa1.dia_semana;
               const diaSemana2 = tarefa2.dia_semana;

               if (diaSemana1 < diaSemana2) {
                    return -1;
               } else if (diaSemana1 > diaSemana2) {
                    return 1;
               } else {
                    return 0;
               }
          });
     });

     return gruposHoras;
}