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


const container = document.getElementById(`card-container`)

for (let i = 0; i < teamMembers.length; i++) {
  const { name, role, email, img } = teamMembers[i]


const card = `<div class="col-lg-4 col-md-6  mb-4">
                   <div class="card mt-5 d-flex flex-row bg-dark text-white">
                       <img src="./assets/${img}" alt="userimg">
                       <div class="card-body ">
                          <h5>${name}</h5> 
                           <p> ${role}</p>
                           <p class="text-info" > ${email}</p>
                     </div>
                    </div>
              </div>`
              container.innerHTML += card
}  









