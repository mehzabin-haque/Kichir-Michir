## **ChirpUp - A Bangla Twitter Clone**

ChirpUp is a captivating Twitter clone developed in Bangla, offering users a unique experience. It is built using React, NextJS, TailwindCSS, MongoDB, and Prisma.

### **Functionalities**

- Authentication system to secure user accounts
- Notification system for real-time updates
- Image upload feature using Base64 strings
- Prisma ORM integrated with MongoDB for efficient data management
- Following functionality to stay connected with other users
- Comments / Replies for engaging interactions
- Likes functionality to appreciate posts

### **Prerequisites**

Make sure you have **Node version 14.x** installed on your system.

### **Cloning the Repository**

To get started, clone the repository using the following command:

```shell
git clone https://github.com/shazzad5709/chirp-up.git
```

### **Installation**

After cloning the repository, install the required packages with the following command:

```shell
npm i
```

### **Setup .env File**

Before running the app, you need to set up the .env file with the required environment variables. Please include the following values:

```js
DATABASE_URL=    // MongoDB connection URL
NEXTAUTH_JWT_SECRET=    // JWT secret for NextAuth.js
NEXTAUTH_SECRET=    // Secret for NextAuth.js
```

### **Running the App**

To start the development instance of the app, use the following command:

```shell
npm run dev
```

### **Available Commands**

You can run various commands using npm:

| Command         | Description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
| `build`         | Builds a production instance of the app  |

Feel free to explore and contribute to ChirpUp on GitHub. Enjoy your Twitter-like experience in Bangla! 🐦
