export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 px-6 text-center bg-bg relative z-10">
      <p className="text-sm font-mono text-muted">
        Designed & Built by{" "}
        <span className="text-brand-primary font-medium">Kajal</span> · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
