function init() {
     let formularioTarefa   = document.querySelector('form');
     let btnCadastrarTarefa = document.getElementById('btnSalvarTarefa');
 
     btnCadastrarTarefa.addEventListener('click', () => {
         let tituloTarefa = document.getElementById('tituloTarefa').value;
         let diaDaSemana  = document.getElementById('diaDaSemana').value;
         let horaTarefa   = document.getElementById('horaTarefa').value;
 
         if (!formularioTarefa.checkValidity()) {
             displayMessage('Preencha o formulário corretamente.', 'warning');
             return;
         }
 
         const tarefa = {
             titulo: tituloTarefa,
             dia_semana: diaDaSemana,
             horario: horaTarefa
         };
 
         createTask(tarefa);
 
         formularioTarefa.reset();
     });
 }