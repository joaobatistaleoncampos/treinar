const velocidade = document.getElementById('velocidade')

const res = document.getElementById('res')


function radar() {
    const vel = velocidade.value;



    if (vel > 40 && vel < 50) {
        res.innerHTML += 'Multado! infração: MÉDIA';
        res.style.color = 'red';
    }
    else if (vel >= 50 && vel < 60) {
        res.innerHTML += "Multado! Infração: GRAVE"
        res.style.color = 'red';
    }

    else {
        res.innerHTML += 'Não multado';
        res.style.color = 'blue';
    }

}