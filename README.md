# ⚡ ConvertX — Word to PDF Converter

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Backend-Node.js-brightgreen)
![TailwindCSS](https://img.shields.io/badge/UI-TailwindCSS-blueviolet)
![Status](https://img.shields.io/badge/Status-Active-success)

> ConvertX is a full-stack web app that allows users to **upload a `.docx` Word file** and get a downloadable **`.pdf`** instantly.  
> Built with **Node.js**, **Express**, and styled using **Tailwind CSS**, this project showcases seamless file upload, server-side processing, and real-time file conversion.


---

## 🔧 Tech Stack

### 🖼 Frontend

| Tech           | Role                                   |
|----------------|----------------------------------------|
| **HTML5**      | Structure of the app                   |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **JavaScript (Vanilla)** | Handles form submission and interactions |
| **Fetch API**  | Sends file to backend using POST request |

### 🚀 Backend

| Tech             | Role                                                |
|------------------|-----------------------------------------------------|
| **Node.js**      | Runtime environment for the server                  |
| **Express.js**   | Web framework for building API routes               |
| **Multer**       | Handles file upload from frontend                   |
| **docx-pdf**     | Converts `.docx` to `.pdf` via LibreOffice internally |
| **Path**         | Manages file system paths                           |
| **CORS**         | Enables cross-origin requests                       |

### 🛠 Tooling & Platforms

| Tool/Platform   | Purpose                                |
|------------------|----------------------------------------|
| **Git & GitHub** | Version control & open-source hosting |
| **Vercel**       | (Optional) Frontend deployment         |
| **Render / Railway** | (Optional) Backend deployment        |
| **LibreOffice**  | Backend dependency for conversion logic |


---

## ⚙️ Setup Instructions

### 1. 🔄 Clone the Repo

```bash
git clone https://github.com/dakshkhare/convertX.git
cd convertX
2. 📦 Install Dependencies
bash
Copy
Edit
npm install
⚠️ Make sure LibreOffice is installed on your system.
It is required by docx-pdf to perform the conversion.

3. 🛠️ Start Backend
bash
Copy
Edit
npm start
The server will be running at http://localhost:3000.

🧠 How It Works
Upload a .docx file using the frontend form.

File is sent to backend using a POST request (multipart/form-data).

Multer saves it temporarily in the /uploads directory.

The docx-pdf package (backed by LibreOffice) converts it to .pdf.

Converted file is returned for download.

📦 Sample API Usage
bash
Copy
Edit
curl -X POST http://localhost:3000/upload \
  -F "file=@/path/to/your/document.docx"
✨ Features
✅ Upload .docx file and get .pdf instantly

✅ Clean Tailwind-powered UI

✅ Secure server-side processing

✅ Minimal and fast API

🚀 Ready for deployment (Vercel + Render)

💡 Learning Outcomes
Whether you're a beginner or intermediate dev, this project helps you understand:

How to handle file uploads in Node.js

Server-side file conversion pipelines

Building a frontend that communicates with backend

Tailwind CSS for beautiful utility-first design

REST API communication via Fetch

🧩 Future Improvements
⏳ Drag & Drop upload support

⏳ Conversion progress bar

⏳ Support .doc and .odt formats

⏳ Upload history & conversion logs

⏳ Option to email the converted PDF

🤝 Contributing
Pull requests are welcome! If you have ideas or want to contribute:

bash
Copy
Edit
git checkout -b feature/your-feature-name
git commit -m "Added your feature"
git push origin feature/your-feature-name
Open a PR and let's build it together 🚀

📄 License
This project is open-sourced under the MIT License.

🙋‍♂️ Author
Built with ❤️ by Daksh Khare

If you found this helpful, give it a ⭐️ to support the project!
