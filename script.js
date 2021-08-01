const menuItem = document.querySelectorAll('.menu-item');
let slide;
const containerMain = document.querySelector('.container-main');

const foods = [
  {
    nome: 'hamburguer',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, vitae quasi rerum excepturi hic molestiae ipsa porro nam alias fugit, optio magni! Unde optio totam repellat corporis aut officiis minus!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, vitae quasi rerum excepturi hic molestiae ipsa porro nam alias fugit, optio magni! Unde optio totam repellat corporis aut officiis minus!',
    imagem: './img/hamburguer.svg'
  },
  {
    nome: 'ice-cream',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, vitae quasi rerum excepturi hic molestiae ipsa porro nam alias fugit, optio magni! Unde optio totam repellat corporis aut officiis minus!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, vitae quasi rerum excepturi hic molestiae ipsa porro nam alias fugit, optio magni! Unde optio totam repellat corporis aut officiis minus!',
    imagem: './img/ice-cream.svg'
  },
  {
    nome: 'juice',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, vitae quasi rerum excepturi hic molestiae ipsa porro nam alias fugit, optio magni! Unde optio totam repellat corporis aut officiis minus!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, vitae quasi rerum excepturi hic molestiae ipsa porro nam alias fugit, optio magni! Unde optio totam repellat corporis aut officiis minus!',
    imagem: './img/juice.svg'
  },
  {
    nome: 'salad',
    desc: 'Laranja Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, vitae quasi rerum excepturi hic molestiae ipsa porro nam alias fugit, optio magni! Unde optio totam repellat corporis aut officiis minus!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, vitae quasi rerum excepturi hic molestiae ipsa porro nam alias fugit, optio magni! Unde optio totam repellat corporis aut officiis minus!',
    imagem: './img/salad.svg'
  },

]

function showFood() {
  clearInterval(slide)

  const foodId = this.classList[1];

  const selectFood = foods.filter(food => food.nome === foodId);
  
  const descricao = selectFood[0].desc;
  const img = selectFood[0].imagem;
  
  containerMain.innerHTML = `
  <div class="container-food active">
    <div class="title-main">
      ${descricao}
    </div>
    <div >
      <img class="img-food" src='${img}'>
    </div>
  </div>
    `;
  
}

menuItem.forEach(item => {
  item.addEventListener('click', showFood)
})

function slideFood() {
  let index = 0;

  slide = setInterval(() => {
 
    index = index % foods.length;
        
    const descricao = foods[index].desc;
    const img = foods[index].imagem;
    
    containerMain.innerHTML = `
    <div class="container-food active">
      <div class="title-main">
        ${descricao}
      </div>
      <div >
        <img class="img-food" src='${img}'>
      </div>
    </div>
      `;
    
    index += 1;
   
  }, 1800);
}

slideFood(); 