# The restaurant Ordering App

This is a responsive, functional Food Ordering Web Application built using a "Mobile First" approach. It allows users to browse a menu, manage their cart in real-time, apply discount codes, and proceed through a simulated checkout process.

## 🖼️ Demo

[Project link demo](https://assadullahhassan.github.io/restaurant-ordering-app/)

[Project Screenshot/video](https://drive.google.com/drive/folders/1rpA4ySjOVTEONOL2rdLNrxTzKyFUZ0BL?usp=sharing)


## 🚀 Features
* **Dynamic Menu Rendering**: Menu items are rendered dynamically using Vanilla JavaScript.
* **Real-time Cart Management**: Add items to the order with a single click.
    * Increment or decrement item quantities directly from the menu.
    * Remove items from the "Your order" summary.
* **Discount System**: Integrated modal for entering discount codes (e.g., DISCOUNT10 for 10% off) with instant price recalculation.
* **Interactive Modals**: Custom-built modals for both the discount entry and the secure payment credit card form.
* **Form Validation**: Built-in HTML5 validation for the payment processing form to ensure all required details are captured.

## 🛠 Tech Stack
* **HTML5**: Semantic structure for the menu and form validation.
* **CSS3**: Custom styling using Flexbox for layouts, specialized fonts, and absolute positioning for modal overlays.
* **Vanilla JavaScript**: 
    * **Data-driven UI**: Uses an array of objects to store menu data.
    * **Event Listeners**: Efficient event handling for buttons and input fields.
    * **Conditional Rendering**: Logic to show/hide the order summary based on cart contents.

## Project Structure
* **index.html**: Contains the boilerplate and the main containers for the menu and order summary.
* **index.css**: Handles the visual presentation and modal styling.
* **data.js**: Stores the menu items array containing names, ingredients, prices, and IDs.
* **index.js**: The engine of the app—handles state management, quantity updates, and total price calculation.


### ✍️ Author
   * **Assadullah Hassan**
      - GitHub: [@assadullahhassan](https://github.com/assadullahhassan/)
      - LinkedIn: [Assadullah Hassan](https://www.linkedin.com/in/assadullahhassan)

Made from Scrimba by [Assadullah Hassan](https://scrimba.com/?via=u4f4512)

