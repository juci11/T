function playGame() {
    window.location.href = 'game.html'; // Redireciona para a página do jogo
}

function showInstructions() {
    alert("Aqui estão as instruções do jogo..."); // Exibe um alerta com as instruções
}

function exitPage() {
    window.close();
}

// Adiciona event listeners aos botões
document.getElementById('playButton').addEventListener('click', playGame);
document.getElementById('instructionsButton').addEventListener('click', showInstructions);
document.getElementById('exitButton').addEventListener('click', exitPage);
