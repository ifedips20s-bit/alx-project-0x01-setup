interface PostCardProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-gray-700">{body}</p>
    </div>
  );
};

export default PostCard;
