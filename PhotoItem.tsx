import React from 'react';

interface PhotoItemProps { //Defines the props for the PhotoItem component
    title: string;
    location: string;
    date: string;
    imageUrl: string;
}

const PhotoItem: React.FC<PhotoItemProps> = ({ title, location, date, imageUrl }) => { //Declares the PhotoItem functional component with the props

    //Displays the images
    return (
        <div className="card m-2" style={{ width: '18rem' }}>
            <img src={imageUrl} className="card-img-top" alt={title} /> 
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text"><strong>{location}</strong>, {date}</p>
            </div>
        </div>
    );
};

export default PhotoItem;

