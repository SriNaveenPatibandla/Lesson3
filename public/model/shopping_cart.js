export class ShoppingCart{
    constructor(uid){
        this.uid=uid;
        this.items=[]; //array of product class objects



    }
    addItem(product){
        const index =this.items.findIndex(e =>product.docId==e.docId);
        if(index < 0){
            product.qty =1;
            this.items.push(product);
        }else{
            this.items[index].qty++;
        }
    }
    
}