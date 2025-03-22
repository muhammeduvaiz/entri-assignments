async function fetchMovie() {
    const movieName = document.getElementById('movieName').value;
    const apiKey = '357ad1aa'; 
    const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

    const movieDetails = document.getElementById('movieDetails');
    movieDetails.innerHTML = '';

    
    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.Response === "True") {
            movieDetails.innerHTML = `
                <h2>${data.Title} (${data.Year})</h2>
            
            `;
        } else {
            movieDetails.innerHTML = `<p style="color: red;">Movie not found. Please try again.</p>`;
        }
    } catch (error) {
        movieDetails.innerHTML = `<p style="color: red;">An error occurred. Please try again.</p>`;
        console.error("Error fetching the movie:", error);
    }
}
