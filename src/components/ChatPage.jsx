import React, { useState } from 'react';
import logoutIcon from '../images/logout2.png';
import Popup from './Popup'; 
import axios from 'axios'
import Skeleton from './Skeleton';
import useAuth from '../utils/AuthUtils';
import { Link } from 'react-router-dom';

const ChatPage = () => {
  const { signOut} = useAuth()
  const [showPopup, setShowPopup] = useState(false); 
  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [genre, setGenre] = useState('');
  const [story, setStory] = useState(null);
  const [loading,setLoading] = useState(false);

  const handleAddStory = ({ title, synopsis, genre }) => {
    setLoading(true)
    generateStory(title, synopsis, genre)
    setTitle(title);
  };

  const generateStory = async (title, synopsis, genre)=>{
    const api = 'https://turn-the-page-backend.vercel.app/generate-story'
    const local = 'http://localhost:4000/generate-story'
    try {
      const response = await axios.post(api, {
        genre,
        title,
        synopsis
      });
      console.log('Response from server:', response.data.response);
      setStory(response.data.response)
      setLoading(false)
  } catch (error) {
    console.error('Error:', error);
  }
  }

  return (
    <div className="flex h-screen">
      <div className="relative w-72 h-screen overflow-y-auto bg-gray-200 text-black shadow-2xl">
        <div className="p-4">
          <Link to='/'><h2 className="text-4xl font-semibold font-goChiHand text-center mb-4">Turn the page</h2></Link>
          
          <div onClick={() => setShowPopup(true)} className="my-2 text-center border border-gray-300 transition-colors duration-500 rounded-md py-2 shadow-2xl font-bold font-great text-3xl cursor-pointer hover:bg-gray-300">Create a new story +</div>
          {/* <ul>
            {[...Array(30)].map((_, index) => ( // Changed to spread operator to create an array
              <li key={index} className="my-2 text-center border border-gray-200 rounded-md py-2 shadow-md">Story {index + 1}</li>
            ))}
          </ul> */}
        </div>
        <div className="fixed bottom-0 left-0 w-[291px] bg-gray-200 py-2">
           <div className="flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-gray-300 rounded-full px-2 py-1" onClick={signOut}>
              <img src={logoutIcon} alt="Logout" className="mr-2 h-5 w-6 mb-[2px]" />
              <h2 className="text-md font-semibold">Logout</h2>
          </div>
        </div>
      </div>


      <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">

        <div className='m-5 border border-gray-300 shadow-2xl min-h-full'>

         {
          loading &&  <Skeleton/>
         }
          
        {story && !loading ? ( // Render the story if available
            <>
              <h2 className="text-6xl font-semibold mt-6 font-great mb-4 pt-6 text-center">{title}</h2>
              <p className="text-gray-600 py-5 pb-14 px-24 text-2xl text-justify" style={{ whiteSpace: 'pre-line', marginBottom: '1rem' }}>
                    {story} 
              </p>

            </>
          ) : ( // Render the welcome message if story is not available
            <>

            {/* <p className="text-gray-600 py-5 px-24 text-2xl text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga sunt in soluta ipsa ipsum fugit accusantium quis sint ad voluptates cumque suscipit rem, nisi fugiat corrupti ex consequuntur consectetur?</p> */}

             <h2 className={`text-6xl font-semibold font-great mb-4 text-center mt-48 ${loading ? 'hidden' : ''}`}>
                   Welcome to Turn The Page
              </h2>
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
