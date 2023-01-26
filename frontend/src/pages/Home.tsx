import { Box, Container } from '@chakra-ui/react';
import Header from '../components/Header';
import ImageCard from '../components/ImageCard';
import ImageForm from '../components/ImageForm';

const Home = () => {
  return (
    <Container maxW="xl" minH={'100vh'}>
      <Header />
      <Box>
        <ImageForm />
        <ImageCard />
      </Box>
    </Container>
  );
};
export default Home;
