document.addEventListener("DOMContentLoaded", function () {
    const fetchDataButton = document.getElementById("fetchDataButton");
    const outputDiv = document.getElementById("output");

    fetchDataButton.addEventListener("click", function () {
        const apiUrl = 'https://v2.jokeapi.dev/joke/Any?safe-mode';

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.joke) {
                    outputDiv.innerHTML = `<p>${data.joke}</p>`;
                } else {
                    outputDiv.innerHTML = `<p>No joke found. Your'e not funny</p>`;
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    });
});
