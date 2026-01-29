// Mock Data: 10 Restaurants with INR prices, reliable images, and item images
const restaurants = [
    {
        id: 1,
        name: "Pizza Palace",
        cuisine: "Italian",
        rating: 4.5,
        time: "30-40 min",
        deliveryTime: 35,
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        banner: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        priceRange: "₹₹",
        avgPrice: 350,
        menu: [
            { id: 101, name: "Margherita Pizza", price: 299, description: "Classic cheese pizza with fresh basil and mozzarella", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true, bestseller: true },
            { id: 102, name: "Pepperoni Feast", price: 449, description: "Loaded with spicy pepperoni and extra cheese", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false, bestseller: true },
            { id: 103, name: "Garlic Bread", price: 149, description: "Crispy bread with garlic butter and herbs", image: "https://images.unsplash.com/photo-1619531040576-f9416abb6b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true },
            { id: 104, name: "Farmhouse Pizza", price: 399, description: "Loaded with fresh vegetables and cheese", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true },
            { id: 105, name: "BBQ Chicken Pizza", price: 479, description: "Smoky BBQ sauce with grilled chicken", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false }
        ]
    },
    {
        id: 2,
        name: "Burger Kingpin",
        cuisine: "American",
        rating: 4.2,
        time: "20-30 min",
        deliveryTime: 25,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        banner: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        priceRange: "₹₹",
        avgPrice: 280,
        menu: [
            { id: 201, name: "Classic Cheeseburger", price: 249, description: "Juicy beef patty with melted cheese", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false, bestseller: true },
            { id: 202, name: "Bacon Smash Burger", price: 329, description: "Double patty with crispy bacon and special sauce", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false, bestseller: true },
            { id: 203, name: "Loaded Fries", price: 149, description: "Fries with cheese sauce and jalapeños", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true },
            { id: 204, name: "Veggie Burger", price: 229, description: "Crispy veggie patty with fresh veggies", image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true },
            { id: 205, name: "Chicken Wings", price: 279, description: "Spicy buffalo wings with blue cheese dip", image: "https://images.unsplash.com/photo-1608039829572-47a0e67c5185?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false }
        ]
    },
    {
        id: 3,
        name: "Sushi World",
        cuisine: "Japanese",
        rating: 4.8,
        time: "40-50 min",
        deliveryTime: 45,
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        banner: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        priceRange: "₹₹₹",
        avgPrice: 550,
        menu: [
            { id: 301, name: "Salmon Roll", price: 499, description: "Fresh salmon with avocado and rice", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false, bestseller: true },
            { id: 302, name: "Tuna Sashimi", price: 649, description: "Premium grade fresh tuna slices", image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false },
            { id: 303, name: "Miso Soup", price: 149, description: "Traditional Japanese miso with tofu", image: "https://images.unsplash.com/photo-1547928576-b822bc410e2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true },
            { id: 304, name: "Dragon Roll", price: 599, description: "Eel and cucumber topped with avocado", image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false, bestseller: true },
            { id: 305, name: "Edamame", price: 129, description: "Steamed soybeans with sea salt", image: "https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true }
        ]
    },
    {
        id: 4,
        name: "Taco Fiesta",
        cuisine: "Mexican",
        rating: 4.3,
        time: "25-35 min",
        deliveryTime: 30,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        banner: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        priceRange: "₹₹",
        avgPrice: 320,
        menu: [
            { id: 401, name: "Chicken Tacos (3pcs)", price: 279, description: "Soft corn tacos with grilled chicken", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false, bestseller: true },
            { id: 402, name: "Beef Burrito", price: 349, description: "Loaded burrito with rice, beans and beef", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false },
            { id: 403, name: "Guacamole & Chips", price: 199, description: "Fresh made guacamole with tortilla chips", image: "https://images.unsplash.com/photo-1600699493929-8a6ee1c4ba1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true },
            { id: 404, name: "Quesadilla", price: 259, description: "Grilled tortilla with cheese and veggies", image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true, bestseller: true },
            { id: 405, name: "Nachos Supreme", price: 299, description: "Loaded nachos with all toppings", image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true }
        ]
    },
    {
        id: 5,
        name: "Curry House",
        cuisine: "Indian",
        rating: 4.7,
        time: "35-45 min",
        deliveryTime: 40,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        banner: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        priceRange: "₹₹",
        avgPrice: 380,
        menu: [
            { id: 501, name: "Butter Chicken", price: 379, description: "Creamy tomato-based curry with tender chicken", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false, bestseller: true },
            { id: 502, name: "Garlic Naan", price: 69, description: "Soft tandoor bread with garlic butter", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true },
            { id: 503, name: "Paneer Tikka", price: 329, description: "Grilled cottage cheese with spices", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true, bestseller: true },
            { id: 504, name: "Dal Makhani", price: 279, description: "Creamy black lentils slow cooked", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true },
            { id: 505, name: "Biryani", price: 349, description: "Fragrant rice with aromatic spices", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false, bestseller: true }
        ]
    },
    {
        id: 6,
        name: "Wok This Way",
        cuisine: "Chinese",
        rating: 4.4,
        time: "30-40 min",
        deliveryTime: 35,
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        banner: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        priceRange: "₹₹",
        avgPrice: 340,
        menu: [
            { id: 601, name: "Kung Pao Chicken", price: 349, description: "Spicy stir-fried chicken with peanuts", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false, bestseller: true },
            { id: 602, name: "Fried Rice", price: 229, description: "Wok-tossed rice with vegetables", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true },
            { id: 603, name: "Spring Rolls", price: 169, description: "Crispy vegetable spring rolls", image: "https://images.unsplash.com/photo-1548507200-2a2b20cce109?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true, bestseller: true },
            { id: 604, name: "Manchurian", price: 249, description: "Indo-Chinese veg manchurian", image: "https://images.unsplash.com/photo-1645696301019-35adcc80ff6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true },
            { id: 605, name: "Hakka Noodles", price: 219, description: "Stir-fried noodles with veggies", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true }
        ]
    },
    {
        id: 7,
        name: "Pasta Point",
        cuisine: "Italian",
        rating: 4.1,
        time: "25-35 min",
        deliveryTime: 30,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        banner: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        priceRange: "₹₹",
        avgPrice: 360,
        menu: [
            { id: 701, name: "Spaghetti Carbonara", price: 399, description: "Creamy egg-based pasta with bacon", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false, bestseller: true },
            { id: 702, name: "Penne Arrabbiata", price: 329, description: "Spicy tomato sauce pasta", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true },
            { id: 703, name: "Tiramisu", price: 249, description: "Classic Italian coffee dessert", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true },
            { id: 704, name: "Lasagna", price: 449, description: "Layered pasta with meat sauce", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false, bestseller: true },
            { id: 705, name: "Bruschetta", price: 179, description: "Toasted bread with tomato topping", image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true }
        ]
    },
    {
        id: 8,
        name: "Healthy Greens",
        cuisine: "Salads",
        rating: 4.6,
        time: "15-25 min",
        deliveryTime: 20,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        banner: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        priceRange: "₹₹",
        avgPrice: 280,
        menu: [
            { id: 801, name: "Caesar Salad", price: 279, description: "Romaine with parmesan and caesar dressing", image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true, bestseller: true },
            { id: 802, name: "Quinoa Power Bowl", price: 349, description: "Protein-packed superfood bowl", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true, bestseller: true },
            { id: 803, name: "Green Smoothie", price: 199, description: "Spinach, banana, apple blend", image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true },
            { id: 804, name: "Greek Salad", price: 259, description: "Fresh veggies with feta cheese", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true },
            { id: 805, name: "Acai Bowl", price: 329, description: "Antioxidant rich acai with fruits", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true }
        ]
    },
    {
        id: 9,
        name: "BBQ Nation",
        cuisine: "BBQ",
        rating: 4.5,
        time: "40-50 min",
        deliveryTime: 45,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        banner: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        priceRange: "₹₹₹",
        avgPrice: 520,
        menu: [
            { id: 901, name: "Ribs Half Rack", price: 599, description: "Slow-cooked with smoky BBQ glaze", image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false, bestseller: true },
            { id: 902, name: "Pulled Pork Sandwich", price: 379, description: "Tender shredded pork with coleslaw", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false },
            { id: 903, name: "Coleslaw", price: 129, description: "Creamy cabbage salad", image: "https://images.unsplash.com/photo-1625938145744-533e82abcc24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true },
            { id: 904, name: "BBQ Chicken", price: 449, description: "Grilled chicken with BBQ sauce", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: false, bestseller: true },
            { id: 905, name: "Corn on the Cob", price: 149, description: "Grilled corn with butter and spices", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true }
        ]
    },
    {
        id: 10,
        name: "Dessert Den",
        cuisine: "Desserts",
        rating: 4.9,
        time: "15-25 min",
        deliveryTime: 20,
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        banner: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        priceRange: "₹₹",
        avgPrice: 280,
        menu: [
            { id: 1001, name: "Chocolate Cake", price: 249, description: "Rich Belgian chocolate layer cake", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true, bestseller: true },
            { id: 1002, name: "New York Cheesecake", price: 299, description: "Creamy cheesecake with berry compote", image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true, bestseller: true },
            { id: 1003, name: "Ice Cream Sundae", price: 199, description: "Three scoops with all toppings", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true },
            { id: 1004, name: "Brownie with Ice Cream", price: 279, description: "Warm fudge brownie with vanilla ice cream", image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true },
            { id: 1005, name: "Red Velvet Cake", price: 269, description: "Classic red velvet with cream cheese frosting", image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60", veg: true }
        ]
    }
];

// Cart State
let cart = [];
let currentView = 'grid';
let isLoggedIn = false;
let currentUser = null;
let currentRestaurant = null;

// Check for saved user session
function checkUserSession() {
    const savedUser = localStorage.getItem('zwiggyUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        isLoggedIn = true;
        updateAuthUI();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkUserSession();
    const restaurantList = document.getElementById('restaurant-list');
    if (restaurantList) {
        setTimeout(() => {
            renderRestaurants(restaurants);
            populateCuisineFilters();
        }, 500);
    }

    // Load cart from localStorage
    const savedCart = localStorage.getItem('zwiggyCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
});

// =============================================
// RESTAURANT PAGE FUNCTIONS
// =============================================

function loadRestaurantPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = parseInt(urlParams.get('id'));

    if (!restaurantId) {
        window.location.href = 'order.html';
        return;
    }

    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (!restaurant) {
        window.location.href = 'order.html';
        return;
    }

    currentRestaurant = restaurant;

    // Update page content
    document.getElementById('restaurant-name').textContent = restaurant.name;
    document.getElementById('restaurant-cuisine').textContent = restaurant.cuisine;
    document.getElementById('restaurant-rating').innerHTML = `<i class="fas fa-star"></i> ${restaurant.rating}`;
    document.getElementById('restaurant-time').innerHTML = `<i class="fas fa-clock"></i> ${restaurant.time}`;
    document.getElementById('restaurant-price').textContent = `₹${restaurant.avgPrice}`;
    document.getElementById('all-count').textContent = restaurant.menu.length;

    // Set banner image
    const heroSection = document.getElementById('restaurant-hero');
    if (heroSection) {
        heroSection.style.backgroundImage = `url('${restaurant.banner || restaurant.image}')`;
    }

    // Update page title
    document.title = `${restaurant.name} - Zwiggy`;

    // Render menu items
    renderMenuItems(restaurant.menu);

    // Load cart
    const savedCart = localStorage.getItem('zwiggyCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

function renderMenuItems(items) {
    const container = document.getElementById('menu-items-container');
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No items found</h3>
                <p>Try a different search</p>
            </div>
        `;
        return;
    }

    container.innerHTML = items.map(item => `
        <div class="menu-item-card">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60'">
                ${item.bestseller ? '<span class="bestseller-tag"><i class="fas fa-fire"></i> Bestseller</span>' : ''}
                <span class="veg-tag ${item.veg ? 'veg' : 'non-veg'}">
                    <span class="veg-dot"></span>
                </span>
            </div>
            <div class="menu-item-details">
                <h3>${item.name}</h3>
                <p class="item-description">${item.description}</p>
                <div class="item-footer">
                    <span class="item-price">₹${item.price}</span>
                    <button class="add-item-btn" onclick="addToCart('${item.name}', ${item.price}, '${currentRestaurant?.name || ''}')">
                        <i class="fas fa-plus"></i> ADD
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function searchMenu(query) {
    if (!currentRestaurant) return;

    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) {
        renderMenuItems(currentRestaurant.menu);
        return;
    }

    const filtered = currentRestaurant.menu.filter(item =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
    );
    renderMenuItems(filtered);
}

// =============================================
// ORDER PAGE FUNCTIONS
// =============================================

function getCuisines() {
    return [...new Set(restaurants.map(r => r.cuisine))];
}

function populateCuisineFilters() {
    const container = document.getElementById('cuisine-filters');
    if (!container) return;

    const cuisines = getCuisines();
    container.innerHTML = cuisines.map(cuisine => `
        <label class="filter-checkbox">
            <input type="checkbox" value="${cuisine}" onchange="applyFilters()" class="cuisine-filter">
            <span class="checkbox-custom"></span>
            ${cuisine}
        </label>
    `).join('');
}

function applyFilters() {
    const sortValue = document.querySelector('input[name="sort"]:checked')?.value || 'default';
    const ratingFilters = [...document.querySelectorAll('.rating-filter:checked')].map(el => parseFloat(el.value));
    const cuisineFilters = [...document.querySelectorAll('.cuisine-filter:checked')].map(el => el.value);
    const timeFilters = [...document.querySelectorAll('.time-filter:checked')].map(el => parseInt(el.value));

    let filtered = [...restaurants];

    if (ratingFilters.length > 0) {
        const minRating = Math.min(...ratingFilters);
        filtered = filtered.filter(r => r.rating >= minRating);
    }

    if (cuisineFilters.length > 0) {
        filtered = filtered.filter(r => cuisineFilters.includes(r.cuisine));
    }

    if (timeFilters.length > 0) {
        const maxTime = Math.max(...timeFilters);
        filtered = filtered.filter(r => r.deliveryTime <= maxTime);
    }

    switch (sortValue) {
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'price-low':
            filtered.sort((a, b) => a.avgPrice - b.avgPrice);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.avgPrice - a.avgPrice);
            break;
        case 'time':
            filtered.sort((a, b) => a.deliveryTime - b.deliveryTime);
            break;
    }

    renderRestaurants(filtered);
}

function resetFilters() {
    document.querySelectorAll('input[name="sort"]').forEach(el => el.checked = el.value === 'default');
    document.querySelectorAll('.rating-filter, .cuisine-filter, .time-filter').forEach(el => el.checked = false);
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    renderRestaurants(restaurants);
    showToast('Filters reset!', 'info');
}

function handleSearch(query) {
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) {
        applyFilters();
        return;
    }

    const filtered = restaurants.filter(r =>
        r.name.toLowerCase().includes(searchTerm) ||
        r.cuisine.toLowerCase().includes(searchTerm)
    );
    renderRestaurants(filtered);
}

function clearSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    applyFilters();
}

function toggleFilters() {
    const sidebar = document.getElementById('filters-sidebar');
    if (sidebar) sidebar.classList.toggle('active');
}

function setView(view) {
    currentView = view;
    const list = document.getElementById('restaurant-list');
    const buttons = document.querySelectorAll('.view-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.closest('.view-btn').classList.add('active');
    }

    if (list) {
        if (view === 'list') {
            list.classList.add('list-view');
            list.classList.remove('restaurant-grid');
        } else {
            list.classList.remove('list-view');
            list.classList.add('restaurant-grid');
        }
    }
}

function renderRestaurants(restaurantsToRender) {
    const restaurantList = document.getElementById('restaurant-list');
    if (!restaurantList) return;

    const countElement = document.getElementById('restaurant-count');
    if (countElement) {
        countElement.textContent = restaurantsToRender.length;
    }

    if (restaurantsToRender.length === 0) {
        restaurantList.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No restaurants found</h3>
                <p>Try adjusting your filters or search query</p>
                <button class="btn btn-primary" onclick="resetFilters()">Reset Filters</button>
            </div>
        `;
        return;
    }

    restaurantList.innerHTML = restaurantsToRender.map(rest => `
        <div class="restaurant-card" onclick="goToRestaurant(${rest.id})">
            <div class="restaurant-image">
                <img src="${rest.image}" alt="${rest.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'">
                <span class="delivery-time"><i class="fas fa-clock"></i> ${rest.time}</span>
                <span class="price-range">${rest.priceRange}</span>
            </div>
            <div class="restaurant-info">
                <div class="restaurant-header">
                    <h3 class="restaurant-name">${rest.name}</h3>
                    <span class="restaurant-rating">
                        <i class="fas fa-star"></i> ${rest.rating}
                    </span>
                </div>
                <p class="restaurant-cuisine">${rest.cuisine}</p>
                <p class="restaurant-price">₹${rest.avgPrice} for two</p>
            </div>
        </div>
    `).join('');
}

// Navigate to restaurant detail page
function goToRestaurant(restaurantId) {
    window.location.href = `restaurant.html?id=${restaurantId}`;
}

// Open Menu Modal (fallback for order page if needed)
function openMenu(restaurantId) {
    goToRestaurant(restaurantId);
}

function closeMenu() {
    const modal = document.getElementById('menu-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// =============================================
// CART FUNCTIONS
// =============================================

function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');

    if (cartSidebar) cartSidebar.classList.toggle('active');
    if (cartOverlay) cartOverlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar?.classList.contains('active') ? 'hidden' : '';
}

function addToCart(name, price, restaurantName = '') {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1, restaurant: restaurantName });
    }
    updateCartUI();
    saveCart();
    showToast(`${name} added to cart!`, 'success');
}

function removeFromCart(name) {
    const index = cart.findIndex(item => item.name === name);
    if (index > -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }
    }
    updateCartUI();
    saveCart();
}

function updateCartQuantity(name, change) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.name !== name);
        }
    }
    updateCartUI();
    saveCart();
}

function saveCart() {
    localStorage.setItem('zwiggyCart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartGrandTotalElement = document.getElementById('cart-grand-total');
    const cartCountElement = document.getElementById('cart-count');

    if (!cartItemsContainer) return;

    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-basket"></i>
                <p>Your cart is empty</p>
                <span>Add items to get started</span>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => {
            total += item.price * item.quantity;
            count += item.quantity;
            return `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h5>${item.name}</h5>
                        <p class="cart-item-restaurant">${item.restaurant || ''}</p>
                        <p class="cart-item-price">₹${item.price} × ${item.quantity}</p>
                    </div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateCartQuantity('${item.name}', -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="qty-display">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartQuantity('${item.name}', 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    const deliveryFee = cart.length > 0 ? 40 : 0;
    if (cartTotalElement) cartTotalElement.textContent = `₹${total.toFixed(2)}`;
    if (cartGrandTotalElement) cartGrandTotalElement.textContent = `₹${(total + deliveryFee).toFixed(2)}`;
    if (cartCountElement) cartCountElement.textContent = count;
}

function checkout() {
    if (cart.length === 0) {
        showToast("Your cart is empty!", "error");
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 40;
    showToast(`Order Placed Successfully! Total: ₹${total.toFixed(2)}`, 'success');
    cart = [];
    updateCartUI();
    saveCart();
    toggleCart();

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

// =============================================
// TOAST & UI FUNCTIONS
// =============================================

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icon = type === 'success' ? 'check-circle' :
        type === 'error' ? 'exclamation-circle' :
            'info-circle';

    toast.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// =============================================
// SIGN IN FUNCTIONS
// =============================================

function openSignIn(event) {
    if (event) event.preventDefault();
    const modal = document.getElementById('signin-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeSignIn() {
    const modal = document.getElementById('signin-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function handleSignIn(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    if (email && password) {
        currentUser = {
            email: email,
            name: email.split('@')[0]
        };
        isLoggedIn = true;

        if (remember) {
            localStorage.setItem('zwiggyUser', JSON.stringify(currentUser));
        }

        updateAuthUI();
        closeSignIn();
        showToast(`Welcome back, ${currentUser.name}!`, 'success');
    } else {
        showToast('Please fill in all fields', 'error');
    }
}

function updateAuthUI() {
    const signInBtn = document.querySelector('.nav-links .btn-primary');
    if (signInBtn && isLoggedIn && currentUser) {
        signInBtn.innerHTML = `<i class="fas fa-user"></i> ${currentUser.name}`;
        signInBtn.onclick = (e) => {
            e.preventDefault();
            handleLogout();
        };
    }
}

function handleLogout() {
    isLoggedIn = false;
    currentUser = null;
    localStorage.removeItem('zwiggyUser');
    showToast('Logged out successfully', 'info');
    location.reload();
}

function showSignUp(event) {
    event.preventDefault();
    showToast('Sign up feature coming soon!', 'info');
}

// =============================================
// LANDING PAGE FUNCTIONS
// =============================================

function validateLandingSearch() {
    const searchInput = document.querySelector('.hero-search-box input');
    if (!searchInput) return;

    const query = searchInput.value.trim();
    if (!query) {
        showToast('Please enter a delivery location', 'error');
        searchInput.focus();
        searchInput.style.border = '2px solid var(--secondary-color)';
        setTimeout(() => {
            searchInput.style.border = 'none';
        }, 2000);
        return;
    }

    window.location.href = 'order.html';
}

// =============================================
// EVENT LISTENERS
// =============================================

document.addEventListener('click', (e) => {
    const signinModal = document.getElementById('signin-modal');
    if (signinModal && e.target === signinModal) {
        closeSignIn();
    }

    const menuModal = document.getElementById('menu-modal');
    if (menuModal && e.target === menuModal) {
        closeMenu();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSignIn();
        closeMenu();
        const cartSidebar = document.getElementById('cart-sidebar');
        if (cartSidebar && cartSidebar.classList.contains('active')) {
            toggleCart();
        }
    }
});
