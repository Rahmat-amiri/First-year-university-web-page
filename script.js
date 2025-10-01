// Run when page loads
window.onload = function ()
    {
        // Get saved theme from browser (if any)
        let theme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", theme);

        //show current date and time and updates every 1 second
        setInterval(showDateTime, 1000); 

        // display user name on heading 
        const savedName = localStorage.getItem("user_name");
        if (savedName) 
        {
            document.getElementById("welcome").textContent = `Hello, ${savedName}`;
        };
    }

    // Function to change them between dark and light mode        
    function toggleTheme()
    {
        const html = document.documentElement;
        const currentTheme = html.getAttribute("data-theme");

        const newTheme = currentTheme === "dark" ? "light" : "dark";

        html.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    }

    // Function to show a specific image and its corresponding description
    function showGallery(index) 
    {
        const images = document.querySelectorAll(".gallery-img");
        const descriptions = document.querySelectorAll(".gallery-desc");

        images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
        });

        descriptions.forEach((desc, i) => {
        desc.classList.toggle("active", i === index);
        });
     }

     // function to update the header (pritn welcome messege)
     function printusername(event)
    {
         event.preventDefault(); // Prevent the form from reloading the page

           const nameInput = document.getElementById("user_name_input");
            const greeting = document.getElementById("welcome");

            const userName = nameInput.value.trim();

            if (userName) 
            {
                // save to local storage
                localStorage.setItem("user_name", userName)

                welcome.textContent = `Hello, ${userName}`;
            }
            
    }

// Show current date and time
function showDateTime() 
{
  const now = new Date(); // Get current date & time
  const datetimeElement = document.getElementById("datetime");

  // Format date & time
  const formatted = now.toLocaleString(); // e.g., "6/19/2025, 10:35:42 AM"
  datetimeElement.textContent = `Current Date & Time: ${formatted}`;
}


// To do page script bellow:

function checkpassword()
 {
    const input = document.getElementById("password-input").value;
    const Password = "INFT1016"; 

    if (input === Password) {
        document.getElementById("password").style.display = "none";
        document.getElementById("todo-list").style.display = "block";
    } else {
        alert("Incorrect password. Please try again.");
    }
}

// the render function 

let tasks = [];


function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.textContent = task;
    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.onclick = () => removeTask(i);
    li.appendChild(btn);
    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task) {
    tasks.push(task);
    input.value = "";
    renderTasks();
    
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}


