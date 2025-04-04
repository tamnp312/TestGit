
fetch('../../header.html')
    .then(response => response.text())
    .then(data => {
        console.log("data" , data);
        document.getElementById('nav').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));
