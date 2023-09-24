// object Account
// grouping related variables
// Properties in Object always should be in string or Symbol nothing other than this
let account = {
    name: 'Vivek',
    type: 'Simple Saving',
    balance: 100000,
    active: true,
  }



// ADD AND DELETE IN OBJECT

account.reference = 'Some one';
account['new_property'] = 'Yet some value';
console.log(account);

delete account.reference;
console.log(account);



// Object by this keyword
let account = {
    name: 'Vivek',
    type: 'Preffered Savings',
    balance: 100000,
    active: true,
    print: function () {
      console.log('Name: ', this.name, 'Type: ', this.type, 'Active: ', this.active, 'Bal: ', this.balance);
    }
  };
  
  account.print()



  // Passing into a function as an argument 
  // can be passes to a function as an argument
function printAccountDetails(obj) {
    console.log('Name: ', obj.name, 'Type: ' ,obj.type, 'Active: ' , obj.active, 'Bal: ' , obj.balance);
  }
  
  printAccountDetails(account);