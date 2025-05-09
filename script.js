
function cambiarIdioma(idioma) {
    const frase = document.getElementById('frase');
    if (idioma === 'es') {
        frase.textContent = 'Ella no responde. Ella recuerda.';
    } else if (idioma === 'en') {
        frase.textContent = 'She doesn’t answer. She remembers.';
    }
}
