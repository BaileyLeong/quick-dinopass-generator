async function generatePasswords(count) {
  const passwordList = document.getElementById("passwordList");

  passwordList.textContent = "";

  const loadingMessage = document.createElement("p");
  loadingMessage.textContent = "Loading...";
  passwordList.appendChild(loadingMessage);

  const spinner = document.createElement("img");
  spinner.src = "https://i.gifer.com/ZZ5H.gif"; //
  spinner.alt = "Loading spinner";
  spinner.width = 50;
  spinner.height = 50;
  passwordList.appendChild(spinner);

  const passwords = [];

  for (let i = 0; i < count; i++) {
    try {
      const response = await fetch("https://www.dinopass.com/password/simple");
      const password = await response.text();
      passwords.push(password);
    } catch (error) {
      console.warn("Failed to fetch password:", error);
      passwords.push("Error fetching password");
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  passwordList.removeChild(loadingMessage);
  passwordList.removeChild(spinner);

  passwords.forEach((password) => {
    const li = document.createElement("li");
    li.textContent = password;
    passwordList.appendChild(li);
  });
}

generatePasswords(100);
