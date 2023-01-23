import { Box, Container } from '@chakra-ui/react';
import ImageCard from '../components/ImageCard';
import ImageForm from '../components/ImageForm';

const Home = () => {
  return (
    <Container>
      <h1>OpenAI images</h1>
      <Box>
        <ImageForm />
        <ImageCard />
      </Box>
    </Container>
  );
};
export default Home;
