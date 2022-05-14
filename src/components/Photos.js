import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom'
import { Carousel } from 'react-carousel-minimal';

function Photos() {

    const { state } = useLocation();
    const photo = state;
    const [data, setData] = useState([]);
 
    useEffect(() => {
        getPhotos();
    }, []);


    const getPhotos = async () => {
        const allPho = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${photo.id}`);
        const allPhotos = await allPho.json()
        let temp = [];
        for (let i = 0; i < allPhotos.length; ++i) {
            temp.push({ "image": allPhotos[i].thumbnailUrl, "caption": allPhotos[i].title });
        }
        setData(temp); 
    }

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }

    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return (
        <div class="center">
            <h2 class="h2">{photo.title}</h2>
            {/* {photos.map((pho, index) => <div key={index}class="card">
               <div class="card-body"> <p class="card-title">title: {pho.title}</p>
                <p class="card-subtitle mb-2 text-muted">url: {pho.url}</p>
                <p class="card-text">thumbnailUrl: {pho.thumbnailUrl}</p>
                </div>
            </div>)} */}
            {  data.length && <Carousel
                data={data}
                time={2000}
                width="850px"
                height="500px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    maxHeight: "500px",
                    margin: "40px auto",
                }}
            />}
        </div>
    )
}

export default Photos;