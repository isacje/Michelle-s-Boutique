# Michelle's Boutique 🌸

Welcome to **Michelle's Boutique**, an elegant, luxury-themed web project tailored for showcasing boutique collections. This project is designed with simplicity, beauty, and functionality in mind, helping boutique businesses present their products online with style.

---

## 🌟 Project Overview

Michelle's Boutique is a **static website** with dynamic features for image gallery management. It serves two main purposes:

1. **Frontend Boutique Showcase** — Beautiful, responsive gallery showcasing the boutique products.
2. **Admin Image Management** — A simple admin interface for uploading product images via **Cloudinary API**.

---

## 📂 Directory Structure

```
Michelle/
├── index.html          # Home page - welcome and brand introduction
├── gallery.html        # Gallery page displaying boutique images
├── admin.html          # Admin page to upload new images
├── style.css           # Custom CSS styling
├── script.js           # JavaScript for interactivity & admin functions
├── images/             # Local image assets (optional with Cloudinary)
├── michelles-boutique-logo.png # Brand logo
├── M.png               # Additional branding/logo
└── README.md           # Project documentation
```

---

## ⚙️ Features

### 👗 Boutique Website
- Home page with elegant branding and introduction
- Gallery with responsive design for showcasing products
- Lightweight and fast-loading frontend

### 🗂️ Dynamic Image Gallery (via Cloudinary)
- Admin interface (`admin.html`) to upload images dynamically
- Integration-ready for **Cloudinary Image Hosting** *(requires setup)*
- Uploaded images appear in the **Gallery Page (`gallery.html`)**

### 📱 Responsive Design
- Fully responsive on desktops, tablets, and mobile devices
- Suitable for fashion boutiques, art galleries, or small luxury stores

---

## 💻 Technology Stack

| Technology       | Usage                       |
|------------------|-----------------------------|
| **HTML5**        | Structure of web pages      |
| **CSS3**         | Styling and layout          |
| **JavaScript**   | Dynamic interactivity       |
| **Cloudinary API** | Dynamic image uploads      |
| *(Optional)* **Tailwind CSS** | For advanced UI/UX styling |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/michelle-boutique.git
cd michelle-boutique
```

### 2️⃣ Open Locally
Simply open `index.html` in your browser to view the site.

### 3️⃣ Configure Cloudinary
For dynamic uploads via the Admin Panel:
1. Create a free account on [Cloudinary](https://cloudinary.com/).
2. Get your **cloud name**, **API key**, and **API secret**.
3. In `script.js`, update:
```js
const cloudName = 'your-cloud-name';
const uploadPreset = 'your-upload-preset'; // create an unsigned upload preset in Cloudinary
```

---

## 🌐 Deployment

Deploy Michelle's Boutique easily on:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- GitHub Pages *(optional)*

### Example Deployment Steps (Vercel)
1. Install Vercel CLI:
```bash
npm install -g vercel
```
2. Deploy:
```bash
vercel
```

---

## 🛡️ Security Notice
- **Admin upload API uses unsigned preset for simplicity.** Restrict usage or implement authentication for production environments.
- Avoid exposing API secrets in frontend code.

---

## 🤝 Contributing

Contributions are welcome! You can help with:
- Improving styles and responsiveness
- Adding features like product descriptions, filters, or animations
- Fixing bugs or optimizing code

**How to Contribute:**
1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Submit a Pull Request

---

## 📜 License

This project is currently **proprietary** to **Michelle's Boutique**. Unauthorized reproduction or redistribution is prohibited.

For usage rights, please contact the repository owner.

---

## 📧 Contact

For inquiries or collaborations:

- 📮 Email: hello@michellesboutique.com *(example)*
- 🌐 Website: [www.michellesboutique.com](https://www.michellesboutique.com) *(example placeholder)*

---

**© 2025 Michelle's Boutique — All Rights Reserved**
