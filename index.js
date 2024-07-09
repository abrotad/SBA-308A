const API_URL = "http://www.penguinrandomhouse.biz/webservices/rest/";

// Fetch data from the API
async function fetchData(endpoint) {
  try {
    const response = await fetch(API_URL + endpoint);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function populateContent() {
  const data = await fetchData("books");
  console.log("Fetched Data:", data);
}

// Search functionality
async function searchBooks(query) {
  console.log("Search functionality initiated with query:", query);

  try {
    const response = await fetch(
      API_URL + "search?q=" + encodeURIComponent(query)
    );
    if (!response.ok) {
      throw new Error("Failed to search for books");
    }
    const searchData = await response.json();

    console.log("Search API Response:", searchData);

    displaySearchResults(searchData);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Update a book using PUT request
async function updateBook(bookId, updatedBook) {
  try {
    const response = await fetch(API_URL + "books/" + bookId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    });
    if (!response.ok) {
      throw new Error("Failed to update book");
    }
    console.log("Book updated successfully");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Add a new book using POST request
async function addBook(newBook) {
  try {
    const response = await fetch(API_URL + "books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });
    if (!response.ok) {
      throw new Error("Failed to add new book");
    }
    console.log("New book added successfully");
  } catch (error) {
    console.error("Error:", error);
  }
}

populateContent();
