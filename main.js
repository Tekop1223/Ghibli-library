var request = new XMLHttpRequest();

const app = document.querySelector("#root");
const logoContainer = document.createElement("div")
const logo = document.createElement("img");
const container = document.createElement("div");

container.setAttribute("class", "container");

logo.src =
  "https://studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_gold.png";

  app.appendChild(logoContainer);
  logoContainer.appendChild(logo)
 
  app.appendChild(container);
  


https: request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
request.onload = function () {
  var data = JSON.parse(this.response);
  
  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const headLine = document.createElement("div")
      headLine.innerHTML = movie.title
      headLine.setAttribute("class", "title")

      const RTscore = document.createElement("p")
      movie.rt_score = movie.rt_score.substring(0, 20)
      RTscore.textContent = `🍅 ${movie.rt_score}%`
      RTscore.setAttribute("class", "RTscore")

  
      const RuningTime = document.createElement("p")
      movie.running_time = movie.running_time.substring(0, 20) 
      RuningTime.textContent = `🎬 ${movie.running_time} mins`
      RuningTime.setAttribute("class", "runningtime")

      const url = document.createElement("a")
      url.href = movie.url
      url.innerText = `link `

      const p = document.createElement("p")
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`
      p.setAttribute("class", "description")

      const poster = document.createElement("img")
        poster.src = movie.image
        poster.classList.add("poster")
       
      container.appendChild(card)
      card.appendChild(headLine);  
      card.appendChild(poster)
      card.appendChild(p);
      card.appendChild(RTscore)
      card.appendChild(RuningTime)
      card.appendChild(url)
    });
  } else {
    console.log(error);
  }

  

  
};

request.send();
