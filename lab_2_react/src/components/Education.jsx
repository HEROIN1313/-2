function Education() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-3">
        Освіта
      </h2>
      <article>
        <h3 className="text-lg font-semibold text-slate-800">
          Національний університет «Львівська політехніка»
        </h3>
        <p className="text-slate-700 mt-1">
          <strong className="font-semibold text-slate-900">Спеціальність:</strong> 125 Кібербезпека та захист інформації
        </p>
        <p className="text-slate-500 text-sm mt-1">
          <time dateTime="2025">2025</time> — теперішній час
        </p>
      </article>
    </section>
  );
}

export default Education;