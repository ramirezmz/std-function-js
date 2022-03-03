
  ### **Function declaration**
  
  - O interpretador do Javascript carrega primeiramente as funções, e depois executa o seu código.
  

  ### **Function expression**
  - Devemos chamar depois da função.
  - *ReferenceError: Is not defined* ao declarar na primeira linha.
  
  ### **Named function expression**

  - *ReferenceError: Is not defined* ao declarar antes da função. Porque a **const mult** tem o seu valor atribuido a partir da linha 16.
  - Somente podemos chamar a função depois de declarada.