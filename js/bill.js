/* bill.js */

export default class Bill {
    constructor() {
        this.amounts = [];
    }
  
    /** @param {string} amountStr */
    addAmount(amountStr) {
        this.amounts[amountStr] = number;
        this.amounts.push(amountStr);
        return this.amounts
       
    } 
    getCount(){
        return this.amounts.length;
    }
    getTotal(){
        let result = 0;
        this.amounts.forEach(function(amountStr){
          result += amountStr;  
        })
        return result;
    }
    getAverage(){
        let result = 0;
        this.amounts.forEach(function(amount){
          result += amount;  
        })
        return result/this.amounts.length
    }

  }