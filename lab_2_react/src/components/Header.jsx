function Header() {
  return (
    <header className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Роман</h1>
        <p className="text-slate-600">
          Студент спеціальності «Кібербезпека» | Trainee Security Analyst / Web Developer
        </p>
      </div>
      <address className="not-italic text-sm text-slate-600 space-y-1">
        <p>Місто: Львів, Україна</p>
        <p>
          Email:{' '}
          <a
            href="mailto:roman.budai.KB.2025@lpnu.ua"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            roman.budai.KB.2025@lpnu.ua
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a
            href="https://github.com/HEROIN1313"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            https://github.com/HEROIN1313
          </a>
        </p>
      </address>
    </header>
  );
}

export default Header;