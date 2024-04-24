# Order-Management-API

A comprehensive Express.js API designed to handle CRUD operations for managing orders, persons, and parties in a relational database environment. This project demonstrates robust API design using Node.js, Express, Sequelize for ORM, and MySQL as the data store.

## Features

- **Order Management**: Create, retrieve, update, and delete orders.
- **Person Management**: Manage person records linked to orders and parties.
- **Party Management**: Handle party data crucial for order processing.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- [Node.js](https://nodejs.org/en/download/)
- [MySQL](https://dev.mysql.com/downloads/mysql/)
- A package manager like [npm](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/lang/en/docs/install/)

### Installing

A step-by-step series of examples that tell you how to get a development env running:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/OrderManagementAPI.git

   ```

2. Navigate to the project directory:
   ```bash
   cd OrderManagementAPI
   ```
3. Install the dependencies:
   ```bash
   npm install body-parser cors dotenv express mysql2 sequelize
   ```

This will install the following packages along with their dependencies:

- **body-parser**: Middleware to parse incoming request bodies.
- **cors**: Middleware to enable CORS (Cross-Origin Resource Sharing).
- **dotenv**: Loads environment variables from a `.env` file.
- **express**: Fast, unopinionated, minimalist web framework.
- **mysql2**: MySQL client for Node.js with focus on performance.
- **sequelize**: A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.

4. Set up your MySQL database and create a .env file to store your database credentials and other environment variables:
   ```plaintext
   DB_HOST=localhost
   DB_USER=yourusername
   DB_PASS=yourpassword
   DB_DATABASE=yourdatabasename
   ```
5. Start the server:
   ```bash
   npm start
   ```

## Endpoints

All endpoints are available at the base URL `http://localhost:3001/api`. Ensure the server is running on port 3001 as configured, and prefix endpoints with `/api`.

### Create a New Order

- **POST** `/api/orders`
  - **Description**: Create a new order.
  - **Request Body**:
    - `order_name`: (Required) Name of the order. (string)
    - `placed_date`: (Required) Date the order was placed. (YYYY-MM-DD)
    - `approved_date`: (Optional) Date the order was approved. (YYYY-MM-DD)
    - `status_id`: (Optional) Status of the order (e.g., OrderPlaced, Processing, Shipped, Completed). (string)
    - `party_id`: (Optional) Foreign key referencing the party associated with the order. (string)
    - `currency_uom_id`: (Optional) Unit of measurement for the order currency (e.g., USD, EUR). (string)
    - `product_store_id`: (Optional) Foreign key referencing the product store associated with the order. (string)
    - `sales_channel_enum_id`: (Optional) Sales channel through which the order was placed. (string)
    - `grand_total`: (Optional) Total amount of the order. (decimal)
    - `completed_date`: (Optional) Date the order was completed. (YYYY-MM-DD)
  - **Response**:
    - **On success**:
      - Status code: 201 Created
      - Response body: `{ "orderId": "<generated_order_id>" }`
    - **On error**:
      - Status code: 400 Bad Request (for invalid request body) or 500 Internal Server Error
      - Response body: `{ "error": "<error message>" }`

### Create Order Items for an Existing Order

- **POST** `/api/orders/:id`
  - **Description**: Create order items for an existing order.
  - **Path Parameter**:
    - `id`: The ID of the order to associate the items with. (string)
  - **Request Body**:
    - `order_items`: An array of objects representing order items. Each object should have:
      - `order_item_seq_id`: (Optional) Sequence ID for the order item. (string)
      - `product_id`: (Required) Foreign key referencing the product associated with the order item. (string)
      - `item_description`: (Optional) Description of the order item. (string)
      - `quantity`: (Required) Quantity of the product ordered. (decimal)
      - `unit_amount`: (Required) Unit price of the product. (decimal)
      - `item_type_enum_id`: (Optional) Type of the order item. (string)
  - **Response**:
    - **On success**:
      - Status code: 201 Created
      - Response body: `{ "orderId": "<order_id>", "orderPartSeqId": "<generated_part_sequence_id>" }`
    - **On error**:
      - Status code: 400 Bad Request (for invalid request body) or 500 Internal Server Error
      - Response body: `{ "error": "<error message>" }`

### Retrieve a Specific Order by ID

- **GET** `/api/orders/:id`
  - **Description**: Retrieve a specific order by its ID.
  - **Path Parameter**:
    - `id`: The ID of the order to retrieve. (string)
  - **Response**:
    - **On success**:
      - Status code: 200 OK
      - Response body: An object containing the order details and its associated order items.

## Testing

To facilitate understanding and testing of the API, the `Test_Data.json` file includes comprehensive sample data for various entities. This file is structured with annotations (using "\_comment" keys) to describe each section corresponding to different API operations.

- **Using the Test Data:**
  - Use a tool like Postman or any HTTP client that supports raw JSON input.
  - Copy and paste the relevant section from the `Test_Data.json` into the body of your HTTP request.
  - Make sure to adjust the endpoint URL and HTTP method according to the specific action you are testing.
  - Note: The "\_comment" keys are for informational purposes and should be removed or ignored in actual API requests.
