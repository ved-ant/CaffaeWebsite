import React from 'react';
import './Community.css';
import image2 from "../../assets/hello.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Community = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
      
    return (
        <div className="community-container" id='container'>
            <div className="community-title">Join Our Community</div>
            <div className="community-subheading">Unlock limitless possibilities. Join!</div>
        
                <Carousel responsive={responsive}  autoPlay={true} autoPlaySpeed={3000} dotListClass="custom-dot-list-style"   infinite={true} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]}
 >
                <div className='community-right'>
                    <div className='community-right-heading'>Having doubts and questions about college counselling?</div>
                    <div className='community-right-subheading'>Embark on a transformative journey of college counseling as our gurus illuminate your path to success. Discover personalized guidance, expert insights, and a supportive community eager to shape your future.</div>
                    <div className='button-space'></div>
                    <a href="https://t.me/+zPnLruIIsEU2Mzdl" target='_blank'><button className='community-button'><img src={image2} className='button-image' />Join the group</button></a>
                </div>
                <div className='community-right'>
                    <div className='community-right-heading'>Want to Know what skills to Explore before joining college?</div>
                    <div className='community-right-subheading'>Embark on a knowledge expedition with our expert gurus as they unveil a world of skills waiting to be explored. Join Us and ignite your curiosity, discover new talents, and unlock your full potential. </div>
                    <div className='button-space'></div>
                    <a href="https://t.me/+OcwtJJ72LPc2MDRl" target='_blank'><button className='community-button'><img src={image2} className='button-image' />Join the group</button></a>
                </div>
                <div className='community-right'>
                    <div className='community-right-heading'>Don’t know how to prepare for JEE?</div>
                    <div className='community-right-subheading'>Supercharge your JEE preparation with our Guru-powered WhatsApp group! Get exclusive tips, proven strategies, and expert guidance to ace the exam. Join now and unlock your true potential for JEE success! </div>
                    <div className='button-space'></div>
                    <a href="https://t.me/+n8qmXTqKIjg4ZjI9" target='_blank'><button className='community-button'><img src={image2} className='button-image' />Join the group</button></a>
                </div>
                <div className='community-right'>
                    <div className='community-right-heading'>Need preparation tips for NEET?</div>
                    <div className='community-right-subheading'>Elevate your NEET preparation with our professional mentor-led WhatsApp group! Gain access to valuable tips and personalized guidance from experts in the field. Join now and maximize your chances of achieving success in the NEET examination!</div>
                    <div className='button-space'></div>
                    <a href="https://t.me/+4R-fR-o7iKM0NTll" target='_blank'><button className='community-button'><img src={image2} className='button-image' />Join the group</button></a>
                </div>
                <div className='community-right'>
                    <div className='community-right-heading'>Want to know more about how to pursue BCA?</div>
                    <div className='community-right-subheading'>Receive invaluable mentorship, industry insights, and personalized guidance to excel in your pursuit of a successful career in computer applications. Join now and unlock the gateway to a promising future in the world of technology! </div>
                    <div className='button-space'></div>
                    <a href="https://t.me/+_TkGMEJqY94yZmY1" target='_blank'><button className='community-button'><img src={image2} className='button-image' />Join the group</button></a>
                </div>
                <div className='community-right'>
                    <div className='community-right-heading'>Want to pursue BBA but don’t know the right path?</div>
                    <div className='community-right-subheading'>Embark on a transformative BBA journey with our WhatsApp group! Unlock strategic thinking, leadership finesse, and entrepreneurial prowess. Join now and chart your path to success in the corporate world! </div>
                    <div className='button-space'></div>
                    <a href="https://t.me/+9T7CchFadDc2YTk1" target='_blank'><button className='community-button'><img src={image2} className='button-image' />Join the group</button></a>
                </div>
                <div className='community-right'>
                    <div className='community-right-heading'>Want to pursue MBA but don’t know the right path?</div>
                    <div className='community-right-subheading'>Embark on a transformative MBA journey with our WhatsApp group! Unlock strategic thinking, leadership finesse, and entrepreneurial prowess. Join now and chart your path to success in the corporate world! </div>
                    <div className='button-space'></div>
                    <a href="https://t.me/+ICnICH0CdBllZGJl" target='_blank'><button className='community-button'><img src={image2} className='button-image' />Join the group</button></a>
                </div>
                </Carousel>
            </div>
       
    )
}
export default Community
