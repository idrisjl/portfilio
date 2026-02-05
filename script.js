// ===================================
// LOADING SCREEN
// ===================================

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        initThreeJS();
    }, 2000);
});

// ===================================
// THEME TOGGLE
// ===================================

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('light-mode')) {
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }
});

// ===================================
// MOBILE NAVIGATION
// ===================================

const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===================================
// SMOOTH SCROLLING
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// BACK TO TOP BUTTON
// ===================================

const backToTop = document.getElementById('back-to-top');

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// TYPING ANIMATION
// ===================================

const typedTextElement = document.getElementById('typed-text');
const textToType = "Future AI Engineer";
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typedTextElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    }
}

// Start typing after page loads
setTimeout(typeText, 2500);

// ===================================
// THREE.JS 3D SCENE
// ===================================

let scene, camera, renderer, meshes = [];
let mouseX = 0, mouseY = 0;

function initThreeJS() {
    const canvas = document.getElementById('three-canvas');
    
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;
    
    // Create geometric shapes
    const geometries = [
        new THREE.TorusGeometry(0.7, 0.2, 16, 100),
        new THREE.OctahedronGeometry(0.8),
        new THREE.TetrahedronGeometry(0.8),
        new THREE.IcosahedronGeometry(0.7)
    ];
    
    const material = new THREE.MeshPhongMaterial({
        color: 0x00f0ff,
        emissive: 0x00f0ff,
        emissiveIntensity: 0.3,
        shininess: 100,
        transparent: true,
        opacity: 0.7,
        wireframe: false
    });
    
    geometries.forEach((geometry, index) => {
        const mesh = new THREE.Mesh(geometry, material.clone());
        mesh.position.set(
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 3
        );
        mesh.userData.velocity = {
            x: (Math.random() - 0.5) * 0.01,
            y: (Math.random() - 0.5) * 0.01,
            rotation: (Math.random() - 0.5) * 0.02
        };
        scene.add(mesh);
        meshes.push(mesh);
    });
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight1 = new THREE.PointLight(0x00f0ff, 1, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0xff00ff, 1, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);
    
    // Mouse move event
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
    
    // Window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Animation loop
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    
    meshes.forEach((mesh, index) => {
        // Rotate shapes
        mesh.rotation.x += mesh.userData.velocity.rotation;
        mesh.rotation.y += mesh.userData.velocity.rotation * 1.5;
        
        // Floating motion
        mesh.position.x += mesh.userData.velocity.x;
        mesh.position.y += mesh.userData.velocity.y;
        
        // Boundary check
        if (Math.abs(mesh.position.x) > 4) mesh.userData.velocity.x *= -1;
        if (Math.abs(mesh.position.y) > 3) mesh.userData.velocity.y *= -1;
        
        // Parallax effect
        const parallaxX = mouseX * 0.5;
        const parallaxY = mouseY * 0.5;
        mesh.position.x += (parallaxX - mesh.position.x) * 0.02;
        mesh.position.y += (parallaxY - mesh.position.y) * 0.02;
    });
    
    // Camera parallax
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    
    renderer.render(scene, camera);
}

// ===================================
// PARTICLES BACKGROUND
// ===================================

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: rgba(0, 240, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
            z-index: 0;
        `;
        particlesContainer.appendChild(particle);
    }
}

// ===================================
// SCROLL ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// ===================================
// FORM SUBMISSION
// ===================================

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert(`Thank you for your message! I'll get back to you soon.\n\nName: ${name}\nEmail: ${email}`);
    
    // Reset form
    contactForm.reset();
});

// ===================================
// NAVBAR BACKGROUND ON SCROLL
// ===================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.05)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// ===================================
// ACTIVE NAV LINK HIGHLIGHTING
// ===================================

const sections = document.querySelectorAll('section');
const navLinksArray = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===================================
// SKILL TAGS ANIMATION ON SCROLL
// ===================================

const skillTags = document.querySelectorAll('.skill-tag');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = 'skillPop 0.5s ease forwards';
            }, index * 50);
        }
    });
}, { threshold: 0.5 });

skillTags.forEach(tag => {
    skillObserver.observe(tag);
});

// ===================================
// PROJECT CARDS HOVER EFFECT
// ===================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// DYNAMIC YEAR IN FOOTER
// ===================================

const currentYear = new Date().getFullYear();
document.querySelector('.footer p').textContent = `© ${currentYear} Idriss. All rights reserved.`;

// ===================================
// CURSOR TRAIL EFFECT (Optional)
// ===================================

let cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY });
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// ===================================
// PARALLAX SCROLL EFFECT
// ===================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===================================
// IMAGE LAZY LOADING
// ===================================

const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized resize handler
const handleResize = debounce(() => {
    // Resize operations here
}, 250);

window.addEventListener('resize', handleResize);

// ===================================
// EASTER EGG: KONAMI CODE
// ===================================

let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    // Add rainbow colors to everything
    document.body.style.animation = 'rainbow 2s linear infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        document.body.style.animation = '';
        style.remove();
    }, 5000);
}

// ===================================
// INITIALIZE PARTICLES
// ===================================

createParticles();

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c👋 Hello there!', 'font-size: 20px; color: #00f0ff; font-weight: bold;');
console.log('%cLooking at the code? Nice! Feel free to reach out if you have any questions.', 'font-size: 14px; color: #ff00ff;');
console.log('%c📧 Idrisj727@gmail.com', 'font-size: 14px; color: #00f0ff;');

// ===================================
// ACCESSIBILITY: KEYBOARD NAVIGATION
// ===================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ===================================
// PRELOAD IMAGES
// ===================================

function preloadImages() {
    const imageUrls = [
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

preloadImages();

// ===================================
// INITIALIZATION
// ===================================

console.log('✅ Portfolio initialized successfully!');
