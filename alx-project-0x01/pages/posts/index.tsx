import PostCard from "../../components/common/PostCard";

const PostsPage: React.FC = () => {
  const posts = [
    { title: "Sample Post 1", body: "This is the body of post 1." },
    { title: "Sample Post 2", body: "This is the body of post 2." },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Posts</h1>
      {posts.map((post, index) => (
        <PostCard key={index} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostsPage;
