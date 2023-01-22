import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const ImageForm = () => {
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
    console.log(imageData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
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
        <FormLabel>Image dimensions:</FormLabel>
        <RadioGroup
          defaultValue={imageData.size || 'medium'}
          onChange={handleOnChange}
        >
          <HStack>
            <Radio value="small">Small</Radio>
            <Radio value="medium">Medium</Radio>
            <Radio value="large">Large</Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText>
          Sizes reference: 'Small': '256x256', 'Medium': '512x512' and 'Large':
          '1024x1024'
        </FormHelperText>
        <Box>
          <Button type="submit">Send</Button>
        </Box>
      </FormControl>
    </form>
  );
};
export default ImageForm;
