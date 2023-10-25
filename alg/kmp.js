function buildLPSTable(pattern) {
    const lps = [0]; // Inicialize a tabela LPS com 0 para o primeiro caractere do pattern
    let length = 0; // Tamanho do LPS atual
  
    for (let i = 1; i < pattern.length; ) {
      if (pattern[i] === pattern[length]) { // Compara o caractere atual do pattern com o caractere no índice 'length' na tabela LPS
        length++; // Se eles são iguais, aumentamos o comprimento do LPS
        lps[i] = length; // Define o valor na tabela LPS para o caractere atual como o tamanho do prefixo sufixo
        i++; // Avança para o próximo caractere no pattern
      } else {
        if (length !== 0) { // Se não houver correspondência e o comprimento atual do prefixo sufixo não for zero
          length = lps[length - 1]; // Atualiza o comprimento para o valor na tabela LPS anterior (anterior ao caractere atual)
        } else {
          lps[i] = 0; // Se o comprimento do prefixo sufixo for zero, definimos o valor na tabela LPS como zero e avançamos para o próximo caractere no pattern
          i++;
        }
      }
    }
  
    return lps; // Retorna a tabela LPS completa
  }
  
  function kmpSearch(text, pattern) {
    const lps = buildLPSTable(pattern); // Constrói a tabela LPS usando o pattern
    let i = 0; // Índice para a string de entrada (text)
    let j = 0; // Índice para o pattern
  
    while (i < text.length) {
      if (pattern[j] === text[i]) { // Compara o caractere atual do pattern com o caractere atual da string de entrada
        i++; // Avança para o próximo caractere na string de entrada
        j++; // Avança para o próximo caractere no pattern
  
        if (j === pattern.length) { // Se encontrarmos uma correspondência completa
          console.log("padrão encontrado na posição:", i - j); // Imprime a posição onde o pattern foi encontrado
          j = lps[j - 1]; // Atualiza 'j' usando a tabela LPS para verificar a próxima correspondência possível
        }
      } else {
        if (j !== 0) { // Se não houver correspondência e 'j' não for zero
          j = lps[j - 1]; // Atualiza 'j' usando a tabela LPS para encontrar um novo ponto de correspondência
        } else {
          i++; // Se 'j' for zero, simplesmente avançamos para o próximo caractere na string de entrada
        }
      }
    }
  }
  
  // Exemplo prático
  const text = "ABABDABACDABABCABAB";
  const pattern = "ABABCABAB";
  
  kmpSearch(text, pattern);
  