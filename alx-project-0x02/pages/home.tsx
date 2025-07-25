import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { CardProps } from "@/interfaces";
import { useState } from "react";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<CardProps[]>([
    { title: "Next js", content: "A project based on react" },
  ]);
  const [post, setPost] = useState<CardProps | null>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handlePost = (newPost: CardProps) => {
    setPost({ ...newPost });
    console.log(posts);
  };
  return (
    <div>
      <>
        <Header />
      </>
      <h3>Welcome to home page</h3>
      <Card title="Barcelona Fc" content="mes un club" />
      <button
        className="px-3 py-2 border mb-10 border-blue-600 bg-blue-300 text-sm"
        onClick={() => setModalOpen(true)}
      >
        Add post
      </button>

      {posts.map((post: CardProps) => (
        <Card title={post.title} key={post.content} content={post.content} />
      ))}
      {isModalOpen && (
        <PostModal onSubmit={handlePost} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
};

export default Home;
