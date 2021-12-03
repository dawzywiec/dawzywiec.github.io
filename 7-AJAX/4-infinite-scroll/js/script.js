console.log(document.documentElement.scrollHeight)

function scrollToEndOfPage() {
    if (document.documentElement.scrollHeight === document.documentElement.scrollTop + document.documentElement.clientHeight) {
        function getData(data) {
            fetch(data, {
                    method: 'GET'
                })
                .then(response => response.json())
                .then((data) => {
                    for (let i = 0; i < data.length; i++) {
                        let pId = document.createElement('p');
                        pId.innerText = 'User ID: ' + data[i].id;
                        document.body.appendChild(pId);

                        let pName = document.createElement('p');
                        pName.innerText = 'User name: ' + data[i].name;
                        document.body.appendChild(pName);

                        let pWebsite = document.createElement('p');
                        pWebsite.innerHTML = 'User URL: ' + data[i].website + '<br>--------';
                        document.body.appendChild(pWebsite)
                    };
                });
        };
        getData('https://akademia108.pl/api/ajax/get-users.php');
    };
};





window.addEventListener('scroll', scrollToEndOfPage);