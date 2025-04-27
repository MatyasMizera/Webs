filterTable.oninput = () => {
    document.querySelectorAll('tbody tr').forEach(tr =>
      tr.style.display = tr.children[1].textContent.toLowerCase().includes(filterTable.value.toLowerCase()) ? '' : 'none'
    );
  };
  
  const options = Array.from(select.options);
  filterSelect.oninput = () => {
    select.innerHTML = '';
    options.forEach(opt => {
      if (opt.text.toLowerCase().includes(filterSelect.value.toLowerCase()) || !filterSelect.value)
        select.append(opt.cloneNode(true));
    });
  };
  
  form.onsubmit = e => {
    e.preventDefault();
    vysledek.textContent = 'Vybráno: ' + select.value;
  };
  