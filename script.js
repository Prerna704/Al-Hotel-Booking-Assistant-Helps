// DOM Elements
const chatMessages = document.getElementById('chat-messages');
const typingIndicator = document.getElementById('typing');
const userInput = document.getElementById('user-input');

// API Configuration
const API_KEY = 'Wbr6At0qIjMAdFmZoAzEerfS9BGdA6YQ';
const API_SECRET = 'eBPNFeLGQL3OdU0O';
let accessToken = 'ZovY1Abuulvjbss6hFVZFiwG8rQx';

// Sample hotel data
const sampleHotelData = {
    popular_destinations: [
        // Luxury hotels
        { name: "Taj Bekal Resort & Spa", location: "Kasaragod, Kerala", price: 22000, currency: "INR", rating: 4.8, amenities: ["Backwaters", "Luxury", "Private Pool Villas", "Ayurvedic Spa"], image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" },
        { name: "Hyatt Regency Amritsar", location: "Amritsar, Punjab", price: 16000, currency: "INR", rating: 4.7, amenities: ["Golden Temple View", "Luxury", "Spa", "Rooftop Dining"], image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" },
        { name: "Taj Corbett Resort & Spa", location: "Jim Corbett, Uttarakhand", price: 19000, currency: "INR", rating: 4.6, amenities: ["Jungle Safari", "Luxury", "Spa", "Private Cottages"], image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" },
        { name: "Radisson Blu Guwahati", location: "Guwahati, Assam", price: 12000, currency: "INR", rating: 4.5, amenities: ["Luxury", "River View", "Spa", "Rooftop Pool"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
        { name: "Grand Hyatt Goa", location: "Goa", price: 20000, currency: "INR", rating: 4.8, amenities: ["Beachfront", "Luxury", "Private Beach", "Infinity Pool"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
        // Additional hotels...
        { name: "The Oberoi Udaivilas", location: "Udaipur, Rajasthan", price: 55000, currency: "INR", rating: 5.0, amenities: ["Lake View", "Luxury", "Spa", "Private Boat Ride"], image: "https://images.unsplash.com/photo-1584121233205-35c89b9845a7" },
        { name: "Alila Diwa Goa", location: "Majorda, Goa", price: 27000, currency: "INR", rating: 4.7, amenities: ["Luxury", "Beach Access", "Yoga", "Infinity Pool"], image: "https://images.unsplash.com/photo-1581313902468-cd306cfdfed4" },
        { name: "Leela Palace", location: "New Delhi", price: 50000, currency: "INR", rating: 4.9, amenities: ["Luxury", "Spa", "Rooftop Pool", "Fine Dining"], image: "https://images.unsplash.com/photo-1581313902468-cd306cfdfed4" },
        { name: "The Taj Mahal Hotel", location: "New Delhi", price: 43000, currency: "INR", rating: 4.8, amenities: ["Luxury", "Rooftop Bar", "Spa", "Fine Dining"], image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" },
        { name: "The St. Regis", location: "Mumbai, Maharashtra", price: 50000, currency: "INR", rating: 4.9, amenities: ["Luxury", "Seafront", "Spa", "Fine Dining"], image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" },
        { name: "The Westin", location: "Kolkata, West Bengal", price: 17000, currency: "INR", rating: 4.6, amenities: ["Luxury", "Spa", "Pool", "Fitness Center"], image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" },
        // Additional Hotels...
        { name: "Treebo Trend", location: "Mumbai, Maharashtra", price: 2500, currency: "INR", rating: 3.9, amenities: ["Budget", "Clean Rooms", "Free WiFi", "Breakfast"], image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" },
        { name: "OYO Townhouse", location: "Bengaluru, Karnataka", price: 1800, currency: "INR", rating: 3.7, amenities: ["Budget", "Smart Rooms", "Café", "Free WiFi"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
        { name: "FabHotel", location: "Delhi", price: 2200, currency: "INR", rating: 3.8, amenities: ["Budget", "Complimentary Breakfast", "Free WiFi"], image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" },
        { name: "Hotel Supreme", location: "Jaipur, Rajasthan", price: 1500, currency: "INR", rating: 3.5, amenities: ["Budget", "City Center", "Basic Amenities"], image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" },
        { name: "Hotel Sapphire", location: "Goa", price: 2000, currency: "INR", rating: 3.6, amenities: ["Budget", "Near Beach", "AC Rooms"], image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be" },
        // Additional hotels...
        { name: "Hotel Empire", location: "Bengaluru, Karnataka", price: 1800, currency: "INR", rating: 3.6, amenities: ["Basic", "Clean Rooms", "Free WiFi"], image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" },
        { name: "Hotel Rainbow", location: "Chennai, Tamil Nadu", price: 2000, currency: "INR", rating: 3.7, amenities: ["Budget", "Near Station", "Restaurant"], image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" },
        { name: "OYO Rooms", location: "Kochi, Kerala", price: 1600, currency: "INR", rating: 3.5, amenities: ["Budget", "Basic Amenities", "Free WiFi"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
        { name: "Hotel River View", location: "Varanasi, Uttar Pradesh", price: 1300, currency: "INR", rating: 3.4, amenities: ["Budget", "Ghat View", "Complimentary Breakfast"], image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" },
        { name: "Hotel City Inn", location: "Jaipur, Rajasthan", price: 1800, currency: "INR", rating: 3.8, amenities: ["Budget", "Free WiFi", "City Center"], image: "https://images.unsplash.com/photo-1581313902468-cd306cfdfed4" },
        { name: "Hotel Lotus", location: "Kochi, Kerala", price: 1500, currency: "INR", rating: 3.6, amenities: ["Basic", "Free WiFi", "AC Rooms"], image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" },
        // Additional Hotels...
        { name: "Taj Bekal Resort & Spa", location: "Kasaragod, Kerala", price: 22000, currency: "INR", rating: 4.8, amenities: ["Backwaters", "Luxury", "Private Pool Villas", "Ayurvedic Spa"], image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" },
        { name: "Hyatt Regency Amritsar", location: "Amritsar, Punjab", price: 16000, currency: "INR", rating: 4.7, amenities: ["Golden Temple View", "Luxury", "Spa", "Rooftop Dining"], image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" },
        { name: "Taj Corbett Resort & Spa", location: "Jim Corbett, Uttarakhand", price: 19000, currency: "INR", rating: 4.6, amenities: ["Jungle Safari", "Luxury", "Spa", "Private Cottages"], image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" },
        { name: "Radisson Blu Guwahati", location: "Guwahati, Assam", price: 12000, currency: "INR", rating: 4.5, amenities: ["Luxury", "River View", "Spa", "Rooftop Pool"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
        { name: "Grand Hyatt Goa", location: "Goa", price: 20000, currency: "INR", rating: 4.8, amenities: ["Beachfront", "Luxury", "Private Beach", "Infinity Pool"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
        { name: "Taj Mahal Palace", location: "Mumbai, Maharashtra", price: 25000, currency: "INR", rating: 4.9, amenities: ["Luxury", "Sea View", "Heritage", "Spa", "Fine Dining"], image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" },
        { name: "The Oberoi Amarvilas", location: "Agra, Uttar Pradesh", price: 45000, currency: "INR", rating: 4.9, amenities: ["Taj Mahal View", "Luxury", "Private Pool", "Butler Service"], image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be" },
        { name: "Taj Falaknuma Palace", location: "Hyderabad, Telangana", price: 38000, currency: "INR", rating: 4.8, amenities: ["Palace Hotel", "Luxury", "Historic", "Horse Carriage Rides"], image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" },
        { name: "The Leela Palace", location: "Bengaluru, Karnataka", price: 22000, currency: "INR", rating: 4.7, amenities: ["Luxury", "Spa", "Infinity Pool", "Gardens"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
        { name: "Rambagh Palace", location: "Jaipur, Rajasthan", price: 32000, currency: "INR", rating: 4.8, amenities: ["Former Royal Residence", "Luxury", "Spa", "Fine Dining"], image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" },

        // Business hotels
        { name: "ITC Grand Chola", location: "Chennai, Tamil Nadu", price: 15000, currency: "INR", rating: 4.7, amenities: ["Business Center", "Spa", "Multiple Restaurants", "Pool"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
        { name: "The Lalit New Delhi", location: "New Delhi", price: 12000, currency: "INR", rating: 4.5, amenities: ["Central Location", "Conference Rooms", "Spa", "Roof Top Pool"], image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be" },
        { name: "Hyatt Regency", location: "Pune, Maharashtra", price: 10000, currency: "INR", rating: 4.4, amenities: ["Business Facilities", "Fitness Center", "Multiple Dining Options"], image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" },

        // Heritage properties
        { name: "Taj Lake Palace", location: "Udaipur, Rajasthan", price: 35000, currency: "INR", rating: 4.9, amenities: ["Lake View", "Luxury", "Boat Transfer", "Royal Experience"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
        { name: "The Gateway Hotel", location: "Mahabalipuram, Tamil Nadu", price: 8000, currency: "INR", rating: 4.3, amenities: ["Beach Access", "Heritage", "Pool", "Spa"], image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" },
        { name: "Wildflower Hall", location: "Shimla, Himachal Pradesh", price: 28000, currency: "INR", rating: 4.7, amenities: ["Mountain View", "Luxury", "Spa", "Adventure Activities"], image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" }
    ],
    budget_options: [
        // Budget chains
        { name: "Treebo Trend", location: "Mumbai, Maharashtra", price: 2500, currency: "INR", rating: 3.9, amenities: ["Budget", "Clean Rooms", "Free WiFi", "Breakfast"], image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" },
        { name: "OYO Townhouse", location: "Bengaluru, Karnataka", price: 1800, currency: "INR", rating: 3.7, amenities: ["Budget", "Smart Rooms", "Café", "Free WiFi"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
        { name: "FabHotel", location: "Delhi", price: 2200, currency: "INR", rating: 3.8, amenities: ["Budget", "Complimentary Breakfast", "Free WiFi"], image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" },

        // State-specific budget options
        { name: "Hotel Supreme", location: "Jaipur, Rajasthan", price: 1500, currency: "INR", rating: 3.5, amenities: ["Budget", "City Center", "Basic Amenities"], image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" },
        { name: "Hotel Sapphire", location: "Goa", price: 2000, currency: "INR", rating: 3.6, amenities: ["Budget", "Near Beach", "AC Rooms"], image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be" },
        { name: "Hotel Hill View", location: "Darjeeling, West Bengal", price: 1800, currency: "INR", rating: 3.4, amenities: ["Budget", "Mountain View", "Basic Amenities"], image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" },
        { name: "Hotel Ganges View", location: "Varanasi, Uttar Pradesh", price: 1200, currency: "INR", rating: 3.2, amenities: ["Budget", "Ghat View", "Basic Amenities"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
        { name: "Hotel Kerala House", location: "Kochi, Kerala", price: 1500, currency: "INR", rating: 3.5, amenities: ["Budget", "Traditional Decor", "Homely Food"], image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" },

        // Mid-range options
        { name: "Lemon Tree Premier", location: "Chennai, Tamil Nadu", price: 4500, currency: "INR", rating: 4.1, amenities: ["Comfortable", "Pool", "Restaurant", "Fitness Center"], image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" },
        { name: "Radisson Blu", location: "Guwahati, Assam", price: 5000, currency: "INR", rating: 4.2, amenities: ["Comfortable", "River View", "Restaurant", "Bar"], image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be" },
        { name: "Fortune Park", location: "Bhopal, Madhya Pradesh", price: 4000, currency: "INR", rating: 4.0, amenities: ["Business Hotel", "Conference Facilities", "Restaurant"], image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" }
    ],
    beach_resorts: [
        { name: "Taj Exotica Resort & Spa", location: "Goa", price: 18000, currency: "INR", rating: 4.7, amenities: ["Beachfront", "Luxury", "Spa", "Water Sports"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
        { name: "The Leela Kovalam", location: "Kovalam, Kerala", price: 15000, currency: "INR", rating: 4.6, amenities: ["Cliff-top Location", "Ayurveda Spa", "Private Beach"], image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" },
        { name: "Taj Fisherman's Cove", location: "Chennai, Tamil Nadu", price: 12000, currency: "INR", rating: 4.5, amenities: ["Beach Resort", "Spa", "Water Sports"], image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" },
        { name: "Radisson Blu Resort", location: "Goa", price: 16000, currency: "INR", rating: 4.5, amenities: ["Beachfront", "Luxury", "Restaurant", "Spa"], image: "https://images.unsplash.com/photo-1581313902468-cd306cfdfed4" },
        { name: "Marriott Resort", location: "Kochi, Kerala", price: 17000, currency: "INR", rating: 4.8, amenities: ["Beach Access", "Infinity Pool", "Spa"], image: "https://images.unsplash.com/photo-1584121233205-35c89b9845a7" },
        // Additional hotels...
        { name: "Leela Goa", location: "Majorda, Goa", price: 25000, currency: "INR", rating: 5.0, amenities: ["Beachfront", "Luxury", "Water Sports"], image: "https://images.unsplash.com/photo-1581313902468-cd306cfdfed4" },
        { name: "Holiday Inn", location: "Bengaluru, Karnataka", price: 20000, currency: "INR", rating: 4.7, amenities: ["Beach View", "Luxury", "Pool"], image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" },
        // Additional Hotels...
        { name: "Taj Exotica Resort & Spa", location: "Goa", price: 18000, currency: "INR", rating: 4.7, amenities: ["Beachfront", "Luxury", "Spa", "Water Sports"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
        { name: "The Leela Kovalam", location: "Kovalam, Kerala", price: 15000, currency: "INR", rating: 4.6, amenities: ["Cliff-top Location", "Ayurveda Spa", "Private Beach"], image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" },
        { name: "Taj Fisherman's Cove", location: "Chennai, Tamil Nadu", price: 12000, currency: "INR", rating: 4.5, amenities: ["Beach Resort", "Spa", "Water Sports"], image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" }
    ],
    hill_stations: [
        { name: "Wildflower Hall", location: "Shimla, Himachal Pradesh", price: 28000, currency: "INR", rating: 4.7, amenities: ["Mountain View", "Luxury", "Spa", "Adventure Activities"], image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" },
        { name: "Windamere Hotel", location: "Darjeeling, West Bengal", price: 8000, currency: "INR", rating: 4.3, amenities: ["Heritage", "Mountain View", "Old World Charm"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
        { name: "The Tamara Coorg", location: "Coorg, Karnataka", price: 22000, currency: "INR", rating: 4.6, amenities: ["Luxury", "Coffee Plantation", "Spa", "Nature Walks"], image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" }
    ],
    heritage_properties: [
        { name: "Taj Umaid Bhawan Palace", location: "Jodhpur, Rajasthan", price: 40000, currency: "INR", rating: 4.9, amenities: ["Royal Palace", "Luxury", "Museum", "Spa"], image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" },
        { name: "The Paul Bangalore", location: "Bengaluru, Karnataka", price: 10000, currency: "INR", rating: 4.4, amenities: ["Art Hotel", "Luxury", "Spa", "Fine Dining"], image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be" },
        { name: "Ahilya Fort", location: "Maheshwar, Madhya Pradesh", price: 15000, currency: "INR", rating: 4.5, amenities: ["Fort Hotel", "Narmada River View", "Cultural Experience"], image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" }
    ]
};

// App State
let currentCategory = null;
let currentOffset = 0;
let savedHotels = [];
let userPreferences = {
    budget: null,
    travelDates: null,
    preferredDestinations: []
};

// Initialize the app
async function init() {
    // Try to get Amadeus API token
    try {
        const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`
        });

        const data = await response.json();
        accessToken = data.access_token;
        console.log("Amadeus API connected successfully");
    } catch (error) {
        console.error("Error connecting to Amadeus API. Using sample data.", error);
    }

    displayMainMenu();
}

// Message Functions
function createMessage(content, isUser = false, options = []) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    if (isUser) messageDiv.classList.add('user-message');
    messageDiv.innerHTML = content;

    if (options.length > 0) {
        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('options-container');
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.classList.add('option-btn');
            btn.innerHTML = `${opt.icon ? opt.icon : ''} ${opt.text}`;
            btn.onclick = () => handleOptionClick(opt.action, opt.data);
            optionsContainer.appendChild(btn);
        });
        messageDiv.appendChild(optionsContainer);
    }

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
    typingIndicator.style.display = 'flex';
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTyping() {
    typingIndicator.style.display = 'none';
}

// UI Functions
function displayMainMenu() {
    currentCategory = null;
    currentOffset = 0;
    createMessage(`🏨 Welcome to your AI Hotel Booking Assistant! How can I help you find your perfect stay?`, false, [
        { text: 'Beach Resorts', icon: '<i class="fas fa-umbrella-beach"></i>', action: 'beach_resorts' },
        { text: 'Hill Stations', icon: '<i class="fas fa-mountain"></i>', action: 'hill_stations' },
        { text: 'Heritage Stays', icon: '<i class="fas fa-landmark"></i>', action: 'heritage_properties' },
        { text: 'Set Preferences', icon: '<i class="fas fa-cog"></i>', action: 'set_preferences' }
    ]);
}
// Hotel Search Functions
async function searchHotels(location, checkIn = null, checkOut = null) {
    showTyping();

    try {
        let hotels = [];

        if (accessToken) {
            try {
                // First try to get IATA city code if location is a city name
                let cityCode = location;

                // If location is not a 3-letter IATA code, try to find the code
                if (location.length !== 3 || !/^[A-Z]{3}$/i.test(location)) {
                    const cityResponse = await fetch(`https://test.api.amadeus.com/v1/reference-data/locations/cities?keyword=${encodeURIComponent(location)}`, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    });

                    if (cityResponse.ok) {
                        const cityData = await cityResponse.json();
                        if (cityData.data && cityData.data.length > 0) {
                            cityCode = cityData.data[0].iataCode;
                        }
                    }
                }

                // Use Amadeus API v2 which has better hotel search capabilities
                let url = `https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=${cityCode}`;

                // Add additional parameters
                if (checkIn && checkOut) {
                    url += `&checkInDate=${checkIn}&checkOutDate=${checkOut}`;
                }

                // Add currency and ratings filters
                url += '&currency=INR&ratings=1,2,3,4,5&radius=50&radiusUnit=KM';

                const response = await fetch(url, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });

                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }

                const data = await response.json();

                if (data.data && data.data.length > 0) {
                    hotels = data.data.map(hotel => ({
                        name: hotel.hotel.name || 'Unknown Hotel',
                        location: `${hotel.hotel.address.cityName || location}, ${hotel.hotel.address.countryCode || 'India'}`,
                        price: hotel.offers[0]?.price?.total || 'Price not available',
                        currency: hotel.offers[0]?.price?.currency || 'INR',
                        rating: hotel.hotel.rating || (Math.random() * 2 + 3).toFixed(1),
                        amenities: hotel.hotel.amenities || ["Free WiFi", "24h Reception"],
                        image: hotel.hotel.media?.[0]?.uri || 'https://via.placeholder.com/300'
                    }));
                }
            } catch (apiError) {
                console.error("Amadeus API error:", apiError);
                // Continue to fallback data
            }
        }

        // Fallback to sample data if API fails or returns no results
        if (hotels.length === 0) {
            console.log("Using sample data as fallback");
            // Combine all hotel categories
            hotels = [
                ...sampleHotelData.popular_destinations,
                ...sampleHotelData.budget_options,
                ...sampleHotelData.beach_resorts,
                ...sampleHotelData.hill_stations,
                ...sampleHotelData.heritage_properties
            ];

            // Filter by location if possible
            if (location) {
                hotels = hotels.filter(h =>
                    h.location.toLowerCase().includes(location.toLowerCase())
                );
            }
        }

        hideTyping();

        if (hotels.length === 0) {
            createMessage(`🔍 No hotels found in ${location}. Try another destination.`, false, [
                { text: 'Try Another Search', icon: '<i class="fas fa-search"></i>', action: 'search_hotels' },
                { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
            ]);
            return;
        }

        // Display hotel results
        const hotelsList = hotels.slice(0, 5).map(hotel => `
            <div class="hotel-card"><img src="${hotel.image}" alt="${hotel.name}" class="hotel-image" style="width:400px;height:200px;object-fit:cover;border-radius:8px;margin-bottom:10px;">
        <h3>${hotel.name}</h3>
                <p>📍 ${hotel.location}</p>
                <p class="price">${hotel.currency} ${hotel.price}</p>
                <p class="rating">⭐ ${hotel.rating}/5.0</p>
                <div class="amenities">${hotel.amenities.map(a => `<span class="amenity">${a}</span>`).join(' ')}</div>
            </div>
        `).join('');


        createMessage(`🏨 Hotels in ${location}:<br>${hotelsList}`, false, [
            { text: 'View More', icon: '<i class="fas fa-arrow-down"></i>', action: 'view_more', data: { location, hotels } },
            { text: 'Search Again', icon: '<i class="fas fa-search"></i>', action: 'search_hotels' },
            { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
        ]);

    } catch (error) {
        console.error("Error in searchHotels:", error);
        hideTyping();
        createMessage(`⚠️ Sorry, we encountered an error. Here are some sample hotels:`, false);
        displaySampleHotels();
    }
}
function displaySampleHotels() {
    const hotels = sampleHotelData.popular_destinations.slice(0, 3);
    const hotelsList = hotels.map(hotel => `
        <div class="hotel-card">
            <h3>${hotel.name}</h3>
            <p>📍 ${hotel.location}</p>
            <p class="price">${hotel.currency} ${hotel.price}</p>
            <p class="rating">⭐ ${hotel.rating}/5.0</p>
            <p>${hotel.amenities.map(a => `<span class="amenity">${a}</span>`).join(' ')}</p>
        </div>
    `).join('');

    createMessage(hotelsList, false, [
        { text: 'Search Hotels', icon: '<i class="fas fa-search"></i>', action: 'search_hotels' },
        { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
    ]);
}

// Event Handlers
function handleOptionClick(action, data = null) {
    showTyping();

    setTimeout(async () => {
        hideTyping();

        switch (action) {
            case 'main':
                displayMainMenu();
                break;

            case 'search_hotels':
                createMessage(`🌍 Enter a city to search for hotels (e.g., "Paris" or "New York"):`, false, [
                    { text: 'Back', icon: '<i class="fas fa-arrow-left"></i>', action: 'main' }
                ]);
                break;

            case 'popular_destinations':
                searchHotels('LON'); // London
                break;

            case 'budget_options':
                searchHotels('PAR'); // Paris
                break;

            case 'luxury_hotels':
                searchHotels('DXB'); // Dubai
                break;
            case 'beach_resorts':
                searchHotels('Goa'); // Default beach destination
                break;

            case 'hill_stations':
                searchHotels('Shimla'); // Default hill station
                break;

            case 'heritage_properties':
                searchHotels('Jaipur'); // Default heritage city
                break;

            case 'view_saved':
                if (savedHotels.length === 0) {
                    createMessage(`❤ You haven't saved any hotels yet!`, false, [
                        { text: 'Browse Hotels', icon: '<i class="fas fa-hotel"></i>', action: 'main' }
                    ]);
                } else {
                    const savedList = savedHotels.map(h =>
                        `<div class="hotel-card">
                            <h3>${h.name}</h3>
                            <p>📍 ${h.location}</p>
                            <p class="price">${h.currency} ${h.price}</p>
                        </div>`
                    ).join('');

                    createMessage(`❤ Your saved hotels:<br>${savedList}`, false, [
                        { text: 'Browse More', icon: '<i class="fas fa-hotel"></i>', action: 'main' }
                    ]);
                }
                break;

            case 'set_preferences':
                createMessage(`⚙️ Set your travel preferences:`, false, [
                    { text: 'Set Budget', icon: '<i class="fas fa-wallet"></i>', action: 'set_budget' },
                    { text: 'Set Dates', icon: '<i class="fas fa-calendar"></i>', action: 'set_dates' },
                    { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
                ]);
                break;

            case 'set_budget':
                createMessage(`💰 What's your budget per night?`, false, [
                    { text: 'Economy (< $100)', action: 'save_budget', data: 'economy' },
                    { text: 'Mid-range ($100-$300)', action: 'save_budget', data: 'midrange' },
                    { text: 'Luxury (> $300)', action: 'save_budget', data: 'luxury' },
                    { text: 'Back', icon: '<i class="fas fa-arrow-left"></i>', action: 'set_preferences' }
                ]);
                break;

            case 'save_budget':
                userPreferences.budget = data;
                createMessage(`✅ Budget preference saved as ${data}.`, false, [
                    { text: 'Continue Setup', icon: '<i class="fas fa-cog"></i>', action: 'set_preferences' },
                    { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
                ]);
                break;

            case 'set_dates':
                createMessage(`📅 When are you traveling? Enter dates (e.g., "June 15-20, 2023" or "15/06/2023-20/06/2023"):`, false, [
                    { text: 'Back', icon: '<i class="fas fa-arrow-left"></i>', action: 'set_preferences' }
                ]);
                break;

            case 'view_more':
                if (data && data.hotels) {
                    const moreHotels = data.hotels.slice(5, 10).map(hotel => `
                        <div class="hotel-card">
                            <h3>${hotel.name}</h3>
                            <p>📍 ${hotel.location}</p>
                            <p class="price">${hotel.currency} ${hotel.price}</p>
                            <p class="rating">⭐ ${hotel.rating}/5.0</p>
                        </div>
                    `).join('');

                    createMessage(`🏨 More hotels in ${data.location}:<br>${moreHotels}`, false, [
                        { text: 'Search Again', icon: '<i class="fas fa-search"></i>', action: 'search_hotels' },
                        { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
                    ]);
                }
                break;

            default:
                if (action.startsWith('save_')) {
                    const hotelName = action.replace('save_', '').replace(/_/g, ' ');
                    const hotel = [...sampleHotelData.popular_destinations, ...sampleHotelData.budget_options]
                        .find(h => h.name.toLowerCase() === hotelName.toLowerCase());

                    if (hotel && !savedHotels.some(h => h.name === hotel.name)) {
                        savedHotels.push(hotel);
                        document.querySelector('.saved-hotels').innerHTML = `<i class="fas fa-heart"></i> Saved Hotels (${savedHotels.length})`;
                        createMessage(`❤ Saved ${hotel.name} to your favorites!`, false, [
                            { text: 'View Saved', icon: '<i class="fas fa-heart"></i>', action: 'view_saved' },
                            { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
                        ]);
                    }
                }
                break;
        }
    }, 1000);
}

async function sendMessage() {
    const question = userInput.value.trim();
    if (!question) return;

    createMessage(question, true);
    userInput.value = '';
    showTyping();

    setTimeout(async () => {
        hideTyping();

        // Check for location queries
        if (question.toLowerCase().includes('hotel') || question.toLowerCase().includes('stay')) {
            const locationMatch = question.match(/(?:in|at|near)\s+([a-zA-Z\s]+)/i);
            const dateMatch = question.match(/(\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4})|([a-zA-Z]+\s+\d{1,2})/gi);

            if (locationMatch) {
                const location = locationMatch[1].trim();
                let checkIn = null, checkOut = null;

                if (dateMatch && dateMatch.length >= 2) {
                    checkIn = formatDate(dateMatch[0]);
                    checkOut = formatDate(dateMatch[1]);
                }

                searchHotels(location, checkIn, checkOut);
            } else {
                createMessage(`🔍 Please specify a location for your hotel search (e.g., "Hotels in Paris" or "Find stays in Tokyo").`, false, [
                    { text: 'Popular Destinations', icon: '<i class="fas fa-map-marker-alt"></i>', action: 'popular_destinations' },
                    { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
                ]);
            }
        } else if (question.toLowerCase().includes('price') || question.toLowerCase().includes('cost')) {
            const hotelMatch = question.match(/(?:price|cost)\s+(?:of|for)\s+([a-zA-Z\s]+)/i);

            if (hotelMatch) {
                const hotelName = hotelMatch[1].trim();
                const hotel = [...sampleHotelData.popular_destinations, ...sampleHotelData.budget_options]
                    .find(h => h.name.toLowerCase().includes(hotelName.toLowerCase()));

                if (hotel) {
                    createMessage(`🏨 <strong>${hotel.name}</strong> in ${hotel.location}<br>💰 ${hotel.currency} ${hotel.price} per night<br>⭐ Rating: ${hotel.rating}/5.0`, false, [
                        { text: 'Save Hotel', icon: '<i class="fas fa-heart"></i>', action: `save_${hotel.name.replace(/\s/g, '_')}` },
                        { text: 'Book Now', icon: '<i class="fas fa-calendar-check"></i>', action: `book_${hotel.name.replace(/\s/g, '_')}` },
                        { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
                    ]);
                } else {
                    createMessage(`🔍 I couldn't find pricing for "${hotelName}". Try searching for hotels in a specific location.`, false, [
                        { text: 'Search Hotels', icon: '<i class="fas fa-search"></i>', action: 'search_hotels' },
                        { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
                    ]);
                }
            }
        } else {
            createMessage(`🤖 I'm your AI Hotel Booking Assistant. You can ask me about:<br>- Hotels in a specific city<br- Hotel prices<br>- Popular destinations`, false, [
                { text: 'Search Hotels', icon: '<i class="fas fa-search"></i>', action: 'search_hotels' },
                { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
            ]);
        }
    }, 1500);
}

function formatDate(dateStr) {
    // Simple date formatting - in a real app you'd use a proper date library
    if (dateStr.includes('/')) {
        const parts = dateStr.split('/');
        return `${parts[2]}-${parts[1]}-${parts[0]}`; // YYYY-MM-DD
    }
    return dateStr;
}

// Event Listeners
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Initialize the app
init();
