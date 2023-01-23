import { Box, Image } from '@chakra-ui/react';
import type { RootState } from '../app/store';
import { useSelector } from 'react-redux';

const ImageCard = () => {
  const state = useSelector((state: RootState) => state.imageData);

  return (
    <Box>
      <Image src={state.data} />
    </Box>
  );
};
export default ImageCard;
