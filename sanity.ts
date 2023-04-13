import { createClient, type ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const config: ClientConfig = {
    projectId: '86a798c4',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-10-21',
}

const client = createClient(config);

//image builder
const builder = imageUrlBuilder(client);

//helpers
export const urlFor = (source: SanityImageSource) => builder.image(source);


export default client;