import { API } from '../../api/api';

const generateImage = async (imageData: any) => {
  const response = await API.post('/generateImage', imageData);
  return response.data;
};

const imageDataService = {
  generateImage,
};

export default imageDataService;
