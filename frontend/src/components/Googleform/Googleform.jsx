import React from 'react'
import './Googleform.css';
const Googleform = () => {
    return (
        <div className='google-container'>
            <div className='buttongoogle'>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZ0UaPRzYJddIc3ZIEE6oHrX_H1K7zaLocFNpCc9hjR_jkjA/viewform" target='_blank' ><button className='google-button'>Google Form</button></a>
            </div>
            <div className='google-subheading'>Fill the Google form given and our team will contact you for personalised guidance.</div>
        </div>
    )
}

export default Googleform
