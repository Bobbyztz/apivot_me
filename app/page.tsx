export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <h1 className="group text-5xl font-bold text-black text-center">
        {/* Original text visible by default */}
        <span className="duration-300 group-hover:hidden">
          Every pivot matters.
        </span>
        {/* New text visible on hover */}
        <span className="hidden duration-300 group-hover:inline">
          legendztz@outlook.com
        </span>
      </h1>
    </div>
  );
}
