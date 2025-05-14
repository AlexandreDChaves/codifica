1. Instale o Node.js  

Node.js é uma plataforma que permite executar código JavaScript fora do navegador. 

    Acesse o site oficial: https://nodejs.org  
    Baixe a versão recomendada (LTS)
    Siga as instruções de instalação para o seu sistema operacional
     

Após a instalação, verifique se o Node.js foi instalado corretamente: 
node -v

Esse comando deve mostrar a versão do Node.js instalada (ex: v18.16.0). 

Também verifique o npm (Node Package Manager): 
npm -v

2. Crie uma pasta para seus projetos  

No seu computador, crie uma pasta chamada meus-exercicios-js.
Dentro dela, você vai colocar os arquivos .js com os exercícios. 

Exemplo de estrutura: 
meus-exercicios-js/
└── exercicio01.js

3. Crie um arquivo JavaScript  

Abra um editor de texto simples (como o VS Code , Notepad++  ou até o Bloco de Notas ) e escreva um código JavaScript básico: 

console.log("Olá, mundo!");

Salve o arquivo como exercicio01.js dentro da pasta meus-exercicios-js.

4. Execute o código no terminal  

Abra o terminal (no Windows pode ser o Prompt de Comando  ou PowerShell , no Mac ou Linux use o Terminal ) e navegue até a pasta: 
cd caminho/para/meus-exercicios-js

Agora execute o arquivo com o Node.js:
node exercicio01.js

Se tudo estiver certo, você verá no terminal:
Olá, mundo!