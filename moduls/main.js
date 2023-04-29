import data from './data.json' assert {type: 'json'};

const contenedor = document.getElementById('contenedor');

data.forEach((element)=>{
  contenedor.innerHTML += `
      <div class='note fondo'> 
        <p class='name_note color'> <img src="${element.icon}" alt=""> ${element.category}</p>
        <p class='note_score'>${element.score}/100</p>
      </div>
  `;
})

contenedor.innerHTML += `
  <button class='btn'>Continuar</button>
`;