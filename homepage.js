document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById('your-name');
    const organizingParticipating = document.getElementById('organizing-participating');
    const justOrganizing = document.getElementById('just-organizing');
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      if (!nameInput.value.trim()) {
        showError(nameInput, '* Name is required');
      } 
      
      if (!organizingParticipating.checked && !justOrganizing.checked) {
        showError(justOrganizing, '* Please select participation');
      }
      else {
        window.location.href = 'thankyou.html';
      }
    });
  
    function showError(container, message) {
      const error = document.createElement('div');
      error.className = 'error-message';
      error.innerText = message;
      error.style.color="red";
      error.style.fontFamily="Times New Roman";
      container.parentNode.appendChild(error);
      container.classList.add('error');
    }
  
    function resetErrors() {
      const errors = document.querySelectorAll('.error-message');
      errors.forEach(error => error.remove());
  
     
      nameInput.classList.remove('error');
      organizingParticipating.classList.remove('error');
      justOrganizing.classList.remove('error');
    }
  });
  