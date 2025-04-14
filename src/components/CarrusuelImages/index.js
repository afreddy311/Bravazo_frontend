import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Box } from '@mui/system';


const CarrusuelImages = () => {
    return (
        <Container maxWidth="100%" >
            <Box mt={10} className='carousel-container' >
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src= {require("../../Images/Polospersonalizados-carrousel.jpg")}
                            alt="First slide"
                            style={{ width: '100%', maxWidth: '800px', Height: '500px', objectFit: 'cover' }}                       
                        />
                        <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src= {require("../../Images/Polospersonalizados-carrousel2.jpg")}
                            alt="Second slide"
                            style={{ width: '100%', maxWidth: '800px', Height: '500px', objectFit: 'cover' }}
                        />

                        <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src= {require("../../Images/Polospersonalizados-carrousel3.jpg")}
                            alt="Third slide"
                            style={{ width: '100%', maxWidth: '800px', Height: '500px', objectFit: 'cover' }}
                        />

                        <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Box>
        </Container>
    );
};
export default CarrusuelImages;


