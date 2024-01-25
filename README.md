<div align="center">
  <h1>☁️ Cloud Box API</h1>

  ![Version](https://img.shields.io/github/package-json/v/marcode24/cloudbox-backend?style=popout&logo=npm)
  ![GitHub CI Workflow Status](https://img.shields.io/github/actions/workflow/status/marcode24/cloudbox-backend/ci.yml?branch=main&style=popout&logo=testcafe&label=linter)
  ![GitHub repo size](https://img.shields.io/github/repo-size/marcode24/cloudbox-backend?style=popout&logo=github&label=repo%20size)
  ![GitHub](https://img.shields.io/github/license/marcode24/cloudbox-backend?style=popout&logo=github&label=license)
  ![GitHub Repo stars](https://img.shields.io/github/stars/marcode24/cloudbox-backend?style=popout&logo=apachespark&color=yellow&logoColor=yellow)
  ![Github repo views](https://img.shields.io/github/search/marcode24/cloudbox-backend/cloudbox-backend?style=popout&logo=github&label=repo%20views)
  ![GitHub last commit](https://img.shields.io/github/last-commit/marcode24/cloudbox-backend?style=popout&logo=git&label=last%20commit)
</div>

## 🚀 Getting Started

This is the backend for the Cloud Box project. It is a REST API that is used to manage the cloud box.

### 📝 Requirements

- [![Node](https://img.shields.io/badge/Node-gray?style=popout&logo=node.js)](https://nodejs.org/en/)
- [![NPM](https://img.shields.io/badge/NPM-blue?style=popout&logo=npm)](https://www.npmjs.com/)
- [![Git](https://img.shields.io/badge/Git-gray?style=popout&logo=git)](https://git-scm.com/)
- [![MongoDB](https://img.shields.io/badge/MongoDB-green?style=popout&logo=mongodb)](https://www.mongodb.com/)
- [![Azure Storage Account](https://img.shields.io/badge/Azure%20Storage%20Account-blue?style=popout&logo=microsoft-azure)](https://azure.microsoft.com/en-us/services/storage/)

Optional tools:

- [![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-blue?style=popout&logo=visual-studio-code)](https://code.visualstudio.com/)
- [![Postman](https://img.shields.io/badge/Postman-black?style=popout&logo=postman)](https://www.postman.com/)
- [![MongoDB Compass](https://img.shields.io/badge/MongoDB%20Compass-green?style=popout&logo=mongodb)](https://www.mongodb.com/products/compass)

### 📦 Installation & Usage

```bash
# Clone this repository
$ git clone https://github.com/marcode24/cloudbox-backend

# Go into the repository
$ cd cloudbox-backend

# Install dependencies
$ npm install

# Start the server
$ npm run start
```

### 📝 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file in the root of the project:

- `PORT` - The port number where the server will run
- `MONGO_URL` - The URI of the MongoDB database
- `JWT_SECRET` - The secret key used to sign the JWT tokens for authentication and authorization purposes
- `AZURE_STORAGE_CONNECTION_STRING` - The connection string of the Azure Storage Account used to store the files uploaded by the users

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. 😉
