const passwordInput  = document.querySelector(".pass-field input");
const eyeIcon  = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

// An array of password requirement with corresponding
//regular expressions and index of the requirement list item
const requirements = [
{regex: /.{8,}/, index: 0 },//Minimum of 8 characters
{regex: /[0-9]/, index: 1 },//At least one number
{regex: /[a-z]/, index: 2 },//At least one lowercase letter
{regex: /[^A-Za-z0-9]/, index: 3 }, //At least one special character
{regex: /[A-Z]/, index: 4 },//At least one Uppercase letter
]

passwordInput.addEventListener("keyup", (e) => {
  requirements.forEach(item => {
    //Check if the password matches the requirement regex
    const isValid = item.regex.test(e.target.value);
    const requirementItem = requirementList[item.index];
     
    //Updating icon of requirement item if requirement matched or not
    if(isValid){
        requirementItem.firstElementChild.className = "fa-solid fa-check";
        requirementItem.classList.add("valid");
    }else{
        requirementItem.firstElementChild.className = "fa-solid fa-circle";
        requirementItem.classList.remove("valid");
    }
  }); 
});

eyeIcon.addEventListener("click", () => {
  //Toggle the password input type between "Password" and text"
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";

  //Update the eye icon class based on the password input type
  eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});