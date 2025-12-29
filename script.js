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
        await navigator.share({
            title: 'Order Number',
            text: orderNumber
        });
    }
}
customElements.define('order-info', OrderElement);

onload = () => {
    const addButton = document.querySelector('#addButton');
    addButton.addEventListener('click', () => {
        const orders = document.querySelector('#orders');
        const order = document.createElement('order-info');
        orders.appendChild(order);
        
        const itemCount = document.querySelector('#itemCount');
        itemCount.innerHTML = orders.childElementCount;
    })
}