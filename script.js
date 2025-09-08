class OrderElement extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open' });

        const template = document.getElementById('order-template');
        shadow.appendChild(template.content.cloneNode(true));

        const shareButton = shadow.getElementById('share');
        shareButton.addEventListener('click', async () => {
            await this.share();
        });
    }

    async share() {
        const shadow = this.shadowRoot;
        const orderNumberElem = shadow.getElementById('orderNumber');
        const orderNumber = orderNumberElem.value;
        try {
            await navigator.share({
                title: 'Order Number',
                text: orderNumber
            });
        } catch (err) {
            alert(`Error sharing: '${err}'`);
        }
    }
}
customElements.define('order-info', OrderElement);
