# 📦 Jonathan Philippe Portfolio - Export Guide

## Project Location
All files are located in: `/app`

---

## 🗂️ Complete File Structure

### **Frontend Files** (`/app/frontend/`)

#### **Main Application Files**
- `/app/frontend/src/App.js` - Main app component with all sections
- `/app/frontend/src/App.css` - Global styles and animations
- `/app/frontend/src/index.css` - Tailwind CSS and base styles
- `/app/frontend/src/index.js` - React entry point

#### **Data Files**
- `/app/frontend/src/data/mock.js` - All mock data (17 destinations, conspiracy topics, etc.)

#### **Components** (`/app/frontend/src/components/`)
- `MusicPlayer.jsx` - Background music toggle
- `HeroSection.jsx` - Landing page with maze entrance
- `MilitarySection.jsx` - 27D Journey military law section
- `TravelSection.jsx` - 3D globe travel section
- `Globe3D.jsx` - 3D rotating Earth component with destination modals
- `HistorySection.jsx` - Conspiracy topics with popup modals
- `CombatSection.jsx` - Combat & Focus (MMA, Gun Range, etc.)
- `PhilosophySection.jsx` - Philosophy & Christian faith
- `FutureSection.jsx` - Portfolio & social media links

#### **Shadcn UI Components** (`/app/frontend/src/components/ui/`)
- All pre-installed Shadcn components (40+ components)

#### **Configuration Files**
- `/app/frontend/package.json` - Dependencies (React 19, Three.js, react-globe.gl)
- `/app/frontend/tailwind.config.js` - Tailwind configuration
- `/app/frontend/craco.config.js` - Create React App configuration
- `/app/frontend/.env` - Environment variables (REACT_APP_BACKEND_URL)

---

### **Backend Files** (`/app/backend/`)

#### **Main Server**
- `/app/backend/server.py` - FastAPI server with MongoDB setup
- `/app/backend/requirements.txt` - Python dependencies
- `/app/backend/.env` - Backend environment variables

---

### **Documentation Files** (`/app/`)
- `/app/FEATURES.md` - Complete feature list
- `/app/DESTINATIONS.md` - All 17 travel destinations with details
- `/app/EXPORT_GUIDE.md` - This file

---

## 📥 How to Export

### **Method 1: Download from Terminal**

```bash
# Navigate to your local machine and use SCP or similar
# Example:
scp -r user@server:/app/frontend ./jonathan-philippe-portfolio
```

### **Method 2: Create ZIP Archive**

```bash
# From within the container
cd /app
tar -czf jonathan-portfolio.tar.gz frontend/ backend/ *.md

# Then download the archive
```

### **Method 3: Git Repository**

```bash
cd /app
git init
git add .
git commit -m "Initial commit - Jonathan Philippe Portfolio"
git remote add origin <your-repo-url>
git push -u origin main
```

---

## 🚀 Deployment Instructions

### **Frontend Deployment**

#### **Option 1: Vercel (Recommended)**
1. Push code to GitHub
2. Connect to Vercel
3. Set environment variable: `REACT_APP_BACKEND_URL`
4. Deploy automatically

#### **Option 2: Netlify**
1. Build: `cd frontend && yarn build`
2. Deploy `build/` folder
3. Set environment variables in Netlify dashboard

#### **Option 3: AWS S3 + CloudFront**
1. Build: `yarn build`
2. Upload `build/` to S3 bucket
3. Enable static website hosting
4. Configure CloudFront for CDN

---

### **Backend Deployment**

#### **Option 1: Heroku**
```bash
cd backend
heroku create jonathan-philippe-api
heroku addons:create mongolab
git push heroku main
```

#### **Option 2: DigitalOcean App Platform**
1. Connect GitHub repository
2. Select `backend/` as root directory
3. Set environment variables
4. Auto-deploy on push

#### **Option 3: AWS Elastic Beanstalk**
1. Install EB CLI
2. `eb init` and `eb create`
3. Configure MongoDB connection
4. Deploy with `eb deploy`

---

## 🔑 Environment Variables

### **Frontend (.env)**
```env
REACT_APP_BACKEND_URL=https://your-api-domain.com
```

### **Backend (.env)**
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=jonathan_portfolio
```

---

## 📦 Key Dependencies

### **Frontend**
- React 19.2.0
- react-globe.gl 2.36.0
- three 0.180.0
- lucide-react 0.507.0
- tailwindcss 3.4.18
- axios 1.12.2

### **Backend**
- fastapi 0.110.1
- motor 3.3.1 (async MongoDB)
- uvicorn 0.25.0
- python-dotenv 1.0.1

---

## 🎨 Assets Included

### **Images**
- All using Unsplash URLs (high-quality, free to use)
- 17 destination mood images
- Conspiracy topic backgrounds
- Combat/gym imagery

### **Fonts**
- Orbitron (Google Fonts) - Headlines
- Poppins (Google Fonts) - Body text

### **Icons**
- Lucide React library (installed)
- Flag emojis for countries

---

## 📱 Features Summary

✅ **3D Interactive Globe** with 17 destinations
✅ **Cinematic Modals** for destination details
✅ **Conspiracy Topics** with popup descriptions
✅ **Christian Faith** section in philosophy
✅ **Gun Range** training discipline
✅ **Social Media Links** (LinkedIn, Instagram, Snapchat, Facebook)
✅ **Music Player Toggle** (placeholder for audio)
✅ **Fully Responsive** (mobile to desktop)
✅ **Tesla/Netflix Aesthetic** with smooth animations
✅ **Mock Data** ready for backend integration

---

## 🔧 Post-Export Setup

### **1. Install Dependencies**
```bash
# Frontend
cd frontend
yarn install

# Backend
cd backend
pip install -r requirements.txt
```

### **2. Start Development Servers**
```bash
# Frontend (port 3000)
cd frontend
yarn start

# Backend (port 8001)
cd backend
uvicorn server:app --reload --port 8001
```

### **3. Build for Production**
```bash
# Frontend
cd frontend
yarn build

# Backend (use gunicorn or similar)
cd backend
gunicorn server:app -w 4 -k uvicorn.workers.UvicornWorker
```

---

## 📞 Support & Customization

### **To Customize:**
1. **Content**: Edit `/app/frontend/src/data/mock.js`
2. **Styles**: Modify `/app/frontend/src/App.css`
3. **Colors**: Update `/app/frontend/tailwind.config.js`
4. **Sections**: Edit component files in `/app/frontend/src/components/`

### **To Add Backend:**
1. Uncomment MongoDB models in `server.py`
2. Create API endpoints for each section
3. Update frontend API calls to use real endpoints
4. Replace mock data with database calls

---

## ✅ Quality Checklist

- ✅ All components working
- ✅ Mobile responsive (tested 375px-1920px)
- ✅ 3D globe renders properly
- ✅ All modals open/close correctly
- ✅ No console errors
- ✅ Fast load times
- ✅ Smooth animations
- ✅ Cross-browser compatible

---

**Last Updated:** 2025
**Status:** Production Ready (Frontend with Mock Data)
**Next Steps:** Deploy frontend, optionally add backend for dynamic content
