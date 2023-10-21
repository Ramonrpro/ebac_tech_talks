AOS.init();

const dataDoEvento = new Date('dec 12, 2023 19:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

let contador = document.querySelector('#contador');

const contaHoras = setInterval(() => {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const diastanciaAteEvento = timeStampDoEvento - timeStampAtual;
    
    const diasEmMl = (1000 * 60 * 60 * 24);
    const horasEmMl = (1000 * 60 * 60);
    const minutosEmMl = (1000 * 60 );

    const diasAteEvento = Math.floor(diastanciaAteEvento / diasEmMl);
    const horasAteEvento = Math.floor(diastanciaAteEvento % diasEmMl / horasEmMl);
    const minutosAteEvento = Math.floor(diastanciaAteEvento % horasEmMl / minutosEmMl)
    const segundosAteEvento = Math.floor((diastanciaAteEvento % minutosEmMl) / 1000)
    
    
    contador.textContent = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`
    if (diastanciaAteEvento < 0 ) {
        clearInterval(contaHoras);
        contador.textContent = 'O evento expirou!'
    }
}, 1000);
