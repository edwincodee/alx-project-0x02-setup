import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div>
      <Link href="/home">Home page</Link>
      <Link href="/about">About page</Link>
      <Link href="/posts">Post pages</Link>
    </div>
  );
};

export default Header;
