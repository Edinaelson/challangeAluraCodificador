const btn = document.querySelector("#send");
    btn.addEventListener("click", function(e){
        e.preventDefault();
        const text = document.querySelector("#texto");
        const value = text.value;
        const array = value.split('');

        for(var i = 0; i <= value.length; i++){
            if (array[i] == "e"){
                array[i] = "enter";
            }
            if (array[i] == "i"){
                array[i] = "imes";
            }
            if (array[i] == "a"){
                array[i] = "ai";
            }
            if (array[i] == "o"){
                array[i] = "ober";
            }
            if (array[i] == "u"){
                array[i] = "ufat";
            }
        }
        document.getElementById('texto_recebido').innerHTML = array.join('');
    });
