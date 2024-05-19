var db = [];
readTask(data => {
     db = data;
     listTarefas();
});

function listTarefas() {
     const grupoHorastarefas = ordenaArrayTarefas(db);

     let tableTarefas = document.getElementById('tableTarefas');

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
                    adicionarCell.innerHTML +=` <p></p>`;
                    continue;
               }

               adicionarCell.innerHTML += `
                    <p>${tarefa.titulo}</p>
               `;
          }
     });
}

function ordenaArrayTarefas(db) {

     const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];

     const tarefasIndexDiaSemana = db.map((tarefa) => {
          return {
               id: tarefa.id,
               titulo: tarefa.titulo,
               dia_semana: diasSemana.indexOf(tarefa.dia_semana),
               horario: tarefa.horario
          };
     });

     const tarefasOrdenadas = tarefasIndexDiaSemana.sort((anterior, posterior) => {
          const horanterior   = new Date(`1970-01-01T${anterior.horario}`);
          const horaposterior = new Date(`1970-01-01T${posterior.horario}`);

          if (horanterior < horaposterior) {
               return -1;
          } else if (horanterior > horaposterior) {
               return 1;
          } else {
               return 0;
          }
     });

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