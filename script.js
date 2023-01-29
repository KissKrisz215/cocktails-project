const searchBar = document.querySelector('input');
const list = document.getElementById('list');
searchBar.addEventListener("keyup", myFunction);

const itemDatabase = [
    {
        name: 'GG',
        glass: 'Collins Glass',
        alcohol: 'Optional alcohol',
        image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
    },
    {
        name: 'A1',
        glass: 'Cocktail glass',
        alcohol: 'Alcoholic',
        image: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
    },
    {
        name: 'ABC',
        glass: 'Shot glass',
        alcohol: 'Alcoholic',
        image: 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
    },
    {
        name: 'Kir',
        glass: 'Wine Glass',
        alcohol: 'Alcoholic',
        image: 'https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg',
    },
    {
        name: '747',
        glass: 'Shot glass',
        alcohol: 'Alcoholic',
        image: 'https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg',
    }
]

itemDatabase.forEach((item,i) => {
    list.innerHTML += `<div class="text-start bg-white rounded-4">
    <img class="image-small" src="${item.image}" />
    <h2>${item.name}</h2>
    <p class="fs-4 fw-bold" >${item.glass}</p>
    <p>${item.alcohol}</p>
    </div>`
})

function myFunction(){
    let compareVal = [];
    let enteredVal = searchBar.value;
    list.innerHTML = '';
    for(let i = 0; i < enteredVal.length; i++){
        compareVal.push(enteredVal);
    for(let j = 0;j < itemDatabase.length; j++){
        if(itemDatabase[j].name[0] === compareVal[0]){
            for(let k = 0; k < itemDatabase[j].name.length; k++){
               if(itemDatabase[j].name[k] === compareVal[k]){
                list.innerHTML += `<div class="text-start bg-white rounded-4">
    <img class="image-small" src="${itemDatabase[j].image}" />
    <h2>${itemDatabase[j].name}</h2>
    <p class="fs-4 fw-bold" >${itemDatabase[j].glass}</p>
    <p>${itemDatabase[j].alcohol}</p>
    </div>`
               }
            }
        }
    }        
    }if(enteredVal.length === 0){
        itemDatabase.forEach((item,i) => {
            list.innerHTML += `<div class="text-start bg-white rounded-4">
            <img class="image-small" src="${item.image}" />
            <h2>${item.name}</h2>
            <p class="fs-4 fw-bold" >${item.glass}</p>
            <p>${item.alcohol}</p>
            </div>`
        })
    }
}