
//async function for fetch data and other process...

async function process() 
{
 const breeds = await fetch("https://api.thedogapi.com/v1/breeds",{method: "GET"});
 const dogs = await breeds.json();
loaddata(dogs);
  }

//function to get the api data and perform dom in the html..

function loaddata(dogs) {

//dom to create div

const storage = document.createElement("div");

//forEach method is used here for create dom (element,class and inner element)

dogs.forEach((breed) => {
      const breedcontainer = document.createElement("div");
      breedcontainer.className = "container";
      breedcontainer.innerHTML = ` <h1>Dog information</h1>
      <div><h3>Dog Name  :  ${breed.name}</h3></div><br>
      <div><h3>Breed-Group  :  ${breed.breed_group}</h3></div><br>
      <div><h3>Life-Span  :   ${breed.life_span}</h3></div><br>
      <div><h3>Bred-For :  ${breed.bred_for}</h3></div><br>
      <img src="${breed.image.url}" class="image"><br>`;
      storage.append(breedcontainer);
    });

//append

    document.body.append(storage);
  }

// call function

  process();