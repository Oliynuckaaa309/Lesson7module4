
async function movieData(movieN) {
    const myKey = 'cf449f2f';
    const url = `http://www.omdbapi.com/?apikey=${myKey}&s=${movieN}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.Search)
        if (data.Search) {
            displayMovie(data.Search);
           
           
        } else {
            displayMovie([]);
        }
       
    }
    catch (err)
     { console.log('error', err);
     return [];
     
   }

}
function displayMovie(list){
    let container=document.getElementById('movie-container');
    container.innerHTML=''
    
    list.forEach((item)=>{
        const movieHTML = `
        <div class="card-film">
                    <img class="img" src="${item.Poster !== 'N/A' ? item.Poster : 'alternative_poster_url'}" alt="${item.Title} Poster">
                    <div class="title"> <h2  >${item.Title}</h2></div>
                    <p>Year: ${item.Year}</p>
                    <p class="p">Type: ${item.Type}</p>
                    <div>
                    <button class="btn" onclick="showMoreDetails('${item.imdbID}, ${item})}')">More Details</button></div>   
              </div>  `;
                
                container.innerHTML+=movieHTML;
    })
     
}

async function search(){
    const movieInput=document.getElementById('style2');
    const movieName=movieInput.value;
    movieData(movieName);

}



