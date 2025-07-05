# Product Manager Web App

Simple web application to manage products with create, read, update, and delete (CRUD) functionalities using HTML, CSS, JavaScript, and a JSON server backend.

---

## Features

- Add new products with name, price, and category.
- View all products as cards with formatted name and price.
- Edit existing products.
- Delete products with confirmation.
- User-friendly alerts using SweetAlert2.
- Data persistence via a REST API (e.g., JSON Server).

---

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/developer-dylan/inventory-crud-system.git
   cd inventory-crud-system
   ```

2. **Install and run JSON Server:**

   If you don't have JSON Server installed:

   ```bash
   npm install -g json-server
   ```

   Run the server (assuming you have a `db.json` with a `products` array):

   ```bash
   json-server --watch db.json --port 3000
   ```

3. **Open the project:**

   Open `index.html` in your browser or serve it with a local server.

---

## Usage

- Fill the form to add a product.
- Existing products appear below as cards.
- Click "Edit" to modify a product.
- Click "Delete" to remove a product after confirmation.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6 modules)
- SweetAlert2 for alerts
- JSON Server (for backend API simulation)

---

## Notes

- Make sure the JSON Server is running on `http://localhost:3000/products`.
- The project expects the API endpoint at this address.
- The app uses ES6 modules; serve it with a server or compatible environment.

---

## Author

Dylan Andrés Marín