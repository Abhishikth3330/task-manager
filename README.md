# 📋 MERN Task Manager

A full-featured task management web application built with the **MERN stack** (MongoDB, Express, React, Node.js) designed to handle real-world team collaboration use cases. This app supports **role-based access** (Admin and Member), **project/task assignment**, and **progress tracking** — perfect for small to medium teams managing multiple ongoing projects.

---

## 🎥 Demo

https://github.com/Abhishikth3330/task-manager/blob/main/assets/taskmanager_video.mp4
<details>
  <summary>🎬 Click here to view the embedded demo (GitHub-supported format)</summary>

  <!-- GitHub only renders video inline for .mp4 in the assets folder -->
  <video src="assets/demo.mp4" controls width="100%"></video>

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

task-manager/
├── backend/ # Express + MongoDB + API routes
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── .env (ignored)
├── frontend/
│ └── Task-Manager/ # Vite + React app
│ ├── src/
│ ├── .env # VITE_API_URL
│ └── dist/ (build output, ignored)
├── assets/
│ └── demo.mp4 # Project walkthrough video
└── README.md


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



**Create a .env file in backend/ with:**
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret




**Then run the server:**
npm run dev




**🎨 Frontend Setup**
cd frontend/Task-Manager
npm install




**Create a .env file in frontend/Task-Manager/ with:**
VITE_API_URL=http://localhost:5000



**Start the dev server:**
npm run dev



💡 Future Improvements
✅ Email notifications on task assignment

✅ Drag-and-drop task interface (Trello-style)

✅ Commenting system per task

✅ User profile and avatars




**🧑‍💻 Author**
Abhishikth Thul
💼 Aspiring software engineer with a focus on AI and full-stack development.
🔗 LinkedIn
🔗 GitHub


```