function mudaCor() {
        document.getElementById("manipula").style.color = "#ffffff";
        document.getElementById("mudaCor").style.display = "none";
        document.getElementById("voltaCor").style.display = "block";
    }

    function voltaCor() {
        document.getElementById("manipula").style.color = "#ffff00";
        document.getElementById("mudaCor").style.display = "block";
        document.getElementById("voltaCor").style.display = "none";
    }
    
    function mudaTamanhoFonte() {
        document.getElementById("manipula").style.fontSize = "20pt";
        document.getElementById("mudaTamanhoFonte").style.display = "none";
        document.getElementById("voltaTamanhoFonte").style.display = "block";
    }

    function voltaTamanhoFonte() {
        document.getElementById("manipula").style.fontSize = "10pt";
        document.getElementById("mudaTamanhoFonte").style.display = "block";
        document.getElementById("voltaTamanhoFonte").style.display = "none";
    }
    
    function mudaBackground() {
        document.getElementById("manipula").style.backgroundColor = "green";
        document.getElementById("mudaBackground").style.display = "none";
        document.getElementById("voltaBackground").style.display = "block";
    }

    function voltaBackground() {
        document.getElementById("manipula").style.backgroundColor = "red";
        document.getElementById("mudaBackground").style.display = "block";
        document.getElementById("voltaBackground").style.display = "none";
    }
    
    function mudaItalico() {
        document.getElementById("manipula").style.fontStyle = "italic";
        document.getElementById("mudaItalico").style.display = "none";
        document.getElementById("voltaItalico").style.display = "block";
    }

    function voltaItalico() {
        document.getElementById("manipula").style.fontStyle = "normal";
        document.getElementById("mudaItalico").style.display = "block";
        document.getElementById("voltaItalico").style.display = "none";
    }
    
    function escondeDiv() {
        document.getElementById("manipula").style.display = "none";
    }
    
    function reapareceDiv() {
        document.getElementById("manipula").style.display = "block";
    }

    function colocaBorder() {
        document.getElementById("manipula").style.border = "2px solid black";
    }

    function corBorder() {
        document.getElementById("manipula").style.border = "2px solid #0000ff";
        document.getElementById("corBorder").style.display = "none";
        document.getElementById("voltaCorBorder").style.display = "block";
    }

    function voltaCorBorder() {
        document.getElementById("manipula").style.border = "2px solid black";
        document.getElementById("corBorder").style.display = "block";
        document.getElementById("voltaCorBorder").style.display = "none";
    }

    function excluiBorder() {
        document.getElementById("manipula").style.border = "0px";
    }