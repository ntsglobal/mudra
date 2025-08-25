# NTS Mudra Digital Wallet Backend

This repository contains the backend implementation for the NTS Mudra Digital Wallet. NTS Mudra is a reward token/currency earned through NTS Nihon Global's various apps and services. This wallet aims to provide a centralized platform for users to manage, track, and utilize their earned NTS Mudra across multiple verticals.

## Project Overview

* **Objective:** To create a unified, secure digital wallet for NTS Mudra management, enabling seamless integration across NTS Nihon Global services.
* **Key Features (Planned/Under Development):** Balance tracking, transaction history, multi-vertical earning integration, redemption marketplace, security features, cross-platform compatibility, real-time notifications.

## Technology Stack

* **Backend:** Node.js with Express.js
* **Database:** MySQL
* **ORM:** Sequelize
* **Authentication:** (Will implement: JWT with bcryptjs)

## Setup and Running Locally

### Prerequisites

* Node.js (LTS version recommended)
* MySQL Server
* npm (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ntsglobal/mudra.git](https://github.com/ntsglobal/mudra.git)
    cd mudra # or mudra-wallet-backend depending on your local name
    ```
2.  **Install Node.js dependencies:**
    ```bash
    npm install
    ```

### Database Configuration

1.  **Create a MySQL database:**
    ```sql
    CREATE DATABASE nts_mudra_wallet;
    ```
2.  **Create a `.env` file** in the root of the project with your database credentials:
    ```
    DB_HOST=localhost
    DB_USER=your_mysql_username
    DB_PASSWORD=your_mysql_password
    DB_NAME=nts_mudra_wallet
    PORT=3000 # Or any desired port
    ```
    (Make sure `DB_USER` and `DB_PASSWORD` match your MySQL setup, e.g., `root` and `SUJAL@26`).

### Running the Application

To start the backend server and synchronize the database (creating tables if they don't exist):

```bash
node server.js
