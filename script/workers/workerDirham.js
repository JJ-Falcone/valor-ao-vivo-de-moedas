async function conectaAPI() {
    const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/AED-BRL")
    const conectaTraduzido = await conecta.json();
    postMessage(conectaTraduzido.AEDBRL)
}

addEventListener('message', () => {
    conectaAPI();
    setInterval(() => conectaAPI(), 5000)
})