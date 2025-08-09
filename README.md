# 📝 Collaborative Editor

A real-time collaborative text editor built using **React**, **Socket.IO**, and **Quill.js**. It allows multiple users to edit the same document simultaneously with cursor presence, formatting, and live updates.

---

## ✨ Features

- 👥 Real-time collaboration
- 🖱️ Live cursors and selection tracking
- 💾 Auto-save with save status
- 🔒 User presence indicator (online users)
- 🌙 Dark/Light mode toggle
- 🔤 Rich text formatting with Quill.js

---

## 📸 Screenshots

### 🔆 Light Mode
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/cbfd37d2-69c4-4c27-aba0-9050e898cd17" />

### 🌘 Dark Mode
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/fe851ddb-1099-4d14-bad4-a06e43051977" />

```
---

## ⚙️ Tech Stack

| Frontend      | Backend           | Realtime         | Database |
|---------------|-------------------|------------------|----------|
| React.js      | Node.js + Express | Socket.IO        | MongoDB  |
| Quill.js      |                   |                  |          |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/devangi2004/Collaborative-Editor.git
cd Collaborative-Editor
````

### 2. Install Dependencies

```bash
# For client
cd client
npm install

# For server
cd ../server
npm install
```

### 3. Run the App

```bash
# In /server
npm run start

# In /client
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 🗃️ Folder Structure

```
Collaborative-Editor/
│
├── client/              # Frontend (React)
├── server/              # Backend (Node.js, Express, Socket.IO)
├── README.md
```

---

## 🧠 Future Enhancements

* 🔐 Authentication & user management
* 🗃️ Document list and versioning
* 🔗 Document sharing with permission control
* 📨 Notification system for collaborators

---
