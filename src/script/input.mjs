export default function printContactUs() {
    const contactUsContainer = document.getElementById('contactUsContainer');
    const inputTitles = ['Your name', 'Your email', 'Subject'];

    for (let i = 0; i < inputTitles.length; i += 1) {
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('input_container');

        const inputTitle = document.createElement('h4');
        inputTitle.classList.add('input_title');
        inputTitle.innerHTML = `${inputTitles[i]}<span class="request_section">*</span>`;

        const contactInput = document.createElement('input');
        contactInput.type = 'text';
        if (i === 0) {
            contactInput.classList.add('contact_us_input', 'placeholder_text');
        } else {
            contactInput.classList.add(
                'contact_us_input',
                'bigger_input',
                'placeholder_text',
            );
        }
        contactInput.id = `input${i + 1}`;

        const inputMessage = document.createElement('div');
        inputMessage.classList.add('input_message');

        contactUsContainer.append(inputContainer);
        inputContainer.append(inputTitle, contactInput, inputMessage);

        contactInput.addEventListener('input', (e) => {
            if (e.target.value) {
                inputMessage.innerText = '';
            } else {
                inputMessage.innerText = `You need to fill in ${inputTitles[i].toLowerCase()}`;
            }
        });

        contactInput.addEventListener('focusout', (e) => {
            if (e.target.value) {
                inputMessage.innerText = '';
            } else {
                inputMessage.innerText = `You need to fill in ${inputTitles[i].toLowerCase()}`;
            }
        });
    }

    const contactUsTextarea = document.createElement('textarea');
    contactUsTextarea.classList.add('contact_us_textarea');
    contactUsTextarea.id = 'contactUsTextarea';
    contactUsTextarea.cols = '32';
    contactUsTextarea.rows = '5';

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttons_container');

    const secondaryButton = document.createElement('button');
    secondaryButton.classList.add('secondary_button');
    secondaryButton.innerText = 'Cancel';

    const primaryButton = document.createElement('button');
    primaryButton.classList.add('primary_button');
    primaryButton.innerText = 'Send';

    contactUsContainer.append(contactUsTextarea, buttonContainer);
    buttonContainer.append(secondaryButton, primaryButton);
}
