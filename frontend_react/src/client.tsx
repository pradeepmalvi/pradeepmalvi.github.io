import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
type ImageUrlBuilder = ReturnType<typeof imageUrlBuilder>;

declare var process: {
  env: {
    REACT_APP_SANITY_PROJECT_ID: string;
    REACT_APP_SANITY_TOKEN: string;
  };
};

type Client = {
  projectId: string;
  dataset: string;
  apiVersion: string;
  token: string;
  useCdn: boolean;
};

const options: Client = {
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
};

export const client = createClient(options);

const builder = imageUrlBuilder(client);

export const urlFor = (source: object) => builder.image(source);
