
 const people = [
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
  
];

function populateTable() {
    const tableBody = document.getElementById("personData");

    for (const person of people) {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const ageCell = document.createElement("td");
        const placeCell = document.createElement("td");
        const  dobCell = document.createElement("td");

        nameCell.textContent = person.name;
        ageCell.textContent = person.age;
        placeCell.textContent= person.place;
        dobCell.textContent= person.dob;

        row.appendChild(nameCell);
        row.appendChild(ageCell);
        row.appendChild(placeCell);
        row.appendChild(dobCell);

        tableBody.appendChild(row);
    }
}


populateTable();
