let time;
let second = 0;
let running = false;

function startInici(){
    if(!running){
        running = true;
        time = setInterval(() => {
            second++;
            document.getElementById('tempo').textContent = formatTime(second);

            if(second === 4800){ //Atuializar para mostrar o professor com apenas 5 seg
                alert("Tempo atingido: 80 min, a sua pizza está pronta!");
                stopParada();
            }
        }, 1000);
    }
}

function stopParada(){
    clearInterval(time);
    running = false;
}

function resetar(){
    clearInterval(time);
    running = false;
    second = 0;
    document.getElementById("tempo").textContent = formatTime(second); 
}

function formatTime(sec){
    let min = Math.floor(sec/60);
    let secRemain = sec % 60;
    return `${String(min).padStart(2,'0')}:${String(secRemain).padStart(2,'0')}`;
}

function mostrar(){
    document.getElementById('piz2').style.display = 'block';
}

function sumir(){
    document.getElementById('piz2').style.display = 'none';
}
