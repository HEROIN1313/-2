function Experience() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
        Практичний досвід та проєкти
      </h2>
      <article className="mb-4">
        <h3 className="text-lg font-semibold text-slate-800">
          SOC Home Lab Setup
        </h3>
        <p className="text-slate-700 mt-1">
          Розгортання середовища для моніторингу подій безпеки та виявлення загроз.
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-600 mt-2 text-sm">
          <li>Налаштування pfSense, Wazuh SIEM та Suricata IDS/IPS.</li>
          <li>Аналіз телеметрії Sysmon та емуляція мережевих атак.</li>
        </ul>
      </article>
      <article className="pt-3 border-t border-slate-100">
        <h3 className="text-lg font-semibold text-slate-800">
          Криптографічні утиліти на Python
        </h3>
        <p className="text-slate-700 mt-1">
          Розробка скриптів генерації ключів RSA, симетричного шифрування та псевдовипадкових послідовностей (BBS).
        </p>
      </article>
    </section>
  );
}

export default Experience;
