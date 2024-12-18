// Simulate trait extraction logic
async function extractTraits(description) {
    // Simulating asynchronous behavior
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!description) {
                reject(new Error('Empty description provided.'));
            }

            resolve({
                background: /background:\s*([^,]+)/i.exec(description)?.[1] || 'Not Found',
                shirt: /shirt:\s*([^,]+)/i.exec(description)?.[1] || 'Not Found',
                hat: /hat:\s*([^,]+)/i.exec(description)?.[1] || 'Not Found',
                jewelry: /jewelry:\s*([^,]+)/i.exec(description)?.[1] || 'Not Found',
                glasses: /glasses:\s*([^,]+)/i.exec(description)?.[1] || 'Not Found',
            });
        }, 1000);
    });
}

// Attach event listener to button
document.getElementById('extract-btn').addEventListener('click', async () => {
    const descriptionInput = document.getElementById('description-input');
    const errorMessage = document.getElementById('error-message');
    const extractBtn = document.getElementById('extract-btn');

    try {
        extractBtn.classList.add('loading');
        extractBtn.textContent = 'Extracting...';

        // Extract traits
        const extractedTraits = await extractTraits(descriptionInput.value);

        // Update trait displays
        document.getElementById('background-trait').textContent = extractedTraits.background;
        document.getElementById('shirt-trait').textContent = extractedTraits.shirt;
        document.getElementById('hat-trait').textContent = extractedTraits.hat;
        document.getElementById('jewelry-trait').textContent = extractedTraits.jewelry;
        document.getElementById('glasses-trait').textContent = extractedTraits.glasses;

        // Clear error message
        errorMessage.textContent = '';
    } catch (error) {
        // Show error message
        errorMessage.textContent = 'Failed to extract traits. Please try again.';
        console.error('Trait extraction error:', error);
    } finally {
        // Reset button state
        extractBtn.classList.remove('loading');
        extractBtn.textContent = 'Extract Traits';
    }
});
