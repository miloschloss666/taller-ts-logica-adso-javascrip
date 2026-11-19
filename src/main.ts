// 1. Declaración de variables y tipos primitivos
const systemName: string = "SENA ADSO Core";
const versionNumber: number = 1.0;
let isSystemActive: boolean = true;
let totalLearners: number = 28;

// 2. Uso de Template Strings
const systemSummary: string = `
========================================
🚀 SISTEMA: ${systemName} (v${versionNumber})
📊 Estado: ${isSystemActive ? "Activo" : "Inactivo"}
👥 Aprendices inscritos: ${totalLearners}
========================================
`;

console.log(systemSummary);