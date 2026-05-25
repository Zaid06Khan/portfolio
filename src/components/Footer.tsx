export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <p className="text-sm text-gray-500">
          Designed &amp; Built by{" "}
          <span className="font-medium text-gray-400">Zaid Khan</span>
          {" "}© 2026
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Zaid06Khan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-700 transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <span className="text-[#252525]">·</span>
          <a
            href="https://linkedin.com/in/zaid-khan-a03050387"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-700 transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <span className="text-[#252525]">·</span>
          <a
            href="mailto:zaid9khn@gmail.com"
            className="text-xs text-gray-700 transition-colors hover:text-accent"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
