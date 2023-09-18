
-- User Registration Table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Payment Processing Table
CREATE TABLE payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  card_number VARCHAR(16) NOT NULL,
  cvv VARCHAR(3) NOT NULL,
  cardholder_name VARCHAR(255) NOT NULL,
  expiry_date DATE NOT NULL
);

-- Available Flights Table
CREATE TABLE flights (
  id INT AUTO_INCREMENT PRIMARY KEY,
  flight_name VARCHAR(255) NOT NULL,
  airline VARCHAR(255) NOT NULL,
  departure_airport VARCHAR(255) NOT NULL,
  destination_airport VARCHAR(255) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  departure_time TIME NOT NULL
);
