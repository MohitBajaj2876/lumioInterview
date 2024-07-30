import { LightningElement, api, wire } from 'lwc';
import getOrderSummary from '@salesforce/apex/OrderSummaryController.getOrderSummary';

export default class OrderSummary extends LightningElement {
    
    orderData;
    columns = [
        { label: 'Order Number', fieldName: 'OrderNumber', type: 'text' },
        { label: 'Customer Name', fieldName: 'accountName', type: 'text' },
        { label: 'Total Quantity', fieldName: 'totalQuantity', type: 'text' }
    ];

    @wire(getOrderSummary)
    wiredOrder({ error, data }) {
        if (data) {
            this.orderData = data;
            console.log(this.orderData);
        } else if (error) {
            // Handle error
            console.error('Error fetching order data:', error);
        }
    }
}