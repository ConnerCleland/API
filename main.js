document.addEventListener("DOMContentLoaded", function () {
    const fetchDataButton = document.getElementById("fetchDataButton");
    const outputDiv = document.getElementById("output");

    fetchDataButton.addEventListener("click", function () {
        const apiUrl = 'https://v2.jokeapi.dev/joke/Any?safe-mode';

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const jokeSentence = `${data.setup} ${data.delivery}`;
                outputDiv.innerHTML = `<p>${jokeSentence}</p>`;
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                outputDiv.innerHTML = `<p>An error occurred while fetching the data. Please try again later.</p>`;
            });
    });
});
