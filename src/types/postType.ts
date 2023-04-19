export type Post = {
  id: string;
  typeIds?: string[];
  title: string;
  context: string;
  createAt?: number;
  types?: PostType[];
};

export type RelatedPost = {
  id: string;
  title: string;
};

export type PostType = {
  id: string;
  postIds?: string[];
  type: string;
};
