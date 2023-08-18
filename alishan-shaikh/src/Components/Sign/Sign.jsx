import React from 'react'
import "./Sign.css"
import { IoMdMusicalNote } from 'react-icons/io'


function Sign() {
  return (
    <div className='sign'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUNMZmM8mUag9inApB6I-sM7hV_eYI-AHXEg&usqp=CAU'/>
        <div className='signIn'>
            <div className='line'>
            <div></div><div></div><div></div><div></div>
            </div>
            <button className='skip'>Skip</button>
            <h1>Welcome to Musify!</h1>
           
            <div className='music-box'><IoMdMusicalNote className='music'/></div>
          
            <div className='form'>
                <div className='user'>
                    <label>Full Name</label>
                    <input placeholder='Enter your full name' />
                </div>
                <div className='user'>
                    <label>Username</label>
                    <input placeholder='Create your username' />
                </div>
                <div className='user'>
                    <label>Location</label>
                    <input placeholder='Choose your location' />
                </div>
                <div className='userB'>
                    <button>Back</button>
                    <button>Next </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sign