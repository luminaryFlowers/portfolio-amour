import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            cardDesc: z.string(),
            image: image(),
        }),
});

export const collections = {
    projects: projectCollection,
};
