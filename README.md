# CONTACT LIST

***A beginner-friendly full-stack app to manage contacts using Node.js, Express, and MongoDB.***

---

## ***Features***

- **Add** a new contact (Name, Phone, Email)
- **Find** a contact by name
- **Update** a contact’s details
- **Delete** a contact
- **List** all contacts in a neat table

---

## ***Tech Stack***

- **Backend:** Node.js + Express  
- **Database:** MongoDB + Mongoose  
- **Frontend:** HTML, CSS, JavaScript (Fetch API)

---

## ***Project Structure***

```plaintext
contact-list/
│
├── models/
│   └── Contact.js
├── db.js
├── server.js        # Express backend
├── index.html       # Frontend
├── script.js        # Frontend logic
├── package.json
```

---

## ***Setup Instructions***

### **1. Install dependencies**

```bash
npm start
```

### **2. Start MongoDB**

Make sure MongoDB is running locally:  
```bash
`mongodb://127.0.0.1:27017/contactList`
```

### **3. Start the backend server**

```bash
node server.js
```

Server runs at: **http://localhost:7000**

---

## ***Frontend Usage***

- Open `index.html` in a browser  
- Use the form to:
  * Add contacts  
  * Update contact details  
  * Delete by name  
  * Find contact by name  
  * View all contacts in a table

---

## ***API Endpoints***

- `POST` **/add/:name/:phone/:email**
- `GET` **/list**
- `GET` **/find/:name**
- `PUT` **/update/:name/:newPhone/:newEmail**
- `DELETE` **/delete/:name**

---

## ***Contribution***

1. Fork the repo  
2. Create a new branch – `feature/my-change`  
3. Commit and push  
4. Open a Pull Request

---

### ***About***

This **CONTACT LIST** project was created as a practice project for learning **Express + MongoDB + Basic Frontend Integration**.
