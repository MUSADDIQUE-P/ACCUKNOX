function toggleStyle(outputId, styleProperty, value) {
    const outputText = document.getElementById(outputId);
    outputText.style[styleProperty] = outputText.style[styleProperty] === value ? 'normal' : value;
}

function toggleUnderline(outputId) {
    const outputText = document.getElementById(outputId);
    outputText.style.textDecoration = outputText.style.textDecoration === 'underline' ? 'none' : 'underline';
}

function setFontSize(outputId, value) {
    const outputText = document.getElementById(outputId);
    outputText.style.fontSize = value + 'px';
}

function setTextColor(outputId, value) {
    const outputText = document.getElementById(outputId);
    outputText.style.color = value;
}