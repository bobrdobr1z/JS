
const prompt = require('prompt-sync')();

const styles = [
    { name: 'color', value: 'blue' },
    { name: 'font-size', value: '20px' },
    { name: 'text-align', value: 'center' },
    { name: 'text-decoration', value: 'underline' },
];

function applyStylesAndWriteText(stylesArray, text) {    const stylesString = stylesArray
        .map(style => `${style.name}: ${style.value};`)
        .join(' ');

    const htmlContent = `<p style="${stylesString}">${text}</p>`;

    document.write(htmlContent);
}

applyStylesAndWriteText(styles, 'Hello, World!');
