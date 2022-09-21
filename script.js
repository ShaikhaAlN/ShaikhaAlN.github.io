let orangeText = document.getElementById("java-edit")

orangeText.addEventListener('click', () => {
    if (orangeText.style.color == "#525a45"){
        orangeText.style.color = "rgb(232,152,77)";
    }
    else { 
        orangeText.style.color = "#525a45"
    }
})