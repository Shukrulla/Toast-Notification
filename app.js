const notifications = document.querySelector(".notifications");
const buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
    timer: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Success: This is a success toast.",
  },
  error: {
    icon: "fa-circle-xmark",
    text: "Error: This is an error toast.",
  },
  warning: {
    icon: "fa-triangle-exclamation",
    text: "Warning: This is warning toast.",
  },
  info: {
    icon: "fa-circle-info",
    text: "Info: This is an information toast.",
  }
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId);//Clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
}

const createToast = (id) => {
    //Getting the icon and text fot the toast based on the id passed
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li"); //Creating a new 'li' element for the toast
    toast.className = `toast ${id}`; // Setting the classes for the toast
    //Seting the inner HTML for the toast
    toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                         <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`; 
    notifications.appendChild(toast); //Append the toast
    //Setting timeout to remove the toast after the first
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}

//Adding a click event listener to each button to create a toast when clicked
buttons.forEach(btn => {
    btn.addEventListener('click', () => createToast(btn.id));
});