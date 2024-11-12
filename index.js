const inputs = document.querySelectorAll('.radio-input input');
const successMessage = document.querySelector('.result.success');
const errorMessage = document.querySelector('.result.error');

document.querySelector('.submit-button').addEventListener('click', () => {
    const selected = document.querySelector('.radio-input input:checked');
    if (selected) {
        if (selected.value === 'value-3') {
            successMessage.style.display = 'flex';
            errorMessage.style.display = 'none';
        } else {
            successMessage.style.display = 'none';
            errorMessage.style.display = 'flex';
        }
    } else {
        alert('Por favor, selecione uma resposta.');
    }
});
