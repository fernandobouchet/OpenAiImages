import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { AppDispatch } from '../app/store';
import { generateImage, reset } from '../features/imageData/imageDataSlice';

const ImageForm = () => {
  const state = useSelector((state: RootState) => state.imageData);
  const dispatch = useDispatch<AppDispatch>();

  const [imageData, setImageData] = useState({
    prompt: '',
    size: 'small',
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | string) => {
    if (typeof e !== 'string') {
      setImageData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    } else {
      setImageData((prevState) => ({
        ...prevState,
        size: e,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(reset());
    dispatch(generateImage(imageData));
  };

  return (
    <Container mt={5} mb={1}>
      <form onSubmit={handleSubmit}>
        <FormControl display={'flex'} flexDir="column" gap={'4'}>
          <Box>
            <FormLabel>Prompt:</FormLabel>
            <Input
              isRequired
              isDisabled={state.isLoading}
              type="text"
              name="prompt"
              onChange={handleOnChange}
              placeholder="Image description"
              autoFocus
            />
            <FormHelperText>
              Make the description as specific as possible for best results.
            </FormHelperText>
          </Box>
          <Box>
            <FormLabel>Size:</FormLabel>
            <RadioGroup
              defaultValue={imageData.size || 'small'}
              onChange={handleOnChange}
              isDisabled={state.isLoading}
            >
              <Flex justifyContent={'space-around'}>
                <Radio value="small">Small</Radio>
                <Radio value="medium">Medium</Radio>
                <Radio value="large">Large</Radio>
              </Flex>
            </RadioGroup>
            <FormHelperText>
              References: 'Small' : '256x256', 'Medium' : '512x512', 'Large' :
              '1024x1024'
            </FormHelperText>
          </Box>
          <Flex>
            <Button
              type="submit"
              isLoading={state.isLoading}
              loadingText="Generating image..."
              colorScheme="teal"
              spinnerPlacement="end"
              m="auto"
            >
              Generate image
            </Button>
          </Flex>
        </FormControl>
      </form>
    </Container>
  );
};
export default ImageForm;
