import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logoutIcon from '../images/logout2.png';
import Popup from './Popup';
import Skeleton from './Skeleton';
import useAuth from '../utils/AuthUtils';

const ChatPage = () => {
  const { signOut } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [genre, setGenre] = useState('');
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAddStory = async ({ title, synopsis, genre }) => {
    setLoading(true);
    try {
      const response = await generateStory(title, synopsis, genre);
      setStory(response.data.response);
    } catch (error) {
      console.error('Error:', error);
      alert('Inappropriate prompt.')
      setStory(null)
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
    setTitle(title);
  };

  const generateStory = async (title, synopsis, genre) => {
    const api = 'https://turn-the-page-backend.vercel.app/generate-story';
    try {
      return await axios.post(api, {
        genre,
        title,
        synopsis
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="flex h-screen">
      <div className="relative w-72 h-screen overflow-y-auto bg-gray-200 text-black shadow-2xl">
        <div className="p-4">
          <Link to="/">
            <h2 className="text-4xl font-semibold font-goChiHand text-center mb-4">Turn the page</h2>
          </Link>
          <div
            onClick={() => setShowPopup(true)}
            className="my-2 text-center border border-gray-300 transition-colors duration-500 rounded-md py-2 shadow-2xl font-bold font-great text-3xl cursor-pointer hover:bg-gray-300"
          >
            Create a new story +
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-[291px] bg-gray-200 py-2">
          <div className="flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-gray-300 rounded-full px-2 py-1" onClick={signOut}>
            <img src={logoutIcon} alt="Logout" className="mr-2 h-5 w-6 mb-[2px]" />
            <h2 className="text-md font-semibold">Logout</h2>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
        <div className="m-5 border border-gray-300 shadow-2xl min-h-full">
          {loading && <Skeleton />}
          {story && !loading ? (
            <>
              <h2 className="text-6xl font-semibold mt-6 font-great mb-4 pt-6 text-center">{title}</h2>
              <p className="text-gray-600 py-5 pb-14 px-24 text-2xl text-justify" style={{ whiteSpace: 'pre-line', marginBottom: '1rem' }}>
                {story}
              </p>
            </>
          ) : (
            <>
              <h2 className={`text-6xl font-semibold font-great mb-4 text-center mt-48 ${loading ? 'hidden' : ''}`}>Welcome to Turn The Page</h2>
              <p className={`text-gray-600 text-3xl text-center py-8 px-20 ${loading ? 'hidden' : ''}`}>
                Embark on a journey of imagination. Create your own adventure with just a few words.
              </p>
            </>
          )}
        </div>
      </div>
      {/* Render the Popup component only when showPopup is true */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} onAddStory={handleAddStory} />}
    </div>
  );
};

export default ChatPage;
