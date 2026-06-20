# 🔥 Firebase Web Application

एक complete Firebase-integrated React web app with authentication, Realtime Database, और Firestore support.

## ✨ Features

- ✅ **Firebase Authentication** - Email/Password Sign In & Sign Up
- ✅ **Realtime Database** - User data storage
- ✅ **Firestore** - Document-based data storage
- ✅ **Cloud Storage** - File upload support
- ✅ **Responsive UI** - Modern design with Vite + React

## 🚀 Installation

```bash
# 1. Node modules install करो
npm install

# 2. Development server शुरू करो
npm run dev

# 3. Production के लिए build करो
npm run build
```

## 🔐 Environment Variables

`.env.local` file में Firebase configuration add करो:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## 📁 Project Structure

```
.
├── src/
│   ├── firebase.js          # Firebase configuration
│   ├── App.jsx              # Main React component
│   ├── App.css              # Styling
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
├── .env.local               # Environment variables
├── .gitignore               # Git ignore rules
└── .github/workflows/
    └── deploy.yml           # GitHub Actions workflow
```

## 📚 Features Explained

### Authentication
```javascript
// Sign Up
const userCredential = await createUserWithEmailAndPassword(auth, email, password);

// Sign In
const userCredential = await signInWithEmailAndPassword(auth, email, password);

// Sign Out
await signOut(auth);
```

### Realtime Database
```javascript
// Write Data
await set(ref(database, 'users/' + uid), { email, createdAt });

// Read Data
const snapshot = await get(child(dbRef, `users/${uid}`));
```

### Firestore
```javascript
// Add Document
await addDoc(collection(firestore, 'posts'), {
  userId: user.uid,
  title: 'My Post',
  timestamp: new Date()
});
```

## 🔧 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 📦 Dependencies

- **firebase** ^10.7.0 - Firebase SDK
- **react** ^18.2.0 - React library
- **react-dom** ^18.2.0 - React DOM
- **vite** ^5.0.0 - Build tool
- **@vitejs/plugin-react** ^4.2.0 - Vite React plugin

## 🌐 Deployment

GitHub Actions automatically builds and uploads artifacts on every push to `main` branch.

Check workflows: `.github/workflows/deploy.yml`

## 📝 License

MIT License - Feel free to use this project!

## 👨‍💻 Author

Created by: **rishikaofficial2024**

---

**Happy Coding! 🚀**
