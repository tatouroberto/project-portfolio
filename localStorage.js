const saveFormData = () => {
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("mail").value,
      message: document.getElementById("comment").value,
    };
  
    // Save the entire form data as a single object in local storage
    localStorage.setItem("formData", JSON.stringify(formData));
  };
  