/* eslint-disable @typescript-eslint/no-explicit-any */
interface GetPostsProps {
	page?: number;
	limit?: number;
}

export interface PostProps {
	title: string;
	slug: string;
	content?: string;
	date: Date;
	tags?: string[];
	image: string;
	excerpt?: string;
	published: boolean;
}

export function getPosts({ page = 1, limit }: GetPostsProps = {}) {
	const posts = Object.entries(import.meta.globEager('routes/posts/*.mdx'))
		.filter(([, post]) => typeof post.metadata !== 'undefined')
		.filter(([, post]) => post.metadata.published)
		.map(makePost)
		.sort((a, b) => b.metadata.date.getTime() - a.metadata.date.getTime());

	if (limit) {
		return posts.slice((page - 1) * limit, page * limit);
	}

	return posts;
}

function getSlug(url: string) {
	return url.split('/').pop()?.split('.')[0];
}

function makePost([slug, post]: [string, any]) {
	return {
		metadata: {
			...post.metadata,
			date: new Date(post.metadata.date),
			slug: getSlug(slug)
		} as PostProps,
		component: post.default
	};
}
