function gerarCores() {
    const numColors = document.getElementById('numColors').value;
    const colorBoxContainer = document.getElementById('color-box-container');
    colorBoxContainer.innerHTML = ''; // Limpa as cores anteriores

    for (let i = 0; i < numColors; i++) {
        const randomColor = getRandomColor();
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = randomColor;

        const colorCode = document.createElement('div');
        colorCode.classList.add('color-code');
        colorCode.textContent = randomColor;

        colorBox.appendChild(colorCode);
        colorBox.addEventListener('click', function() {
            copiarCodigo(randomColor);
        });

        colorBoxContainer.appendChild(colorBox);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function copiarCodigo(codigo) {
    const textarea = document.createElement('textarea');
    textarea.value = codigo;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    const selectedColorCode = document.getElementById('selected-color-code');
    selectedColorCode.textContent = `Código: ${codigo} copiado para a área de transferência.`;
}
