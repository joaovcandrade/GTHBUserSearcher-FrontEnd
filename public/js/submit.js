document.getElementById("enviar")
.addEventListener('click', async (event)=>{
   const name = document.getElementById("name").value;
   
   if(name.trim() == ''){

    alert("digite um nome");

   }else{
    const response = await axios.post('http://localhost:3000/name', null, {headers: {'name': name}});
    const cardsArea = document.getElementById('results');
    
    cardsArea.innerHTML = '';

    if(response.data.length == 0){
      response.data= [{avatar_url:"./img/github_logo.png",
      login: "Nenhum resultado"}];
    };

    console.log(response.data);
    
    response.data.forEach(el => {       
      const div = document.createElement('div');
      div.innerHTML =
        `<div class="card mb-3 col-sm-12 col-md-6 m-2" style="max-width: 400px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${el.avatar_url}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${el.login}</h5>
            </div>
          </div>
        </div>
      </div>`;

      cardsArea.appendChild(div);
    });

   }
});