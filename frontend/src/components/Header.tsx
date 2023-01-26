import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import logo from '../assets/OpenAI.svg';

const Header = () => {
  return (
    <Container as={'header'}>
      <Flex align={'center'} h={16}>
        <img src={logo} alt="openai logo" width={120} />
      </Flex>
      <Box>
        <Heading as="h1" size="md">
          Image Generator
        </Heading>
        <Text fontSize="sm" pt={3}>
          Example of how with{' '}
          <a href="https://openai.com/api/" target={'_blank'}>
            OpenAI
          </a>{' '}
          DALL-E AI system model you can easily generate custom images based on
          text prompts.
        </Text>
      </Box>
    </Container>
  );
};
export default Header;
