
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('query');
const resultDiv = document.getElementById('result');

searchButton.addEventListener('click', function () {
    const query = searchInput.value.trim();
    const params = new URLSearchParams();
    params.set('query', query);

    fetch('superheroes.php?' + params.toString())
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Could not retrieve superheroes');
            }
            return response.text();
        })
        .then(function (data) {
            resultDiv.innerHTML = data;
        })
        .catch(function (error) {
            resultDiv.textContent = 'An error occurred. Please try again.';
            console.error(error);
        });
});
