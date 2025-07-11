// Mock data for movies
const movies = [
    {
        id: 1,
        title: "Stree 2",
        genre: "Horror-Comedy",
        duration: "2h 25m",
        rating: 4.3,
        poster: "https://m.media-amazon.com/images/M/MV5BZTEyYzVjYjEtNWYzZi00NWRhLTgyZjUtNDlkZjBiNWIxYTEwXkEyXkFqcGc@._V1_.jpg",
        language: "Hindi",
        director: "Amar Kaushik",
        synopsis: "As the highly anticipated sequel to the cult favorite Stree, this film continues to mix spine-tingling supernatural elements with clever humor. Directed by Amar Kaushik, it further explores the legend of a mysterious female spirit who haunts a small town. With a blend of social commentary and engaging plot twists, Stree 2 has quickly become a favorite among audiences looking for both scares and laughs."
    },
    {
        id: 2,
        title: "Bhool Bhulaiyaa 3",
        genre: "Horror-Comedy/Thriller",
        duration: "2h 35m",
        rating: 4.2,
        poster: "https://m.media-amazon.com/images/M/MV5BYzBjYzM3OTctMzc3Yy00ZWQ0LWI2MzMtMGZjMTM4OGU1ZmI0XkEyXkFqcGc@._V1_QL75_UX1230_.jpg",
        language: "Hindi",
        director: "Anees Bazmee",
        synopsis: "Building on the legacy of its predecessors, Bhool Bhulaiyaa 3 brings a fresh take on the classic haunted-house narrative. The film interweaves elements of traditional folklore with modern cinematic techniques to create a maze of humor and suspense. The storyline follows characters entangled in a series of eerie events, making it a perfect mix of laughter and thrills."
    },
    {
        id: 3,
        title: "Singham Again",
        genre: "Action/Drama",
        duration: "2h 45m",
        rating: 4.5,
        poster: "https://m.media-amazon.com/images/M/MV5BMjQwZWQ2ODktM2ZmOS00Y2JmLThhN2UtNTg1NTg5NDc2OTdjXkEyXkFqcGc@._V1_.jpg",
        language: "Hindi",
        director: "Rohit Shetty",
        synopsis: "https://www.imdb.com/title/tt11976134/mediaviewer/rm1116365057/?ref_=tt_ov_i"
    },
    {
        id: 4,
        title: "Shaitaan",
        genre: "Thriller/Crime",
        duration: "2h 15m",
        rating: 4.4,
        poster: "https://m.media-amazon.com/images/M/MV5BODFkNDhiZDQtYTk5ZS00MDAxLThjYjItYTc5NWM1ZTU0OWUxXkEyXkFqcGc@._V1_.jpg",
        language: "Hindi",
        director: "Vikas Bahl",
        synopsis: "Shaitaan delves into the darker side of urban life, presenting a complex web of crime, deception, and redemption. Featuring powerhouse performances by actors like Ajay Devgn, R. Madhavan, and Jyotika, the film keeps viewers on the edge of their seats with its taut screenplay and unexpected twists."
    },
    {
        id: 5,
        title: "Fighter",
        genre: "Action/Adventure",
        duration: "2h 40m",
        rating: 4.6,
        poster: "https://upload.wikimedia.org/wikipedia/en/d/df/Fighter_film_teaser.jpg",
        language: "Hindi",
        director: "Siddharth Anand",
        synopsis: "Headlined by Hrithik Roshan, Fighter is a spectacle of modern action cinema. The film stands out for its breathtaking action sequences, innovative visual effects, and a storyline that intertwines personal drama with explosive combat. Celebrated for its technical brilliance, it offers audiences an immersive experience."
    },
    {
        id: 6,
        title: "Teri Baaton Mein Aisa Uljha Jiya",
        genre: "Romantic Drama/Comedy",
        duration: "2h 20m",
        rating: 4.1,
        poster: "hhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTeri_Baaton_Mein_Aisa_Uljha_Jiya&psig=AOvVaw2J13kx3smnZCKBrsdv87V7&ust=1743758421033000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjtm7PEu4wDFQAAAAAdAAAAABAE",
        language: "Hindi",
        director: "Amit Joshi",
        synopsis: "This film explores the complexities of modern relationships with a refreshing mix of romance and humor. Centering on the emotional journey of its protagonists, the story examines how communication and misunderstandings shape love in today's world."
    },
    {
        id: 7,
        title: "Munjya",
        genre: "Social Drama",
        duration: "2h 30m",
        rating: 4.3,
        poster: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bollywoodhungama.com%2Fmovie%2Fmunjya%2Fphotos%2F&psig=AOvVaw0xvC0Z1D5JZoZ2JWb-tD0a&ust=1742981284726000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjKwrf1pIwDFQAAAAAdAAAAABAE",
        language: "Hindi",
        director: "Nagraj Manjule",
        synopsis: "Munjya captivates audiences with its deep narrative centered on personal struggle and societal challenges. The film follows characters caught in difficult circumstances as they seek redemption and change. Its realistic portrayal of social issues makes it a significant addition to the new wave of Hindi cinema."
    },
    {
        id: 8,
        title: "Bad Newz",
        genre: "Comedy-Drama",
        duration: "2h 10m",
        rating: 4.0,
        poster: "https://picsum.photos/200/300?random=8",
        language: "Hindi",
        director: "Raj Mehta",
        synopsis: "Merging humor with poignant social commentary, Bad Newz takes a satirical look at contemporary societal norms. The film's witty script and engaging storyline highlight the absurdities of modern life while tackling serious themes."
    },
    {
        id: 9,
        title: "Article 370",
        genre: "Political Drama",
        duration: "2h 35m",
        rating: 4.4,
        poster: "https://picsum.photos/200/300?random=9",
        language: "Hindi",
        director: "Aditya Dhar",
        synopsis: "Article 370 boldly addresses complex political and historical issues. With a narrative that scrutinizes the impacts of landmark political decisions on everyday lives, the film offers both critique and insight. Its layered storytelling and powerful performances spark conversations around identity and governance."
    },
    {
        id: 10,
        title: "Kill",
        genre: "Action Thriller",
        duration: "2h 20m",
        rating: 4.2,
        poster: "https://picsum.photos/200/300?random=10",
        language: "Hindi",
        director: "Nikhil Advani",
        synopsis: "Kill has made a strong impact at the box office with its relentless pacing and high-stakes narrative. The film features a dark plot filled with twists, combining intense action sequences with deep dramatic undertones. Its innovative direction and dynamic character arcs keep audiences engaged."
    }
];

