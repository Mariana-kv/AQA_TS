function fetchPets() {
    const url = 'https://petstore.swagger.io/v2/pet/findByStatus?status=available';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Request error');}
            return response.json();
        })
        .then(data => {
            processData(data);
        })
        .catch(error => console.error('Error:', error));
}

function processData(data) {
    console.log(data);
}
fetchPets();
