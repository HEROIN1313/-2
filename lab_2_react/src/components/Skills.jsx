function Skills() {
  const skillsList = [
    "Python, C#, базовий JavaScript / HTML5",
    "Linux (Ubuntu, Debian, Kali), bash-скрипти, systemd",
    "TCP/IP, Wireshark, Nmap, основи SIEM (Wazuh)",
    "Git, GitHub, VS Code"
  ];

  return (
    <section>
      <h2>Технічні навички</h2>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
