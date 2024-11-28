const teamMembers = [
  {
    name: "Gustavo LaPizza",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Petra Sasso",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Franco Forte",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Guido LaBarca",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//devo creare una funzione che mi permetta di inserire una card per ogni oggetto dell'array, all'interno della quale devo destrutturare l'oggetto per poterne ricavare i singoli parametri

const nuovaCardTeam = (membro) => {

  const {name, role, email, image} = membro;
  
    
  return  `<div class="card" style="width: 18rem;">
              <img src=${image} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${role}</p>
                    <p class="card-text">${email}</p>
                </div>
            </div>`
}

//ora posso inserire le cards all'interno dell'html, ciclando l'array il quale ad ogni giro invocherà la funzione per creare una nuova card tramite un ciclo for of.`

const teamCards = (teamMembers) => {
  
  let cards = '';

  for ( let membro of teamMembers){
    cards += nuovaCardTeam(membro);
  }

  document.getElementById('inserirecards').innerHTML = cards;
}

teamCards(teamMembers)