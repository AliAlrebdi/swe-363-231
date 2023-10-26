fetch("https://api.thecatapi.com/v1/images/search?limit=10")
.then(res => {
    return res.json();
})
.then(data => {
    console.log(data);
    data.forEach(image => {
        const markUp = `<li><img src="${image.url}"></img></li>`


        document.querySelector("#catList").insertAdjacentHTML('afterend', markUp);

    });

})
.catch(error => console.log(error));