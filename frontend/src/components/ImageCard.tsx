import { Box, Center, Image, Skeleton } from '@chakra-ui/react';
import type { RootState } from '../app/store';
import { useSelector } from 'react-redux';

const ImageCard = () => {
  const state = useSelector((state: RootState) => state.imageData);

  return (
    <Center>
      {!state.isSuccess ? (
        <Box boxSize={'md'}></Box>
      ) : (
        <Image
          boxSize={'md'}
          borderRadius="lg"
          src={state.data}
          fallback={<Skeleton boxSize={'md'} borderRadius="lg" />}
          transition=".2s"
          _hover={{
            filter: 'auto',
            blur: '2px',
            brightness: '50%',
            cursor: 'pointer',
          }}
        />
      )}
    </Center>
  );
};
export default ImageCard;
