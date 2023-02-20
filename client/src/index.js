import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCZiX5l3ZDtc44KEPXJfuDttKaB2xhOTDU',
  authDomain: 'react-blog-c43a6.firebaseapp.com',
  projectId: 'react-blog-c43a6',
  storageBucket: 'react-blog-c43a6.appspot.com',
  messagingSenderId: '655364611888',
  appId: '1:655364611888:web:fae08de85f44ef5d67b2f5',
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
