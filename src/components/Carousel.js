import React from 'react';
import sample_pic from './sample_pic.svg';

const Carousel=()=>{
    return(
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="5000">
                        <img src={sample_pic} className="d-block w-100" alt="Sliding Image" height="400"/>
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img src={sample_pic} className="d-block w-100" alt="Sliding Image" height="400"/>
                    </div>
                    <div className="carousel-item">
                        <img src={sample_pic} className="d-block w-100" alt="Sliding Image" height="400"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel;