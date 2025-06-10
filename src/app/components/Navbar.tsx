export default function Navbar() {
  return (
    <nav className="bg-indigo-800 text-white p-4 flex items-center justify-between">
      <div className="text-2xl font-bold">Wispman</div>
      <div className="space-x-4 hidden md:flex">
        <a href="#pricing" className="border border-white rounded-full px-4 py-2 hover:bg-white hover:text-indigo-800 transition">Pricing</a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="/login" className="hover:underline">Log In</a>
        <a href="/get" className="bg-white text-indigo-800 rounded-full px-4 py-2 hover:bg-gray-100 transition">Get Wispman</a>
      </div>
    </nav>
  );
}