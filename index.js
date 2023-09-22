<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>J5</title>
    <style>
      .card{
        border: 1px solid black;
        width: fit-content;
        padding: 0 20px;
        display: inline-block;
        margin: 10px 10px;
      }
    </style>
</head>
<body>
  <div class="container">
  </div>
    <script>
        let persons = `
        [
  {
    "name": "Alice",
    "age": 25,
    "place": "New York",
    "dob": "1998-03-12"
  },
  {
    "name": "Bob",
    "age": 32,
    "place": "Los Angeles",
    "dob": "1991-07-19"
  },
  {
    "name": "Charlie",
    "age": 41,
    "place": "Chicago",
    "dob": "1982-11-03"
  },
  {
    "name": "David",
    "age": 18,
    "place": "Houston",
    "dob": "2005-05-08"
  },
  {
    "name": "Emily",
    "age": 29,
    "place": "San Francisco",
    "dob": "1994-09-26"
  },
  {
    "name": "Frank",
    "age": 36,
    "place": "Boston",
    "dob": "1987-12-30"
  },
  {
    "name": "Grace",
    "age": 22,
    "place": "Miami",
    "dob": "2001-01-14"
  },
  {
    "name": "Harry",
    "age": 47,
    "place": "Seattle",
    "dob": "1976-06-21"
  }
]`
let parsePersons = JSON.parse(persons);
const cardContainer = document.querySelector(".container");

function createCard(cardContainer,parsePersons,i){
  const card = document.createElement("div")
  card.classList.add("card")
  const name = document.createElement("h1")
  name.innerHTML = "Name - " + parsePersons[i].name;

  const age = document.createElement("h3")
  age.innerHTML = "Age - " + parsePersons[i].age;
  card.appendChild(name)
  card.appendChild(age)
  cardContainer.appendChild(card)
}

// createCard(cardContainer,parsePersons,1)

for(let i=0;i<parsePersons.length;i++){
  createCard(cardContainer,parsePersons,i)
}
    </script>
</body>
</html>
