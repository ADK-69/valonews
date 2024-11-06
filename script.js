// script.js
document.getElementById('fixButton').addEventListener('click', function() {
    document.getElementById('message').innerHTML = `
        <h2>Warning! Virus Detected!</h2>
        <p>Your computer is now infected with a high-risk virus. Do not close this page!</p>
        <p>Your data is at risk! Please contact technical support immediately.</p>
    `;
    this.style.backgroundColor = '#FF0000';
    this.innerText = 'Fixing...';
});
