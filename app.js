
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', function () {
    fetch('superheroes.php')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Could not retrieve superheroes');
            }
            return response.text();
        })
        .then(function (data) {
            alert(data);
        })
        .catch(function (error) {
            alert('An error occurred: ' + error.message);
        });
});
