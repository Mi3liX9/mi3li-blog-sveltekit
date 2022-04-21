interface GetPostsProps {
	page?: number;
	limit?: number;
}

export interface PostProps {
	title: string;
	slug: string;
	content?: string;
	date: string;
	tags?: string[];
	image: string;
	excerpt?: string;
}

export function getPosts({ page = 1, limit }: GetPostsProps = {}) {
	const posts = Object.entries(import.meta.globEager('routes/posts/*.mdx'))
		.map(([slug, post]) => ({
			metadata: {
				...post.metadata,
				date: new Date(post.metadata.date),
				slug: getSlug(slug)
			} as PostProps,
			component: post.default
		}))
		.sort((a, b) => {
			return new Date(a.metadata.date).getTime() < new Date(b.metadata.date).getTime() ? 1 : -1;
		});

	if (limit) {
		return posts.slice((page - 1) * limit, page * limit);
	}

	return posts;
}

function getSlug(url: string) {
	return url.split('/').pop()?.split('.')[0];
}
