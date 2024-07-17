function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const upi = document.getElementById('upi').value;
    const encodedName = encodeURIComponent(name);
    const encodedUPI = encodeURIComponent(upi);
    const thisText = `https://dhruvdornal.github.io/onlychai/support.html?name=${encodedName}&upi=${encodedUPI}`;
    const copyButton = document.getElementById('copyButton');

    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(thisText)
        .then(() => {
          alert("Text copied to clipboard")
        })
        .catch(err => {
          alert("Failed to copy")
        });
    });
    //window.location.href = `https://dhruvdornal.github.io/onlychai/support.html?name=${encodedName}&upi=${encodedUPI}`; // Navigate with parameters
}
