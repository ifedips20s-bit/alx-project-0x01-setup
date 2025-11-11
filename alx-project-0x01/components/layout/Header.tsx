import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 p-4 flex justify-between">
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/users">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
