import React, { useState } from 'react';

const Popup = ({ onClose, onAddStory }) => {
  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !synopsis || !genre) {
      alert('Please fill in all fields');
      return;
    }
    onAddStory({ title, synopsis, genre });
    setTitle('');
    setSynopsis('');
    setGenre('');
    onClose(); // Close the popup after submitting the form
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Create your story</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold">Title:</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="synopsis" className="block font-semibold">Synopsis:</label>
            <textarea id="synopsis" value={synopsis} onChange={(e) => setSynopsis(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 w-full" rows="4"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="genre" className="block font-semibold">Genre:</label>
            <select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 w-full">
              <option value="">Select Genre</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Mystery">Mystery</option>
              <option value="Love">Love</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Thriller">Thriller</option>
            </select>
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Generate story</button>
          <button type="button" onClick={onClose} className="ml-2 bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
