const fs = require('fs');
const p = 'C:/Users/lucas/.gemini/antigravity/scratch/renovera-institucional/src/config/site.ts';
let c = fs.readFileSync(p, 'utf8');

c = c.replace(/name:\s*'LUCAS SANTOS'/g, "name: 'RENOVERA'");
c = c.replace(/shortName:\s*'Lucas Santos'/g, "shortName: 'Renovera'");
c = c.replace(/fullName:\s*'Lucas Silva Santos'/g, "fullName: 'Renovera Energias Renováveis Ltda'");
c = c.replace(/role:\s*'Engenheiro Eletricista'/g, "role: 'Engenharia Elétrica & Consultoria Regulatória'");
c = c.replace(/heroTitlePrimary:\s*'LUCAS'/g, "heroTitlePrimary: 'RENOVERA'");
c = c.replace(/heroTitleSecondary:\s*'SANTOS'/g, "heroTitleSecondary: 'ENERGIAS'");
c = c.replace(/nome:\s*'Lucas Santos'/g, "nome: 'Renovera'");
c = c.replace(/nomeCompleto:\s*'Lucas Silva Santos'/g, "nomeCompleto: 'Renovera Energias Renováveis Ltda'");
c = c.replace(/cargo:\s*'Engenheiro Eletricista \| Gerente de Projetos'/g, "cargo: 'Engenharia Elétrica & Consultoria Regulatória'");
c = c.replace(/https:\/\/lucassantos\.eng\.br/g, 'https://renovera-institucional.vercel.app');
c = c.replace(/lucas\.silva\.santos\.eng@gmail\.com/g, 'contato@renovera.com.br');
c = c.replace(/5535999528858/g, '5519998247890');
c = c.replace(/\(35\) 99952-8858/g, '(19) 99824-7890');
c = c.replace(/São João da Boa Vista, SP • Itajubá, MG/g, 'São João da Boa Vista, SP');

fs.writeFileSync(p, c, 'utf8');
console.log('site.ts updated successfully with all original types and exports intact.');
