import React from 'react'
import App from './App';
import Post from './Post';
import { BrowserRouter,Routes,Route} from "react-router-dom";

export default function Home() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  </BrowserRouter>
  )
}
