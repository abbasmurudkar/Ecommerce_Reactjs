import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styled from 'styled-components'
const Carousel = () => {
    const options = {
        margin: 30,
        responsiveClass: true,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        items: 1,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 1,
            }
        },
    };
    const image = [
        {
            id: 1,
            images: "https://ii2.pepperfry.com/media/wysiwyg/banners/HB04_Web_18102021_2x.jpg",
        },
        {
            id: 2,
            images: "https://ii2.pepperfry.com/media/wysiwyg/banners/Promo_2x_181021_nd_1.jpg"
        },
        {
            id: 3,
            images: "https://ii2.pepperfry.com/media/wysiwyg/banners/HB01_Web_18102021_2x.jpg"
        },
        {
            id: 4,
            images: "https://ii2.pepperfry.com/media/wysiwyg/banners/HB02_Web_18102021_2x.jpg"
        },
        {
            id: 5,
            images: "https://ii2.pepperfry.com/media/wysiwyg/banners/HB02_Web_18102021_2x.jpg"
        },
        {
            id: 6,
            images: "https://ii2.pepperfry.com/media/wysiwyg/banners/HB02_Web_18102021_2x.jpg"
        }
    ]
    return (
        <Container className="mt-3 ">
            <CarouselBanner>
                <OwlCarousel {...options} className="container-Carousel">
                    {image.map(({ images, id }) => {
                        return (
                            <div className="item" key={id}>
                                <img src={images} alt="Images looding" />
                            </div>
                        )
                    })}
                </OwlCarousel>

            </CarouselBanner>
            <ImagesBanner>
                asdfa
            </ImagesBanner>
        </Container>
    )
}

export default Carousel

const Container = styled.div`
border: 2px solid red;
margin: 0;
padding:0;
width: 100%;
/* height: 600px; */
display: flex;
justify-content: space-between;
align-items: center;
margin: 0px 10px;
`;
const CarouselBanner = styled.div`
width: 800px;
margin: 0px 60px;
.item{
    border: 2px solid green;
    width: 100%;
    height: 100%;
    padding: 2px;
    object-fit: contain;
    img{
      width: 100%;
      padding: 2px;
      height: 550px;
    }
}`;
const ImagesBanner = styled.div`
/* border: 2px solid red; */

`;