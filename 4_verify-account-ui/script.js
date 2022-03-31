const codes = document.querySelectorAll('.code')

codes[0].focus();

codes.forEach((code, index) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <= 9) {
            codes[index].value = ''; // as soon as we hit the number, we want to clear it out
            setTimeout(() => codes[index + 1].focus(), 10) // wait 10 milli seconds and then move to the next
        } else if (e.key === 'Backspace') {
            setTimeout(() => codes[index - 1].focus(), 10)
        }
    })
})