async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error after the 1st URL');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('1st URL:', error.message);
        const urlNew = 'https://petstore.swagger.io/v2/pet/findByStatus?status=available';
        try {
            const urlNewResponse = await fetch(urlNew);
            if (!urlNewResponse.ok) {
                throw new Error('Error after the 2nd URL');
            }
            const urlNewData = await urlNewResponse.json();
            console.log(urlNewData);
        } catch (urlNewError) {
            console.error('2nd URL:', urlNewError.message);
            throw new Error('Both requests failed. Please try another URL.');
        }
    }
}

const url = 'https://test.com';
fetchData(url);
