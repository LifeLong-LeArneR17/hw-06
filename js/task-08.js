
// <form class="login-form">
//     <label>
//         Email
//         <input type="email" name="email" />
//     </label>
//     <label>
//         Password
//         <input type="password" name="password" />
//     </label>
//     <button type="submit">Login</button>
// </form>



const elementForm = document.querySelector(".login-form");


elementForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
     elements: { email, password }
    } = event.currentTarget;

    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}

 

