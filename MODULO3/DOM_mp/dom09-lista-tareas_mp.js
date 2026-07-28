const campoTarea = document.getElementById('campo_tarea');
const botonAgregar = document.getElementById('btn_agregar');
const listaTareas = document.getElementById('lista_tareas');

botonAgregar.addEventListener('click', function(){
   const tarea = campoTarea.value.trim();
   if (tarea !== ''){
      const li = document.createElement('li');
      li.textContent = "👻 " + tarea;
      li.style.cssText = "background: #131c2e; border: 1px solid #374151; padding: 8px 12px; margin-bottom: 5px; border-radius: 6px; max-width: 300px; color: #d1d5db;";
      listaTareas.appendChild(li);
      campoTarea.value = '';
   }
});