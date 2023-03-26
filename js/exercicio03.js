const localAlert = document.getElementById('divAlert')

const alert = (message, type) => {
    document.getElementById('divAlert').innerHTML = '';
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible divAlet" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    localAlert.append(wrapper)
}

/* 

const alertFechar = document.getElementById('buttonFechar')
if (alertFechar) {
    alertFechar.addEventListener('click', () => {
        alert('Clicou no botao Fechar', 'dark')
    })
}

const alertSim = document.getElementById('buttonSim')
if (alertSim) {
    alertSim.addEventListener('click', () => {
        alert('Exclusão dos dados confirmada', 'success')
    })
}
const alertNao = document.getElementById('buttonNao')
if (alertNao) {
    alertNao.addEventListener('click', () => {
        alert('Exclusão dos dados NÃO confirmada', 'danger')
    })
}
const alertCancelar = document.getElementById('buttonCancelar')
if (alertCancelar) {
    alertCancelar.addEventListener('click', () => {
        alert('Clicou no botao Cancelar', 'info')
    })
}

*/

function clicouFechar() {
    console.log('Clicou no botao Fechar');
    alert('Clicou no botao Fechar', 'dark');
}
function clicouSim() {
    console.log('Exclusão dos dados confirmada');
    alert('Exclusão dos dados confirmada', 'success');
}
function clicouNao() {
    console.log('Exclusão dos dados NÃO confirmada');
    alert('Exclusão dos dados NÃO confirmada', 'danger');
}
function clicouCancelar() {
    console.log('Clicou no botao Cancelar');
    alert('Clicou no botao Cancelar', 'info');
}