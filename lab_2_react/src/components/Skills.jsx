function Skills() {
  const skillsList = [
    "Python, C#, базовий JavaScript / HTML5",
    "Linux (Ubuntu, Debian, Kali), bash-скрипти, systemd",
    "TCP/IP, Wireshark, Nmap, основи SIEM (Wazuh)",
    "Git, GitHub, VS Code",
  ];

  return (
    <section className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-3">
        Технічні навички
      </h2>
      <ul className="list-disc list-inside space-y-2 text-slate-700">
        {skillsList.map((skill, index) => (
          <li key={index} className="hover:text-blue-600 transition-colors">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
