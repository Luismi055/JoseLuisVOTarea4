const TOKEN_API =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGQyNDUyOTM3Zjk4ZWY0ZTBmMGYxMzA2NzM5ODVjOSIsIm5iZiI6MTcxOTU4ODE1NC44Nzg0ODYsInN1YiI6IjY2NTNjZGEwMTM1NDVhZmYyODA1NzllYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WxRYBp35VOFURedFksCGPJYrxEFrTV68p8CjZfhB_0M";

  const basePathImg = "https://image.tmdb.org/t/p/original/";

  const app = document.getElementById("app");
  
  async function fetchData(route, method = "GET") {
    const url = `https://api.themoviedb.org/3/${route ? route : "movie/popular"}`;
  
    const res = await fetch(url, {
      method: method,
      headers: {
        Authorization: `Bearer ${TOKEN_API}`,
      },
    });
    const data = await res.json();
    return data;
  }
  
  async function getData() {
    const { results } = await fetchData();
    const container = document.createElement("div");
    container.className = "grid-container"; 
    results.forEach(({ backdrop_path, title, overview, poster_path }) => {
      const card = document.createElement("div");
      card.className = "card"; 
      card.innerHTML = `
          <div class="card__item">
              <img class="card__img_bg" src="${
                basePathImg + backdrop_path
              }" alt="${title}" />
              <div class="data_card">
                  <img class="card__img" src="${
                    basePathImg + poster_path
                  }" alt="${title}" />
                  <div class="data_text">
                      <h1>${title}</h1>
                      <p>${overview}</p>
                  </div>
              </div>
          </div>`;
      container.appendChild(card);
    });
    app.appendChild(container);
  }
  
  getData();