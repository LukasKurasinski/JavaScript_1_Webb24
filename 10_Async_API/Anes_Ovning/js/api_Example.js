//https://catfact.ninja/fact
//https://api.api-ninjas.com/v1/facts

    let body = document.getElementById('body');

    let randomCatFacts = () => {
    fetch('https://catfact.ninja/fact')
    .then(response =>{
        if(!response.ok){
            throw new Error('Something went wrong -' + response.status);
        }
        return response.json();
    })
    .then(data => {

        let catText = document.createElement('p');
        catText.style.backgroundImage = 'radial-gradient(yellow,orange)';
        catText.style.color = 'black';
        catText.style.borderRadius = '5px';
        catText.style.border = 'solid black 1px';
        catText.style.textAlign = 'center';
        catText.style.fontSize = '20px';
        catText.style.display = 'block';
        catText.style.marginRight = 'auto'
        catText.style.marginLeft = 'auto';
        catText.style.margin = '20px';
        catText.style.padding = '10px'; 
        catText.style.fontFamily = 'monospace';
        catText.innerText = data.fact;
        body.appendChild(catText);


        return data;
    })
    .catch(error =>{
        console.error('Fetch error', error);
    });

}

let randomActivity = () => {
    fetch('https://www.boredapi.com/api/activity')
    .then(response =>{
        if(!response.ok){
            throw new Error('Something went wrong -' + response.status);
        }
        return response.json();
    })
    .then(data => {

        let activityText = document.createElement('p');
        activityText.style.backgroundImage = 'radial-gradient(lightBlue,blue)';
        activityText.style.color = 'white';
        activityText.style.textAlign = 'center';
        activityText.style.borderRadius = '5px';
        activityText.style.border = 'solid black 1px';
        activityText.style.fontSize = '20px';
        activityText.style.display = 'block';
        activityText.style.marginRight = 'auto'
        activityText.style.marginLeft = 'auto';
        activityText.style.margin = '20px';
        activityText.style.padding = '10px'; 
        activityText.style.fontFamily = 'monospace';
        activityText.innerText = data.activity;
        body.appendChild(activityText);


        return data;
    })
    .catch(error =>{
        console.error('Fetch error', error);
    });

}