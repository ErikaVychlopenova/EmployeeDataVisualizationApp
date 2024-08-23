# Employee Attendance App
## This project consists of two main components:

Frontend: An Angular application that provides a user interface.

Backend: A C# ASP.NET Core application that serves as the API and business logic layer.

The frontend Angular application communicates with the backend C# API to fetch and display data.


## Communication Flow

Frontend Request: The Angular application sends HTTP requests to the backend API to fetch or manipulate data.

Backend Response: The C# backend processes these requests, interacts with the database or services as needed, and returns the appropriate response in JSON format.

Data Display: The Angular application receives the data, processes it, and updates the user interface accordingly.

## Preview 

![image](https://github.com/user-attachments/assets/bf2d00b1-3f74-4a03-8e98-fd6c8daf9a6f)



# Project Overview

## Frontend: Angular Application

### Description

The Angular frontend provides an interactive user interface for managing employee data. It allows users to view, filter, and analyze data through tables and charts.

### Key Features

- **Employee Table**: Displays a paginated list of employee records.
- **Employee Chart**: Visualizes employee data in charts for better insights.

### Setup

1. **Clone the Repository and open frontend directory:**

    ```bash
    git clone https://github.com/ErikaVychlopenova/EmployeeDataVisualizationApp.git
    cd frontend
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Start the Development Server:**

    ```bash
    ng serve
    ```

    The Angular application will be available at [http://localhost:4200](http://localhost:4200).

## Backend: C# ASP.NET Core Application

### Description

The backend is an ASP.NET Core application that provides a RESTful API to manage and serve employee data. It handles HTTP requests from the Angular frontend and returns data in JSON format.

### Key Features

- **Employee Data API**: Provides endpoints for retrieving employee data.

### Setup

1. **Open backend directory:**

    ```bash
    cd backend
    ```

2. **Restore Dependencies:**

    ```bash
    dotnet restore
    ```

3. **Run the Application:**

    ```bash
    dotnet run
    ```

    The API will be available at [http://localhost:5294](http://localhost:5294).
