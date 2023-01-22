import { Box, Container } from '@chakra-ui/react';
import ImageForm from '../components/ImageForm';

const Home = () => {
  return (
    <Container>
      <h1>OpenAI images</h1>
      <Box>
        <ImageForm />
      </Box>
    </Container>
  );
};
export default Home;
