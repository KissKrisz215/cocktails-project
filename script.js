const searchBar = document.querySelector('input');
const list = document.getElementById('list');
const main = document.querySelector('main');
searchBar.addEventListener("keyup", myFunction);


//Database containing all the items
const itemDatabase = [
    {
        name: 'GG',
        glass: 'Collins Glass',
        info: 'Optional alcohol',
        category: 'Ordinary Drink',
        instructions: 'Pour The Galliano Liqueur Over Ice. Fill The Remainder Of The Glass With Ginger Ale And Thats All There Is To It. You Now Have A Your Very Own GG.',
        ingredients: 'Galliano Ginger Ale Ice',
        image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
    },
    {
        name: 'A1',
        glass: 'Cocktail glass',
        info: 'Alcoholic',
        category: 'Cocktail',
        instructions: 'Pour All Ingredients Into A Cocktail Shaker, Mix And Serve Over Ice Into A Chilled Glass.',
        ingredients: 'Gin Grand Marnier Lemon Juice Grenadine',
        image: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
    },
    {
        name: 'ABC',
        glass: 'Shot glass',
        info: 'Alcoholic',
        category: 'Shot',
        instructions: 'Layered In A Shot Glass.',
        ingredients: 'Amaretto Baileys Irish Cream Cognac',
        image: 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
    },
    {
        name: 'Kir',
        glass: 'Wine Glass',
        info: 'Alcoholic',
        category: 'Shot',
        instructions: 'Add The Crème De Cassis To The Bottom Of The Glass, Then Top Up With Wine.',
        ingredients: 'Creme De Cassis Champagne',
        image: 'https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg',
    },
    {
        name: '747',
        glass: 'Shot glass',
        info: 'Alcoholic',
        category: 'Shot',
        instructions: 'Pour Kaluha, Then Baileys, Then Frangelico Not Chilled And Not Layered -- SERVE!!!',
        ingredients: 'Kahlua Baileys Irish Cream Frangelico',
        image: 'https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg',
    },
    {
        name: 'Ace',
        glass: 'Martini Glass',
        info: 'Alcoholic',
        category: 'Cocktail',
        instructions: 'Shake All The Ingredients In A Cocktail Shaker And Ice Then Strain In A Cold Glass.',
        ingredients: 'Gin Grenadine Heavy Cream Milk Egg White',
        image: 'https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg'
    },
    {
        name: 'Adam',
        glass: 'Cocktail glass',
        info: 'Alcoholic',
        category: 'Ordinary Drink',
        instructions: 'In A Shaker Half-Filled With Ice Cubes, Combine All Of The Ingredients. Shake Well. Strain Into A Cocktail Glass.',
        ingredients: ' Dark Rum Lemon Juice Grenadine',
        image: 'https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg'
    },
    {
        name: 'Abilene',
        glass: 'Highball glass',
        info: 'Alcoholic',
        category: 'Ordinary Drink',
        instructions: 'Pour All Of The Ingredients Into A Highball Glass Almost Filled With Ice Cubes. Stir Well.',
        ingredients: 'Dark Rum Peach Nectar Orange Juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/smb2oe1582479072.jpg'
    },
    {
        name: 'Veteran',
        glass: 'Old-fashioned glass',
        info: 'Alcoholic',
        category: 'Veteran',
        instructions: 'Pour The Rum And Cherry Brandy Into An Old-Fashioned Glass Almost Filled With Ice Cubes. Stir Well.',
        ingredients: 'Dark Rum Cherry Brandy',
        image: 'https://www.thecocktaildb.com/images/media/drink/iwml9t1492976255.jpg'
    },
    {
        name: 'ACID',
        glass: 'Shot glass',
        info: 'Alcoholic',
        category: 'Shot',
        instructions: 'Poor In The 151 First Followed By The 101 Served With A Coke Or Dr Pepper Chaser.',
        ingredients: '151 Proof Rum Wild Turkey',
        image: 'https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg'
    }
]

showAll();

