import React from 'react'
import './Landing.css'

import { FiGrid } from 'react-icons/fi'
import { IoHomeOutline } from 'react-icons/io5'
import { TbDiscountCheck } from 'react-icons/tb'
import { FiUsers } from 'react-icons/fi'
import { MdOutlineNoteAlt } from 'react-icons/md'
import { IoSettingsOutline } from 'react-icons/io5'
import { RxExit } from 'react-icons/rx'
import { GrPhoneHorizontal } from 'react-icons/gr'
import { BsFillClockFill } from 'react-icons/bs'
import { BsFillStarFill } from 'react-icons/bs'
import { BsGraphUp } from 'react-icons/bs'
import { FaBook } from 'react-icons/fa'

import { FaGuitar } from 'react-icons/fa'
import { FaRoad } from 'react-icons/fa'
import { FaMusic } from 'react-icons/fa'
import { FaHeadphones } from 'react-icons/fa'
import { FaLightbulb } from 'react-icons/fa'
import { FaCalculator } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'


const Data= [
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBV_eySX87Wz8qNku-oIIzD_BWgJN1xehfaQ&usqp=CAU",
        avat:"https://bit.ly/kent-c-dodds",
        level:"Beginner's",
        name:"Music News",
        length:"1h 53m",
        rating:"4.9/5",
        trig:"Start"
    },
    {
        img:"https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        avat:"https://bit.ly/ryan-florence",
        level:"Advanced",
        name:"Music Theory",
        length:"59m",
        rating:"4.3/5",
        trig:"Start"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKguny7soy-cELz8Pd0a-GXmjWZB-_2MPsDw&usqp=CAU",
        avat:"https://bit.ly/prosper-baba",
        level:"Mastering",
        name:"Music Practice",
        length:"2h 15m",
        rating:"Begin",
        trig:"Start Now"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-LY9tzuE6sfwK-35c_dmITQXMPovbb7syQ&usqp=CAU",
        avat:"https://bit.ly/code-beast",
        level:"Lorem",
        name:"Music Theories",
        length:"1h 30m",
        rating:"4.9/5",
        trig:"Unlock"
    }
]

const News = [
    {
        icon:<BsGraphUp/>,
        lable:"Musicians"
    },
    {
        icon:<FaGuitar />,
        lable:"Instruments"
    },
    {
        icon:<FaRoad />,
        lable:"Journey"
    },
    {
        icon:<FaMusic />,
        lable:"Music Notes"
    },
    {
        icon:<FaHeadphones />,
        lable:"Practices"
    },
    {
        icon:<FaLightbulb />,
        lable:"Tips"
    },
    {
        icon:<FaCalculator />,
        lable:"Updates"
    },
]

function Landing() {
  return (
    <div className='Landing'>



{/*///////////////////// SIDE BAR ///////////////////////////////////*/}


        <div className='sidebar'>
            <div className='top-icons'>
                <img className='Avatar' src='https://bit.ly/dan-abramov' />
                <FiGrid className='icon1'/>
                <IoHomeOutline className='icon1'/>
                <TbDiscountCheck className='icon1'/>
                <FiUsers className='icon1'/>
                <MdOutlineNoteAlt className='icon1'/>
            </div>

            <div className='bottom-icons'>
                <GrPhoneHorizontal style={{borderBottom:'1px solid gray', borderRadius:"none", width:"6vh"}} className='icon2'/>
                <IoSettingsOutline className='icon1'/>
                <RxExit className='icon1'/>
            </div>
        </div>


{/* /////////////////////// MAIN /////////////////////////////////// */}

<div className='main'>
<div className='courses'>
<p>Featured Courses</p>
<div className='course'>
{
    Data.map((ele) => (
        <div> 
        <img src={ele.img}/>
       
        <div className='course-data'>
        <div className='c-icon'><img src={ele.avat}/> <p>{ele.level}</p></div>
        <p>{ele.name}</p>
        <div className='c-bottom'><p><BsFillClockFill/>{ele.length}</p> <p><BsFillStarFill/>{ele.rating}</p><button>{ele.trig}</button></div>
        </div><div className='Book'><FaBook className='book' /></div>
        </div>
        ))
    }
    </div>
    
    </div>
    
    
{/* /////////////////////// LATEST NEWS /////////////////////////////////// */}



<div className='news'>
    <p>Latest News</p>
    <div className='new'>
    {News.map((ele) => (
        <div>
            <h1>{ele.icon}</h1>
            <p>{ele.lable}</p>
        </div>
        ))}
        
        </div>
    
    </div>


    
{/* /////////////////////// MY PROGRESS /////////////////////////////////// */}



            <div className='progress'>
                <p>My Progress</p>
                <div className='prog'>
{/*----------------------------------------------------------------- */}
                    <div className='p1'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqLvuG37PNPpZ9H4RAD0ppjyMdEXeCVAgCbA&usqp=CAU' />
                        <div className='p2'>
                            <div className='p3'>
                                <h3>Learning Piano Basics</h3>
                                <div className='p4'><FaBookmark/></div>
                            </div>
                            <p>John smith</p>
                            <div className='bar'><div></div><div></div></div>
                            <p>45% Completed</p>
                        </div>
                    </div>
{/*----------------------------------------------------------------- */}
                    <div className='p1'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmLb9OYRW4ntKmjDuGnV4s9msaVWiTC-VzunTDrwcIiL00HHJJYX5wc7KGxIqi-ZBFncA&usqp=CAU' />
                        <div className='p2'>
                            <div className='p3'>
                                <h3>Learning Piano Basics</h3>
                                <div className='p4'><FaBookmark/></div>
                            </div>
                            <p>John smith</p>
                            <div className='bar1'><div></div><div></div></div>
                            <p>61% Completed</p>
                        </div>
                    </div>
{/*----------------------------------------------------------------- */}

            </div>
                
            </div>
                
        </div>
    
    </div>
  )
}

export default Landing