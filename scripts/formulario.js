const formulario = document.querySelector("#form");
const URL = 'https://jsonplaceholder.typicode.com/posts';

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const dadosFormulario = new FormData(formulario);
    const dadosJSON = Object.fromEntries(dadosFormulario.entries());
    console.log(JSON.stringify(dadosJSON));

    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosJSON),
        })

        if (response.ok) {
            const data = await response.json();
            console.log('Dados enviados com sucesso ', data);
        } else {
            console.error('Erro ao enviar dados ', response.status, response.text)
        }

    } catch (error) {
    }
});