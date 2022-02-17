import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Header from './components/header'
import PostPage from './pages/[post]'
import Home from './pages/home'

function App() {
  return (
    <>
      <Header blogName='Blog Ipsum' />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
