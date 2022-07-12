import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import "./hotel.css";


const Hotel = () => {

    const [slideNumber,setSlideNumber] = useState(0);
    const [open,setOpen] = useState(false);

    const photos = [
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/236602105.jpg?k=10b459024385a3f6f1c85b28de0d31de0f10773d9f0743cf3e03176f4385bf23&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/236602644.jpg?k=b2173f3b887d7963aaa9beb68a30f97a02ae735470c62ee8218ea4d8ead9aa40&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/236602080.jpg?k=0b9c87603e6b7c1139569be291c487a01d20323e6b17e35b8e06a42ef7202bdc&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/236602655.jpg?k=9f43e174fd7ebfb4ab437c3eaf6471e37466335dcc4e283218604c8242327a90&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/236602120.jpg?k=a2d5e09c2cb99ad4d9af005ca69e3d33b9d88c7016694702e6fb955f177fd389&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/59155261.jpg?k=97104a3afb7ab087089ddd0ff6c28044a463f7cbe8d1d743627099ba6b7912dc&o=&hp=1"
        },
    ];


    const handleOpen = (i) => {
       setSlideNumber(i);
       setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;
        if(direction==="l"){
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
        }
        else{
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1;
        }

        setSlideNumber(newSlideNumber);
    };

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                { open && <div className="slider">
                      <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                      <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")} />
                      <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                      </div>
                      <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now</button>
                    <h1 className="hotelTitle">Ok Hostel Madrid</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Calle Juanelo, 24, Madrid City Center, 28012 Madrid, Spain</span>
                    </div>

                    <span className="hotelDistance">Excellent Location - 500m from center</span>
                    <span className="hotelPriceHighlight">Book a stay over ₹ 6,168  at this property and get a free airport taxi </span>
                    <div className="hotelImages">
                       {
                        photos.map((photo,i)=>(
                            <div className="hotelImgWrapper">
                                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))
                       }
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Madrid</h1>
                            <p className="hotelDesc">
                            ou're eligible for a Genius discount at Ok Hostel Madrid! To save at this property, all you have to do is sign in.

Featuring free WiFi throughout the property and set 200 m from La Latina Metro Station, Ok Hostel Madrid offers accommodations in Madrid. The property offers a bar and shared kitchen.

The property offers private rooms with a double bed, flat-screen TV, desk and bathroom, as well as dormitories for 4 or 6 people, fitted with bunk beds, lockers, and a bathroom.

There is a shared kitchen and a communal lounge in the property.

You can find several bars, restaurants, and shops within a 5-minute walk of Ok Hostel Madrid. Plaza Mayor and Puerta del Sol are 701 m away. Adolfo Suarez Madrid-Barajas Airport is 8.7 mi from the property.

This is our guests' favorite part of Madrid, according to independent reviews.

                            </p>

                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Madrid, this property has an excellent location score of 9.6
                            </span>
                            <h2>
                                <b>₹ 6,168 </b>

                            </h2>
                            <button>Reserve or Book Now</button>
                        </div>
                    </div>

                    <MailList/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Hotel