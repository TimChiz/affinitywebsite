// Get the service name from the URL
const params = new URLSearchParams(window.location.search);
const serviceName = params.get("service");

// Service details data
const serviceData = {
    "home-cleaning": {
        title: "Home Cleaning",
        image: "House Cleaning.jpg",
        description: "Our home cleaning service ensures every part of your house is spotless. We handle dusting, vacuuming, mopping, and sanitizing to create a comfortable and hygienic living space."
    },
    "office-cleaning": {
        title: "Office Cleaning",
        image: "Office Cleaning.jpg",
        description: "Keep your workspace clean and professional with our office cleaning service. We take care of desks, floors, restrooms, and common areas to maintain a productive environment."
    },
    "deep-cleaning": {
        title: "Deep Cleaning",
        image: "Deep Cleaning.jpeg",
        description: "Our deep cleaning service targets built-up grime and bacteria in every corner of your home or office, ensuring a more thorough and detailed clean than regular services."
    },
    "event-cleaning": {
        title: "Pre/Post Event Cleaning",
        image: "Post Event Cleaning.jpg",
        description: "Hosting an event? We provide cleaning before and after your event to ensure the venue is spotless and ready for guests or back to its original state."
    },
    "move-cleaning": {
        title: "Move-In/Move-Out Cleaning",
        image: "Moving.jpg",
        description: "Moving? Let us handle the cleaning! We ensure your old or new space is cleaned to perfection, helping you get your deposit back or move into a fresh home."
    },
    "decluttering": {
        title: "Decluttering",
        image: "Decluttering.jpg",
        description: "Organize your home or office with our decluttering service. We help you remove unnecessary items, arrange your space efficiently, and create a stress-free environment."
    }
};

// Populate the service details page
if (serviceName && serviceData[serviceName]) {
    document.getElementById("service-title").textContent = serviceData[serviceName].title;
    document.getElementById("service-image").src = serviceData[serviceName].image;
    document.getElementById("service-description").textContent = serviceData[serviceName].description;
} else {
    document.getElementById("service-content").innerHTML = "<p>Service not found.</p>";
}