// Mock data for carousel
const carouselItems = [
    {
        title: "Singham Again",
        image: "https://picsum.photos/1200/400?random=1",
        description: "The return of India's most fearless cop",
        movieId: 3
    },
    {
        title: "Fighter",
        image: "https://picsum.photos/1200/400?random=2",
        description: "Experience the thrill of modern aerial combat",
        movieId: 5
    },
    {
        title: "Shaitaan",
        image: "https://picsum.photos/1200/400?random=3",
        description: "A gripping tale of crime and redemption",
        movieId: 4
    }
];

// Initialize carousel
function initCarousel() {
    const carousel = document.querySelector('.hero-carousel');
    let currentSlide = 0;

    function createCarouselItem(item) {
        return `
            <div class="carousel-item" style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${item.image}');
                background-size: cover;
                background-position: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                color: white;
                opacity: ${currentSlide === carouselItems.indexOf(item) ? 1 : 0};
                transition: opacity 0.5s ease;
            ">
                <h1>${item.title}</h1>
                <p>${item.description}</p>
                <button class="btn-primary">Book Now</button>
            </div>
        `;
    }

    // Add carousel items to DOM
    carousel.innerHTML = carouselItems.map(createCarouselItem).join('');

    // Auto-rotate carousel
    setInterval(() => {
        currentSlide = (currentSlide + 1) % carouselItems.length;
        updateCarousel();
    }, 5000);

    function updateCarousel() {
        const items = carousel.querySelectorAll('.carousel-item');
        items.forEach((item, index) => {
            item.style.opacity = index === currentSlide ? 1 : 0;
        });
    }
}

// Initialize movie grid
function initMovieGrid() {
    const movieGrid = document.querySelector('.movie-grid');
    
    function createMovieCard(movie) {
        return `
            <div class="movie-card" style="
                background: var(--light-bg);
                border-radius: 8px;
                overflow: hidden;
                transition: transform 0.3s ease;
                cursor: pointer;
            ">
                <img src="${movie.poster}" alt="${movie.title}" style="width: 100%; height: 300px; object-fit: cover;">
                <div class="movie-info" style="padding: var(--spacing-sm);">
                    <h3>${movie.title}</h3>
                    <div style="color: var(--text-secondary); font-size: 0.9rem;">
                        ${movie.genre} • ${movie.duration} • ${movie.language}
                    </div>
                    <div style="color: var(--secondary-color); margin: var(--spacing-xs) 0;">
                        ${'★'.repeat(Math.floor(movie.rating))}${'☆'.repeat(5-Math.floor(movie.rating))}
                    </div>
                    <div style="display: flex; gap: var(--spacing-xs); margin-top: var(--spacing-sm);">
                        <a href="movie-details.html?movieId=${movie.id}" class="btn-secondary" style="flex: 1; text-decoration: none; text-align: center;">Details</a>
                        <a href="booking.html?movieId=${movie.id}" class="btn-primary" style="flex: 1; text-decoration: none; text-align: center;">Book</a>
                    </div>
                </div>
            </div>
        `;
    }

    movieGrid.innerHTML = movies.map(createMovieCard).join('');

    // Add hover effect
    const movieCards = movieGrid.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
}

// Initialize search functionality
function initSearch() {
    const searchInput = document.querySelector('.search-container input');
    const filters = document.querySelectorAll('.filter');

    searchInput.addEventListener('input', (e) => {
        // Implement search functionality
        console.log('Searching for:', e.target.value);
    });

    filters.forEach(filter => {
        filter.addEventListener('change', (e) => {
            // Implement filter functionality
            console.log('Filter changed:', e.target.value);
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initMovieGrid();
    initSearch();
});
