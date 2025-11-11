const UsersPage: React.FC = () => {
  const users = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="border p-2 mb-2 rounded">
            <p className="font-bold">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
