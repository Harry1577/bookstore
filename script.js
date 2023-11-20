document.addEventListener("DOMContentLoaded", function () {
    const webDevelopmentBooks = [
        {
            title: "Eloquent JavaScript",
            author: "Marijn Haverbeke",
            image: "eloquent_js.jpg",
            description: "A comprehensive guide to JavaScript programming.",
        },
        {
            title: "HTML and CSS: Design and Build Websites",
            author: "Jon Duckett",
            image: "html_css.jpg",
            description: "Learn the essentials of HTML and CSS for web design.",
        },
    ];

    const frontendBooks = [
        {
            title: "React Up and Running",
            author: "Stoyan Stefanov",
            image: "react_up_running.jpg",
            description: "Master the fundamentals of React.js.",
        },
        {
            title: "JavaScript: The Good Parts",
            author: "Douglas Crockford",
            image: "js_good_parts.jpg",
            description: "Discover the good parts of JavaScript programming.",
        },
    ];

    const backendBooks = [
        {
            title: "Node.js Design Patterns",
            author: "Mario Casciaro",
            image: "nodejs_design_patterns.jpg",
            description: "Explore design patterns in Node.js development.",
        },
        {
            title: "Flask Web Development",
            author: "Miguel Grinberg",
            image: "flask_web_dev.jpg",
            description: "Build web applications with Flask and Python.",
        },
    ];

    function displayBooks(books, containerId) {
        const bookContainer = document.getElementById(containerId);

        books.forEach(book => {
            const bookElement = document.createElement("div");
            bookElement.classList.add("book");

            const imgElement = document.createElement("img");
            imgElement.src = book.image;
            imgElement.alt = book.title;

            const titleElement = document.createElement("h3");
            titleElement.textContent = book.title;

            const authorElement = document.createElement("p");
            authorElement.textContent = `Author: ${book.author}`;

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = book.description || "No description available.";

            bookElement.appendChild(imgElement);
            bookElement.appendChild(titleElement);
            bookElement.appendChild(authorElement);
            bookElement.appendChild(descriptionElement);

            bookContainer.appendChild(bookElement);
        });
    }

    displayBooks(webDevelopmentBooks, "webDevelopmentBookList");
    displayBooks(frontendBooks, "frontendBookList");
    displayBooks(backendBooks, "backendBookList");

    const feedbackForm = document.getElementById("feedbackForm");
    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const feedbackName = document.getElementById("feedbackName").value;
        const feedbackEmail = document.getElementById("feedbackEmail").value;
        const feedbackText = document.getElementById("feedbackText").value;

        console.log(`Feedback from ${feedbackName} (${feedbackEmail}): ${feedbackText}`);
        alert("Thank you for your feedback!");
        feedbackForm.reset();
    });
});
