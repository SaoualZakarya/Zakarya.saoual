import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_PROJECT_ID,
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-05-03',
  // token:""
  // ignoreBrowserTokenWarning: true,
})

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}