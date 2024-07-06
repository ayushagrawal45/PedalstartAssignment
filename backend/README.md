# Backend Setup Guide

This guide will help you set up and run the backend server for your project.

## Prerequisites
Before you begin, ensure you have the following installed on your system:
- Node.js and npm
- MongoDB (make sure MongoDB server is running)

You can download Node.js and npm from [nodejs.org](https://nodejs.org).

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git

## Navigate to the backend directory:

cd your-repo-name/backend

## Install dependencies:

npm install

## Set up your environment variables:

Create a .env file in the backend directory if it doesn't exist.
Add your MongoDB connection URL to the .env file

MONGODB_URI=mongodb://localhost:27017/your-database-name

## Running the Server
To start the backend server, run:

node server.js