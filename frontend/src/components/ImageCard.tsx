import { Box, Card, Image } from '@chakra-ui/react';
import type { RootState } from '../app/store';
import { useSelector } from 'react-redux';

const ImageCard = () => {
  const state = useSelector((state: RootState) => state.imageData);

  return (
    <Card>
      <Image src={state.data} />
    </Card>
  );
};
export default ImageCard;
