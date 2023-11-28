export default function translateWordToPortuguese(word) {
  const translations = {
    coordinator: "Coordenador",
    home: "Início",
    projects: "Projetos",
    solicitations: "Solicitações",
    reports: "Relatórios",
    users: "Usuários",
    new: "Novo",
    directorate: "Direção",
  };

  // eslint-disable-next-line no-prototype-builtins
  if (translations.hasOwnProperty(word)) {
    return translations[word];
  } else {
    return `${word} -> Translation not found, add in src/commons/translator.js`;
  }
}
