document.addEventListener("DOMContentLoaded", function() {
    const pregnancyNo = document.getElementById("pregnancy-no");
    const pregnancyYes = document.getElementById("pregnancy-yes");
    const gestationalAgeInput = document.getElementById("gestational-age");

    // Adiciona evento de escuta para o botão "Não" de gestante
    pregnancyNo.addEventListener("change", function() {
        if (pregnancyNo.checked) {
            gestationalAgeInput.disabled = true;
            gestationalAgeInput.value = ""; // Limpa o valor do campo
            gestationalAgeInput.style.display = "none"; // Esconde o campo
        }
    });

    // Adiciona evento de escuta para o botão "Sim" de gestante
    pregnancyYes.addEventListener("change", function() {
        if (pregnancyYes.checked) {
            gestationalAgeInput.disabled = false;
            gestationalAgeInput.style.display = "block"; // Mostra o campo
        }
    });
});
