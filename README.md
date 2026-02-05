# 🚀 Idriss Portfolio - Pure HTML/CSS/JavaScript

A stunning, modern portfolio website built with **pure HTML, CSS, and JavaScript** - no frameworks, no build tools, no dependencies. Just open and run!

## ✨ Features

- ✅ Interactive 3D elements with Three.js
- ✅ Glassmorphism design
- ✅ Dark/Light mode toggle
- ✅ Typing animation effect
- ✅ Mouse parallax on 3D shapes
- ✅ Smooth scrolling & animations
- ✅ Fully responsive design
- ✅ Contact form ready
- ✅ SEO optimized

## 🚀 Quick Start

### Easiest Way
1. Download all files
2. Double-click `index.html`
3. Done! ✨

### With Local Server
```bash
python -m http.server 8000
# OR
npx http-server
```

## 📁 Files

```
portfolio/
├── index.html    # Main HTML
├── styles.css    # All styles
├── script.js     # All JavaScript
└── assets/
    └── cv.pdf    # Add your CV here
```

## 🎨 Customization

### Update Personal Info

**In index.html**:
- Line 80-86: Your name
- Line 464: Email
- Line 472: Phone
- Line 480: GitHub
- Line 488: LinkedIn

**In script.js**:
- Line 66: Change typing text

### Change Colors

**In styles.css** (lines 10-17):
```css
:root {
    --primary: #00f0ff;      /* Your color */
    --secondary: #ff00ff;    /* Accent color */
    --accent: #7000ff;       /* Third color */
}
```

### Add Projects

Copy project card structure in `index.html` (around line 190):
- Update image URL
- Change title & description
- Update GitHub link
- Modify tech stack

### Update Skills

In `index.html` (around line 160), add/remove skill tags:
```html
<span class="skill-tag">Your Skill</span>
```

## 🌐 Deployment

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main
```
Enable Pages in Settings → Live at `username.github.io/portfolio`

### Netlify / Vercel
- Drag & drop folder
- Or connect GitHub repo
- Deploy automatically

## 🔧 Features Explained

**3D Elements**: Four floating geometric shapes using Three.js
**Glassmorphism**: Frosted glass effect on cards
**Typing Animation**: Auto-types "Future AI Engineer"
**Parallax**: 3D shapes follow mouse movement
**Responsive**: Works on all devices

## 📧 Contact Form Backend

### EmailJS (Recommended)
1. Sign up at emailjs.com
2. Add before `</body>`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

### Formspree
Change form action to:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

## 🎯 SEO Tips

- Update meta tags in `index.html`
- Add unique descriptions
- Use descriptive alt text
- Create sitemap.xml
- Submit to Google Search Console

## 📱 Browser Support

✅ Chrome, Firefox, Safari, Edge (all latest versions)
Requires WebGL for 3D elements

## 🐛 Troubleshooting

**3D not showing**: Update browser (WebGL required)
**Images not loading**: Check file paths
**Menu not working**: Check console for errors

## 💡 Pro Tips

1. Keep projects updated
2. Use high-quality images
3. Optimize all media files
4. Test on multiple devices
5. Get feedback from others

## 📞 Contact

- **Email**: Idrisj727@gmail.com
- **GitHub**: github.com/idrisjl
- **LinkedIn**: linkedin.com/in/idris-jlidi-781678336

## 📄 License

MIT License - Free for personal use

---

**No React • No Node.js • No Build Tools** 🚀

Just pure HTML, CSS, and JavaScript!
