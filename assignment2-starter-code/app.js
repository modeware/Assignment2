(function(){
console.log("Hello")
angular.module('ShoppingListCheckOf',[])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

    

    ToBuyController.$inject=['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService){
        var toBuy = this;

        toBuy.gettoBuyItems = ShoppingListCheckOffService.gettoBuyItems();
        toBuy.alreadyBought = function(index){ShoppingListCheckOffService.alreadyBought(index)};

        console.log("Hello")

    }
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService){
        var bought = this;
        bought.getBoughtItems = ShoppingListCheckOffService.getBoughtItems();
        console.log(bought.getBoughtItems)
    }


    function ShoppingListCheckOffService()
    {
        var service = this;

        var toBuy = [
                    { name: "cookies", quantity: 10 }, 
                    { name: "banana", quantity: 10 }, 
                    { name: "pepsicola", quantity: 10 }, 
                    { name: "pepper", quantity: 10 }, 
                    { name: "rice", quantity: 10 }
                    ]

         service.bought=[]
        
        service.alreadyBought=function(itemIndex){
            console.log(itemIndex)
            var temp = toBuy.splice(itemIndex,1)
            service.bought.push(temp[0])
            console.log(service.bought) 
                      
        }

        service.gettoBuyItems = function(){
            return toBuy;
        }

        service.getBoughtItems = function(){
            return service.bought;
        }




    }

})()