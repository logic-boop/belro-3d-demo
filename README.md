# 🛸 BELRO // Design Intelligence Lab

**BELRO** is a high-performance, immersive digital catalog designed to showcase the intersection of 3D architecture and design intelligence. Built with a focus on aesthetic precision, balanced white space, and rapid AI orchestration.

---

## 🏗️ Technical Architecture

This project demonstrates the **"Vibe Coding"** philosophy—utilizing high-level AI orchestration to bridge the gap between complex 3D environments and high-performance web interfaces.

* **Framework:** Next.js 14 (App Router)
* **3D Engine:** React Three Fiber / Three.js
* **Styling:** Tailwind CSS (Custom Responsive Fluid Typography)
* **Asset Management:** Optimized GLB/GLTF model handling
* **Deployment:** Vercel Edge Network

---

## 🚀 Key Features

### 1. Immersive 3D Environments
Integrated real-time 3D models with responsive scaling that adjusts dynamically based on the device viewport (Mobile/Tablet/Desktop).

### 2. Centered Catalog Protocol
A 54-unit intelligence asset gallery featuring a strict centering layout and consistent gutter spacing.

* **Square Aspect Ratio:** Gallery cards maintain a consistent 1:1 ratio.
* **Gutter Balance:** Strategic horizontal padding ensures content is perfectly framed on all screens.
* **Glassmorphism UI:** Sophisticated backdrop-blur overlays for unit identification.

### 3. Production Optimized
* **Lazy-loading:** 3D assets with Suspense fallbacks.
* **Architecture:** Clean, modular component architecture (Navbar, ToiletScene, Catalog).

---

📦 Key Dependencies
Include this section to show the high-performance stack you are using for the BELRO project:

Next.js 14: Core framework for the App Router and optimized rendering.

Three.js & React Three Fiber: Powers the immersive 3D background and model interactions.

Tailwind CSS: Used for the strict centering protocol and responsive fluid typography.

Lucide React: Providing the minimal iconography for the UI.

📂 Project Structure
├── app/
│   ├── components/       # UI Components (Navbar, ToiletScene)
│   ├── globals.css       # Custom Tailwind & CSS Variables
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main Entry Point & Centered Catalog Grid
├── public/
│   ├── catalog/          # 54 Asset images for the grid
│   └── models/           # 3D GLB/GLTF Models and textures
├── .gitignore            # Git exclusion rules
├── package.json          # Project dependencies and scripts
└── README.md             # Project Documentation


1. **Clone the repository:**
   ```bash
   git clone [https://github.com/logic-boop/belro-3d-demo.git](https://github.com/logic-boop/belro-3d-demo.git)
