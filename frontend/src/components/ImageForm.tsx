import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { AppDispatch } from '../app/store';
import { generateImage } from '../features/imageData/imageDataSlice';

const ImageForm = () => {
  const state = useSelector((state: RootState) => state.imageData);
  const dispatch = useDispatch<AppDispatch>();

  const [imageData, setImageData] = useState({
    prompt: '',
    size: 'medium',
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
    dispatch(generateImage(imageData));
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <FormControl display={'flex'} flexDir="column" gap={'4'}>
        <Box>
          <FormLabel>Prompt:</FormLabel>
          <Input
            isRequired
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
          <FormLabel>Image size:</FormLabel>
          <RadioGroup
            defaultValue={imageData.size || 'medium'}
            onChange={handleOnChange}
          >
            <Flex justifyContent={'space-around'}>
              <Radio value="small">Small (256x256)</Radio>
              <Radio value="medium">Medium (512x512)</Radio>
              <Radio value="large">Large (1024x1024) </Radio>
            </Flex>
          </RadioGroup>
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
  );
};
export default ImageForm;
