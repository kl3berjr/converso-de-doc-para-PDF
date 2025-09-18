function generatePDF() {
  // Pega os arquivos do input
  const files = document.getElementById('formFileMultiple').files;

  if (files.length === 0) {
    alert('Selecione ao menos um arquivo.');
    return;
  }

  // Cria uma nova instância do jsPDF
  const pdf = new jsPDF();

  // Para cada arquivo selecionado
  for (let i = 0; i < files.length; i++) {
    // Exemplo: escreve no PDF apenas o nome do arquivo
    pdf.text(`Arquivo: ${files[i].name}`, 10, 20 + (i * 10));
  }

  // Salva o PDF gerado
  pdf.save('arquivos.pdf');
}
