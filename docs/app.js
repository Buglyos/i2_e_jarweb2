const cars = [
  {
    id: 1,
    plate: 'ABC123',
    name: 'Ford',
    model: 'Mustang',
    year: 2022
  },
  {
    id: 2,
    plate: 'DEF456',
    name: 'BMW',
    model: 'X5',
    year: 2021
  },
  {
    id: 3,
    plate: 'GHI789',
    name: 'Toyota',
    model: 'Camry',
    year: 2020
  },
  {
    id: 4,
    plate: 'JKL012',
    name: 'Honda',
    model: 'Civic',
    year: 2019
  },
  {
    id: 5,
    plate: 'MNO345',
    name: 'Nissan',
    model: 'Altima',
    year: 2018
  }
]

const gentemplate = (car) => {
  return `
        <div class="card m-2" style="width: 18rem;">
          <div class="card-body">
          <h2>${car.plate}</h2><p>    
          <p>Rendszám: ${car.id}<p>
          <p>Márka: ${car.name}<p>
          <p>Modell: ${car.model}<p>
          <p>Évjárat: ${car.year}<p>      
      </div>
    </div>`
}

const carsDiv = document.querySelector('#cars')

cars.forEach( (car)=> {
  console.log(car.name)
  carsDiv.innerHTML += template(car)

})