export default function Header() {
  return (
    <header className="w-full px-4 py-2 border-b border-stone-200">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Melody GPT</h1>
        <div className="flex gap-4">
          <a
            href="https://github.com/vmarnauza/melody-gpt"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
