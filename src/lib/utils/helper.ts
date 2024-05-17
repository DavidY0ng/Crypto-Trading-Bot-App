import { showToast } from "$lib/components/toasts/toast";

export const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function copyToClipboard(text) {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;
  
    // Ensure the element is not visible on the screen
    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;
  
    document.body.appendChild(textarea);
  
    // Select the text in the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text to the clipboard
    document.execCommand('copy');
  
    // Remove the textarea element
    document.body.removeChild(textarea);
  
    // Optionally, notify the user that the text has been copied
    showToast('Copied successful', 'green')
}

  