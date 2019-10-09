const petArray = [
    {
        image: 'https://dogfood.guru/wp-content/uploads/2018/06/Goldendoodle-610x775.jpg',
        name: 'Golden Doodle',
        color: 'Tan',
        specialSkill: 'Juggling',
        typeOfPet: 'dog'
    },
    {
        image: 'https://meanjin.com.au/wp-content/uploads/2018/05/Goldfish.jpg',
        name: 'Gold Fish',
        color: 'Orange',
        specialSkill: 'Water Gymnastics',
        typeOfPet: 'fish'
    },
    {
        image: 'https://timedotcom.files.wordpress.com/2019/03/kitten-report.jpg?w=800&quality=85',
        name: 'Little Kitten',
        color: 'Gray',
        specialSkill: 'Hanging from ceiling with claws',
        typeOfPet: 'cat'
    },
    {
        image: 'http://cdn.akc.org/content/hero/lab_puppy_hero.jpg',
        name: 'Labrador Retriever',
        color: 'Black',
        specialSkill: 'Running 70 mph',
        typeOfPet: 'dog'
    },
    {
        image: 'http://www.snowmonkeyresorts.com/wp-content/uploads/2018/07/WhatsApp-Image-2017-07-19-at-19.13.32-683x1024.jpeg',
        name: 'Snow Monkey',
        color: 'Tan',
        specialSkill: 'Washing his own hands',
        typeOfPet: 'monkey'
    },
    {
        image: 'https://www.bigalspets.com/blog/wp-content/uploads/2016/12/pexels-photo-128756-1600x1067.jpeg',
        name: 'Clown Fish',
        color: 'Orange',
        specialSkill: 'Underwater Spy',
        typeOfPet: 'fish'
    }
]

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
};

const loopAndPrintPetToDom = (arr) => {
        let domString = '';
    for (let i = 0; i < arr.length; i ++) {
        const pet = arr[i];
        domString += `
        <div id="card">
            <h2>${pet.name}</h2>
            <img src="${pet.image}" alt="Image of ${pet.name}"/>
            <h4>${pet.color}</h4>
            <p>${pet.specialSkill}</p>
            <footer>
                <h4>${pet.typeOfPet}</h4>
            </footer>
        </div>`
    };
    printToDom(domString, 'pet-cards');
};

const buttonClick = (event) => {
    const typeOfPet = event.target.id;
    const selectedPets =[];
    for (let i = 0; i < petArray.length; i ++) {
        const pet = petArray[i];
        if (pet.typeOfPet === typeOfPet) {
            selectedPets.push(pet);
        }
    }
    loopAndPrintPetToDom(selectedPets);
}

document.getElementById('dog').addEventListener('click', buttonClick);
document.getElementById('cat').addEventListener('click', buttonClick);
document.getElementById('monkey').addEventListener('click', buttonClick);
document.getElementById('fish').addEventListener('click', buttonClick);
document.getElementById('all-pets').addEventListener('click', () => {
    loopAndPrintPetToDom(petArray);
});
