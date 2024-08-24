# PAYTM-CLONE PROJECT

## BACKEND

### Basic Setup
- Add `.env` file in `backend` directory and add following variables
  ```
  MONGO_DB_URL=<db_name>
  PORT=<port_number>
  JWT_SECRET=<secret_key>
  ```

### Request & Response structure
#### signup
- request
  ```
  {
    username: 
    password:
    firstname:
    lastname:
  }
  ```
- response
  ```
  {
    "success": true,
    "message": "Successfully created the user",
    "data": <token>,
    "error": {}
  }
  ```
#### signin
- request
  ```
  {
    username: 
    password:
  }
  ```
- response
  ```
  {
    "success": true,
    "message": "Successfully signin the user",
    "data": <token>,
    "error": {}
  }
  ```
#### update
- request
  ```
  {
    username: ?
    password: ?
    firstname: ?
    lastname: ?
  }
  ```
- response
  ```
  {
    "success": true,
    "message": "Successfully updated the user",
    "error": {}
  }
  ```


## FRONTEND