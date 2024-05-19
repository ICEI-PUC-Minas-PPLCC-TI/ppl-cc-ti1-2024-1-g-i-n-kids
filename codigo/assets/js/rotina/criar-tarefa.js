function init() {
     let formularioTarefa   = document.querySelector('form');
     let btnCadastrarTarefa = document.getElementById('btnSalvarTarefa');
 
     btnCadastrarTarefa.addEventListener('click', (e) => {
         let tituloTarefa = document.getElementById('tituloTarefa').value;
         let diaDaSemana  = document.getElementById('diaDaSemana').value;
         let horaTarefa   = document.getElementById('horaTarefa').value;

         e.preventDefault();
 
         if (!formularioTarefa.checkValidity()) {
             displayMessage('Preencha o formulário corretamente.', 'warning');
             return;
         }

         if (tituloTarefa.trim() < 5) {
            displayMessage('O título da tarefa deve ter pelo menos 5 caracteres.', 'warning');
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