import React from 'react'; //Imports React
import PhotoItem from './PhotoItem'; //Imports the PhotoItem component

const photos = [
    {
        id: 1, //id for each photo
        title: "Street Art", 
        location: "Buenos Aires, Argentina",
        date: "2023",
        imageUrl: "/images/buenosaires.png",
    },
    {
        id: 2,
        title: "Koh Phi Phi Island",
        location: "Thailand",
        date: "2019",
        imageUrl: "/images/kohphiphi.png",
    },
    {
        id: 3,
        title: "Bellas Artes",
        location: "Mexico City, Mexico",
        date: "2022",
        imageUrl: "/images/mexicocity.png",
    },
    {
        id: 4,
        title: "Buildings",
        location: "Sao Paulo, Brazil",
        date: "2024",
        imageUrl: "/images/saopaulo.png",
    },
];

const Photos: React.FC = () => {
    //Passes properties as props
    return (
        <div className="d-flex flex-wrap justify-content-around">
            {photos.map((photo) => (
                <PhotoItem
                    key={photo.id}
                    title={photo.title}
                    location={photo.location}
                    date={photo.date}
                    imageUrl={photo.imageUrl}
                />
            ))}
        </div>
    );
};

export default Photos;

