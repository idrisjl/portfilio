# ⚡ Quick Setup Guide

## 🚀 Get Started in 3 Steps

### Step 1: Download
Download all files to your computer

### Step 2: Customize
- Open `index.html` in a text editor
- Update your personal information:
  - Name (line 80-86)
  - Email (line 464)
  - Phone (line 472)
  - GitHub (line 480)
  - LinkedIn (line 488)
  - About text (line 115)
- Update projects section (line 190+)
- Update skills section (line 160+)

### Step 3: Open
Double-click `index.html` to view in browser

## 📝 Essential Updates

### 1. Personal Info
```html
<!-- In index.html -->
<h1 class="hero-name">YOUR NAME</h1>
<a href="mailto:YOUR_EMAIL">YOUR_EMAIL</a>
<a href="tel:+YOUR_PHONE">+YOUR PHONE</a>
```

### 2. Typing Text
```javascript
// In script.js (line 66)
const textToType = "Your Title Here";
```

### 3. Colors
```css
/* In styles.css (line 10-17) */
--primary: #00f0ff;    /* Change these */
--secondary: #ff00ff;
--accent: #7000ff;
```

### 4. Projects
Copy and modify project cards in `index.html`:
- Change image URL
- Update title & description
- Modify GitHub link
- Update tech badges

### 5. Add Your CV
- Create `assets` folder
- Add `cv.pdf` file
- Download button will work automatically

## 🌐 Deploy Your Portfolio

### GitHub Pages (Free)
```bash
git init
git add .
git commit -m "My portfolio"
git remote add origin YOUR_REPO_URL
git push -u origin main
```
Then enable Pages in repo Settings

### Netlify (Free)
1. Go to netlify.com
2. Drag and drop your folder
3. Done!

### Any Web Host
Upload files via FTP to your hosting

## 🎨 Quick Customization

### Change Colors
Edit CSS variables in `styles.css`:
- `--primary`: Main accent color
- `--secondary`: Secondary accent
- `--accent`: Third color

### Change Fonts
In `index.html`, update Google Fonts link
In `styles.css`, change font-family

### Add Sections
Copy any section structure and customize

## 📱 Test Your Site

1. Desktop browsers (Chrome, Firefox, Safari)
2. Mobile devices (phone, tablet)
3. Different screen sizes

## 🔗 Add Contact Form Backend

### EmailJS
1. Sign up at emailjs.com
2. Get your keys
3. Add to `script.js`

### Formspree
Change form action in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_ID">
```

## ✅ Checklist

- [ ] Update name
- [ ] Update contact info
- [ ] Update about section
- [ ] Add projects
- [ ] Update skills
- [ ] Add CV file
- [ ] Change colors (optional)
- [ ] Test on mobile
- [ ] Deploy online
- [ ] Share with world!

## 💡 Tips

- Use high-quality project images
- Keep text concise and clear
- Show your best 3-5 projects
- Test everything before deploying
- Get feedback from friends

## 🐛 Common Issues

**3D shapes not showing**
→ Update your browser

**Images not loading**
→ Check image URLs are correct

**Mobile menu not working**
→ Check browser console for errors

## 📞 Need Help?

Check the full README.md for detailed instructions

---

**Ready to launch? Let's do this! 🚀**
