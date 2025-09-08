onload = () => {
    const shareButton = document.querySelector('#share');
    shareButton.addEventListener('click', async () => {
        const orderNumberElem = document.querySelector('#orderNumber');
        const orderNumber = orderNumberElem.value;
        try {
            await navigator.share({
                title: 'Order Number',
                text: orderNumber
            });
        } catch (err) {
            alert(`Error sharing: '${err}'`);
        }
    });
}