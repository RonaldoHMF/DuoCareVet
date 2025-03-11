document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.infusion-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const infusionFields = document.createElement('div');
            infusionFields.innerHTML = `
                <label for="dose">Dose:</label>
                <input type="text" id="dose" name="dose">
                <label for="volume">Volume:</label>
                <input type="text" id="volume" name="volume">
                <label for="rate">Rate:</label>
                <input type="text" id="rate" name="rate">
            `;
            document.body.appendChild(infusionFields);
        });
    });
});