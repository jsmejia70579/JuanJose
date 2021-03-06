import React from 'react';
import { Carousel } from 'react-bootstrap';
import deadpool1 from './images/deadpool.jpg';
import deadpool2 from './images/deadpool2.jpg';

const footer =() =>{
    return(
        <div>
            <h1>hola, soy el FOOTER...</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={deadpool1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={deadpool2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default footer;