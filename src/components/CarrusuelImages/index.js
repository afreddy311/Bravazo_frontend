import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Box } from '@mui/system';

const CarrusuelImages = () => {
    return (
        <Container maxWidth="100%">
            <Box mt={10} sx={{ height: { sx: 500 } }}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.dropbox.com/scl/fi/lvq7cha8s71n9qovjntik/00.jpg?rlkey=wj01taje4w6buoj53r150kz2y&dl=0"
                            alt="First slide"
                        />
                        <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.dropbox.com/scl/fi/qvxcb1uq93xbrd6indf9w/10.jpg?rlkey=31zorinp3d3jkb6vu6qa0d1m5&dl=0"
                            alt="Second slide"
                        />

                        <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.dropbox.com/scl/fi/9cjsysymzwj9hcyw9x3i0/20.jpg?rlkey=aamb0t3ws850btpkrfdqt0xsn&dl=0"
                            alt="Third slide"
                        />

                        <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Box>
        </Container>
    );
};
export default CarrusuelImages;
