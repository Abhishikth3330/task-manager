# 📋 MERN Task Manager

A full-featured task management web application built with the **MERN stack** (MongoDB, Express, React, Node.js) designed to handle real-world team collaboration use cases. This app supports **role-based access** (Admin and Member), **project/task assignment**, and **progress tracking** — perfect for small to medium teams managing multiple ongoing projects.

---

## 🎥 Demo

https://github.com/Abhishikth3330/task-manager/blob/main/assets/taskmanager_video.mp4
<details>
  <summary>🎬 Click here to view the embedded demo (GitHub-supported format)</summary>

  <!-- GitHub only renders video inline for .mp4 in the assets folder -->
  <video src="https://user-images.githubusercontent.com/12345678/abcdef12345678.mp4" controls width="100%"></video>

</details>

---

## 🧩 Tech Stack

| Layer     | Technology                          |
|-----------|--------------------------------------|
| Frontend  | [React](w), [Vite](w), [Axios](w), [Tailwind CSS](w) and [Bootstrap](w) |
| Backend   | [Node.js](w), [Express.js](w), [JWT](w) for auth |
| Database  | [MongoDB](w) via [Mongoose](w)       |
| Version Control | [Git](w), [GitHub](w)          |

---

## ✨ Key Features

### 🔐 Role-Based Access
- **Admin**: Full access to create/manage projects and tasks, assign members, and view dashboards.
- **Member**: Can view assigned tasks, mark them as complete, and track project progress.

### 📁 Project Management
- Create new projects with descriptions and due dates
- Assign members to specific projects

### ✅ Task Management
- Create, assign, and track tasks for each project
- Members can check off completed tasks
- Admin dashboard shows task completion percentage

### 📊 Dashboard
- Summary view of task progress
- Role-specific dashboard (Admin vs Member)

---

## 📁 Folder Structure

```bash
task-manager/
├── assets/
│ └── demo.mp4 # Project walkthrough video
├── backend/ # Express + MongoDB + API routes
│ ├── config/
│ ├── controllers/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ ├── uploads/
│ └── .env (ignored)
├── frontend/Task-Manager/ # Vite + React app
│ ├── src/
│ ├── .env # VITE_API_URL
│ └── dist/ (build output, ignored)
└── README.md```

---

## 🧪 How to Run Locally

### 🧰 Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/atlas/database) (Atlas or Local)
- Git

---

### 📦 Backend Setup

```bash
cd backend
npm install
```


**Create a .env file in backend/ with:**
```bash
PORT=8000
MONGO_URI= mongodb+srv://test:KpQrUyiIRycIFQwI@taskmanager.esnrbxb.mongodb.net/?retryWrites=true&w=majority&appName=taskManager
JWT_SECRET= 4c8202ee69a630e48159efd78e550fb449a9ae88ef77bb1755d4bfe4188de718f2d12fc0f7ffdd991a824d023fcfa1e41f1820b8b83f55e9c9251a89552cf0ab
```




**Then run the server:**
```bash
npm run dev
```




**🎨 Frontend Setup**
```bash
cd frontend/Task-Manager
npm install
```




**Create a .env file in frontend/Task-Manager/ with:**
```bash
VITE_API_URL=http://localhost:8000
```



**Start the dev server:**
```bash
npm run dev
```

---

### 💡 Future Improvements
- ✅ Email notifications on task assignment

- ✅ Drag-and-drop task interface (Trello-style)

- ✅ Commenting system per task

- ✅ User profile and avatars


---

## 🧑‍💻 Author

**Abhishikth Thul**  
💼 *Aspiring software engineer with a focus on AI and full-stack development.*

🔗 [LinkedIn](https://www.linkedin.com/in/abhishikth-thul/)  
🔗 [GitHub](https://github.com/Abhishikth3330)

