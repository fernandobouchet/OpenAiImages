import { Request, Response } from 'express';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req: Request, res: Response) => {
  try {
    const { prompt, size } = req.body;
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size:
        size === 'small'
          ? '256x256'
          : size === 'medium'
          ? '512x512'
          : '1024x1024',
    });

    const image = response.data.data[0].url;

    res.status(200).send({
      success: true,
      data: image,
    });
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(400).send({
      error: error,
    });
  }
};

export { generateImage };
