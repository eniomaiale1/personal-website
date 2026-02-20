export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-8 px-6 text-center">
      <p className="text-slate-600 text-xs font-mono">
        © {new Date().getFullYear()} Enio Maiale — Built with Next.js &amp;
        Tailwind CSS
      </p>
    </footer>
  );
}
