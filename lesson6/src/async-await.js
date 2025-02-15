async function asyncFunc() {
    const response = await fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available');
    console.log(response);

    const json = await response.json();
    console.log(json);

    return json;
}

async function handleAsync() {
    const data = await asyncFunc();
    console.log(data);
}


handleAsync();
(async () => {
    console.log('before start');
    await handleAsync();
    console.log('after start');

})();
