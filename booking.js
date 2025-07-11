// Mock data for movies
const movies = [
    {
        id: 1,
        title: "The Dark Knight Returns",
        genre: "Action",
        duration: "2h 45m",
        rating: 4.8,
        poster: "https://picsum.photos/200/300",
        language: "English",
    },
    {
        id: 2,
        title: "Inception",
        genre: "Sci-Fi",
        duration: "2h 28m",
        rating: 4.7,
        poster: "https://picsum.photos/200/300",
        language: "English",
    },
    // Add more movies as needed
];

// Get movie details from URL parameters
function getMovieFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('movieId');
    return movies.find(movie => movie.id === parseInt(movieId)) || movies[0]; // Default to first movie if not found
}

// Initialize booking page
function initBookingPage() {
    const movie = getMovieFromUrl();

    // Set movie details
    document.querySelector('.movie-poster').innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
    `;
    document.querySelector('.movie-title').textContent = movie.title;
    document.querySelector('.movie-meta').innerHTML = `
        <div>${movie.genre} • ${movie.duration} • ${movie.language}</div>
        <div style="color: var(--secondary-color); margin-top: 8px;">
            ${'★'.repeat(Math.floor(movie.rating))}${'☆'.repeat(5-Math.floor(movie.rating))}
        </div>
    `;

    generateDates();
    generateTimes();
    generateTheaters();
    generateSeats();
    setupPaymentButton();
}

// Generate dates for next 7 days
function generateDates() {
    const dateSlots = document.querySelector('.date-slots');
    const dates = [];
    
    for(let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        dates.push(date);
    }
    
    dateSlots.innerHTML = dates.map((date, index) => `
        <div class="date-slot ${index === 0 ? 'active' : ''}" data-date="${date.toISOString()}">
            <div>${date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
            <div>${date.getDate()}</div>
            <div>${date.toLocaleDateString('en-US', { month: 'short' })}</div>
        </div>
    `).join('');

    // Add click event listeners
    dateSlots.querySelectorAll('.date-slot').forEach(slot => {
        slot.addEventListener('click', (e) => {
            dateSlots.querySelector('.active')?.classList.remove('active');
            slot.classList.add('active');
            updateSummary();
        });
    });
}

// Generate show times
function generateTimes() {
    const timeSlots = document.querySelector('.time-slots');
    const times = ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM', '10:00 PM'];
    
    timeSlots.innerHTML = times.map((time, index) => `
        <div class="time-slot ${index === 0 ? 'active' : ''}" data-time="${time}">
            ${time}
        </div>
    `).join('');

    // Add click event listeners
    timeSlots.querySelectorAll('.time-slot').forEach(slot => {
        slot.addEventListener('click', (e) => {
            timeSlots.querySelector('.active')?.classList.remove('active');
            slot.classList.add('active');
            updateSummary();
        });
    });
}

// Generate theaters
function generateTheaters() {
    const theaterSelect = document.getElementById('theater-select');
    const theaters = [
        'Cineplex Downtown',
        'MovieMax Central',
        'Star Cinemas',
        'IMAX Theater'
    ];
    
    theaterSelect.innerHTML = theaters.map(theater => 
        `<option value="${theater}">${theater}</option>`
    ).join('');
    
    theaterSelect.addEventListener('change', updateSummary);
}

// Generate seats
function generateSeats() {
    const seatsContainer = document.querySelector('.seats-container');
    const rows = 8;
    const cols = 10;
    seatsContainer.innerHTML = '';
    
    // Create seat layout
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            const seat = document.createElement('div');
            const seatNumber = `${String.fromCharCode(65 + i)}${j + 1}`;
            
            // Randomly assign seat status
            const random = Math.random();
            if(random < 0.2) {
                seat.className = 'seat booked';
            } else if(random < 0.3) {
                seat.className = 'seat vip available';
            } else {
                seat.className = 'seat available';
            }
            
            seat.dataset.seat = seatNumber;
            
            // Add click event for available seats
            if(!seat.classList.contains('booked')) {
                seat.addEventListener('click', () => {
                    seat.classList.toggle('selected');
                    updateSummary();
                });
            }
            
            seatsContainer.appendChild(seat);
        }
    }
}

// Update booking summary
function updateSummary() {
    const selectedDate = document.querySelector('.date-slot.active')?.dataset.date;
    const selectedTime = document.querySelector('.time-slot.active')?.dataset.time;
    const selectedTheater = document.getElementById('theater-select').value;
    const selectedSeats = document.querySelectorAll('.seat.selected');
    
    const summaryDetails = document.querySelector('.summary-details');
    const proceedButton = document.querySelector('.proceed-payment');
    const totalAmount = document.querySelector('.total-amount .amount');
    
    if(selectedDate && selectedTime && selectedTheater && selectedSeats.length > 0) {
        const date = new Date(selectedDate);
        const seatPrice = 250; // Regular seat price in rupees
        const vipPrice = 400;  // VIP seat price in rupees
        
        let total = 0;
        const seatNumbers = Array.from(selectedSeats).map(seat => {
            const price = seat.classList.contains('vip') ? vipPrice : seatPrice;
            total += price;
            return seat.dataset.seat;
        });
        
        summaryDetails.innerHTML = `
            <p><strong>Date:</strong> ${date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Time:</strong> ${selectedTime}</p>
            <p><strong>Theater:</strong> ${selectedTheater}</p>
            <p><strong>Selected Seats:</strong> ${seatNumbers.join(', ')}</p>
            <p><strong>Regular Price:</strong> ₹${seatPrice}/seat</p>
            <p><strong>VIP Price:</strong> ₹${vipPrice}/seat</p>
        `;
        
        totalAmount.textContent = `₹${total.toFixed(2)}`;
        proceedButton.disabled = false;
    } else {
        summaryDetails.innerHTML = '<p>Please select date, time, theater, and seats to proceed.</p>';
        totalAmount.textContent = '₹0.00';
        proceedButton.disabled = true;
    }
}

// Setup payment button
function setupPaymentButton() {
    const proceedButton = document.querySelector('.proceed-payment');
    proceedButton.addEventListener('click', () => {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        if(selectedSeats.length > 0) {
            window.location.href = 'payment.html?' + new URLSearchParams({
                seats: Array.from(selectedSeats).map(seat => seat.dataset.seat).join(','),
                amount: document.querySelector('.total-amount .amount').textContent.replace('₹', ''),
                movieId: getMovieFromUrl().id,
                date: document.querySelector('.date-slot.active').dataset.date,
                time: document.querySelector('.time-slot.active').dataset.time,
                theater: document.getElementById('theater-select').value
            }).toString();
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initBookingPage);
