import { CardProps, PostModalProps } from "@/interfaces";
import { FormEvent, useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState<CardProps>({ title: "", content: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-blue-900 rounded-lg p-8 shadow-lg w-full max-w-md">
        <h3 className="text-xl font-bold mb-3">Add a New Post</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="text-sm my-2 block">
              Title
            </label>
            <input
              onChange={handleChange}
              id="title"
              name="title"
              type="text"
              className="outline-none py-2 text-xs rounded-lg px-4 border border-gray-100"
              placeholder="Enter title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="text-sm my-2 block">
              Content
            </label>
            <textarea
              onChange={handleChange}
              className="outline-none py-2 text-xs rounded-xl px-4
            border border-gray-100"
              rows={10}
              placeholder="Enter content"
              name="content"
              id="content"
            ></textarea>
          </div>
          <div className=" flex justify-around items-center">
            <button
              type="submit"
              className="border border-green-400 bg-green-200 rounded full px-4 py-2"
            >
              Submit
            </button>
            <button className="border border-red-400 bg-red-200 rounded full px-4 py-2">
              cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
