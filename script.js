async function searchMovies() {
    const query = document.getElementById('search').value;
    if (!query) return alert('Ingresa un nombre de película');

    const apiKey = 'ccdb285b'; // Reemplaza con tu API Key
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            displayMovies(data.Search);
        } else {
            document.getElementById('movies').innerHTML = '<p>No se encontraron resultados.</p>';
        }
    } catch (error) {
        console.error('Error al obtener los datos', error);
    }
}

function displayMovies(movies) {
    const container = document.getElementById('movies');
    container.innerHTML = movies.map(movie => `
        <div class="movie-card">
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h2>${movie.Title} (${movie.Year})</h2>
        </div>
    `).join('');
}
