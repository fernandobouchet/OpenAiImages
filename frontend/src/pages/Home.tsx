import { Box, Container } from '@chakra-ui/react';
import ImageCard from '../components/ImageCard';
import ImageForm from '../components/ImageForm';

const Home = () => {
  return (
    <Container maxW="lg" height={'100vh'}>
      <Box height={'full'} py="10">
        <ImageForm />
        <ImageCard />
      </Box>
    </Container>
  );
};
export default Home;
