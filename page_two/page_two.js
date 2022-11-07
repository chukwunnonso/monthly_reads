fetch('http://localhost:3000/books')
.then(res => {
    return res.json();
})
.then(data => {
    //added this part just now

    data.forEach(user => {
        const markup = `<li>${user.author}</li>`;
        document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
    });
    console.log(data);
})
.catch(error => console.log(error))