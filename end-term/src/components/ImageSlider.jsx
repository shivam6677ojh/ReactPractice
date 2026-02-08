import { useState } from "react";

function ImageSlider() {
    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZw8WUWkD7fNB8Oww81wdHoQcmVikdlRVJw&s",
        "https://assets.superblog.ai/site_cuid_cl9pmahic552151jpq6mko9ans/images/16-1728464546435-compressed.jpg",
        "https://via.placeholder.com/300/0000ff"
    ];

    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((index + 1) % images.length);
    };

    const prevImage = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    return (
        <div>
            <h2>Image Slider</h2>
            <img src={images[index]} alt="slider" />
            <br />
            <button onClick={prevImage}>Previous</button>
            <button onClick={nextImage}>Next</button>
        </div>
    );
}

export default ImageSlider;
