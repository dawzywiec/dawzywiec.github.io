let btn = document.getElementById('button');

function getData(event) {
    fetch('https://akademia108.pl/api/ajax/get-post.php', {
            method: 'GET'
        })
        .then(res => res.json())
        .then((data) => {
            let hr = document.createElement('hr');
            document.body.appendChild(hr);

            let pUserId = document.createElement('p');
            pUserId.innerText = 'User ID: ' + data.userId;
            document.body.appendChild(pUserId);

            let pId = document.createElement('p');
            pId.innerText = 'ID: ' + data.id;
            document.body.appendChild(pId);

            let pTitle = document.createElement('p');
            pTitle.innerText = 'Title: ' + data.title;
            document.body.appendChild(pTitle);

            let pBody = document.createElement('p');
            pBody.innerText = 'User ID: ' + data.body;
            document.body.appendChild(pBody);
        });
};

btn.addEventListener('click', getData);