function returnIt(){
    main.innerHTML = `<div class="container text-center">
    <h2>Cocktails</h2>
    <div class="container w-50">
     <section class="p-4 text-center">
         <h3>Search Your Favorite Cocktail</h3>
         <input class="w-100 p-2 bglightgrey" type="text" required />
     </section>
 </div>
    <div id="list">
    </div>
 </div>`
 const searchBar = document.querySelector('input');
 searchBar.addEventListener("keyup", myFunction);
 myFunction();
}

function myFunction(){
    let compareVal = [];
    const searchBar = document.querySelector('input');
    let enteredVal = searchBar.value;
    const list = document.getElementById('list');
    list.innerHTML = '';
    //Grabs the input value and passes it to compareVal
    for(let i = 0; i < enteredVal.length; i++){
        compareVal.push(enteredVal);
    //Loops trough itemDatabase
    for(let j = 0;j < itemDatabase.length; j++){
        //Checks if itemDatabase.name includes compareVal's value
        if(itemDatabase[j].name.includes(compareVal) || itemDatabase[j].name.toLowerCase().includes(compareVal) || itemDatabase[j].name.toUpperCase().includes(compareVal) ){ 
            showSearch(j)
        }
    }        
    }if(enteredVal.length === 0){
          showAll();
    }
}

//Shows All results when the input in none
function showAll(){
    const list = document.getElementById('list');
    itemDatabase.forEach((item,i) => {
        list.innerHTML += `<div class="box-shadow text-start bg-white rounded-1 p-4">
        <img class="image-small" src="${item.image}" />
        <h2>${item.name}</h2>
        <p class="fs-4 fw-bold" >${item.glass}</p>
        <p>${item.info}</p>
        <button onclick="showDetails('${item.name}','${i}')" class="btn btn-outline-success">Details</button>
        </div>`
    });
}


//Shows Search Results
function showSearch(j){
    const list = document.getElementById('list');
    list.innerHTML += `<div class="text-start bg-white rounded-1 box-shadow p-4">
    <img class="image-small" src="${itemDatabase[j].image}" />
    <h2>${itemDatabase[j].name}</h2>
    <p class="fs-4 fw-bold" >${itemDatabase[j].glass}</p>
    <p>${itemDatabase[j].info}</p>
    <button onclick="showDetails('${itemDatabase[j].name}','${j}')" class="btn btn-outline-success">Details</button>
    </div>`
}

//Shows details about drinks
function showDetails(arr,i){
    const itemName = itemDatabase[i].name;
    const itemGlass = itemDatabase[i].glass;
    const itemInfo = itemDatabase[i].info;
    const itemCategory = itemDatabase[i].category;
    const itemInstructions = itemDatabase[i].instructions;
    const itemIngredients = itemDatabase[i].ingredients;
    const itemImage = itemDatabase[i].image;
    main.innerHTML = `<div class="container text-center p-5" style="height:100vw;">
    <button class="btn btn-green" onclick="returnIt()">Back Home</button>
    <h2>${itemName}</h2>
    <section class="d-flex gap-4">
    <div><img src="${itemImage}" class="image-large rounded-3" alt="${itemName} + picture" /></div>
    <div class="text-start">
    <p class="fw-bold fs-5"><span class="info-green fw-bold p-1 rounded-2">Name:</span> ${itemName}</p>
    <p class="fw-bold fs-5"><span class="info-green fw-bold p-1 rounded-2">Category:</span> ${itemCategory}</p>
    <p class="fw-bold fs-5"><span class="info-green fw-bold p-1 rounded-2">Info:</span> ${itemInfo}</p>
    <p class="fw-bold fs-5"><span class="info-green fw-bold p-1 rounded-2">Glass:</span> ${itemGlass}</p>
    <p class="fw-bold fs-5"><span class="info-green fw-bold p-1 rounded-2">Instructions:</span> ${itemInstructions}</p>
    <p class="fw-bold fs-5"><span class="info-green fw-bold p-1 rounded-2">Ingredients:</span> ${itemIngredients}</p>
    </div>
    </section>
    </div>`
}
