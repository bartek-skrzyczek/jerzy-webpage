
  // Znajdź element o id 'current-year'
  const yearSpan = document.getElementById('current-year');
  
  // Pobierz aktualny rok z obiektu Date
  const currentYear = new Date().getFullYear();
  
  // Wstaw aktualny rok do znalezionego elementu
  yearSpan.textContent = currentYear;
