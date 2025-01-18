// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
// Bonus: Rendere l’esercizio responsive, mandando a capo le card

// ho un array di oggetti
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
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
    name: "Roberto Lorem",
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

// Gestione del Dom
const cards = document.getElementById('card-section') //richiamo sezione card

//variabile items vuota da riempire
let items = ''

// ciclo su team Members
for(let i = 0; i < teamMembers.length; i++){
  // mi ricavo l'elementoiesimo
  const member = teamMembers[i];

  console.log(member);
  
  // aggiorno il valore di items
  items += generatemembercard(member);
}
console.log(items);

// stampo dati in uscita in html
cards.innerHTML = items


// FUNCTION
//funzione per generare singola menmber card
function generatemembercard(membObj){
  
  // mi salvo ogni proprietà di membObj con la proprietà destructuring
  const {name, role, email, img} = membObj;
  
  //ritorno il codice html con le proprietà nelle relative posizioni

   return `
                <!-- Card -->
                <div  class="col-sm-12 col-md-6 col-lg-4">
                    <!-- Riga con immagine e descrizione -->
                    <div class="row">

                        <!-- Colonna immagine -->
                        <div class="col-3 p-0 ">
                            <img class="image-fit "src="./${img}">
                        </div>

                        <!-- Colonna descrizione -->
                        <div class="col-9 py-1 px-3 text-start bg-black text-light">
                            <h2>${name}</h2>
                            <p>${role}</p>
                            <a href="#" class="text-light">${email}</a>
                        </div>
                    </div>
                </div>
                `;
}