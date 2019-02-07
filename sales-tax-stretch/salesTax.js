var salesTaxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
  };
  
  var companySalesData = [
    {
      name: "Telus",
      province: "BC",
      sales: [ 100, 200, 400 ]
    },
    {
      name: "Bombardier",
      province: "AB",
      sales: [ 80, 20, 10, 100, 90, 500 ]
    },
    {
      name: "Telus",
      province: "SK",
      sales: [ 500, 100 ]
    }
  
    
];
//Set counters for each Code
function calculateSalesTax( ) {    
    telusSumTotal = 0
    bombSumTotal = 0

    telusTotal = 0
    bombTotal = 0
    output = {}

    //For each company Data get sales Array
    for (var filter in companySalesData) {
        sum = 0
        var currentAmount = companySalesData[filter].sales
        
        
        
        //For Each Array Calculate Sum
        for (var i = 0; i < currentAmount.length; i++){
            addthis = currentAmount[i]    
            sum += addthis
            
        }
        // calculate salesTax for Telus
        if (filter === "0") {
            salesTaken = sum * (salesTaxRates.BC)
            telusSumTotal += salesTaken
            telusTotal += sum
            
            
        
        //calculate salesTax for Bomb
        } else if (filter === "1") {
            salesTaken = sum * (salesTaxRates.AB)
            bombSumTotal = salesTaken
            bombTotal += sum
            

        //calculate salesTax for Telus
        } else if (filter === "2" ) {
            salesTaken = sum * (salesTaxRates.SK)
            telusSumTotal += salesTaken
            telusTotal += sum
            
        }   
        
    }

    output = {Telus: {totalSales: telusTotal, totalTaxes: telusSumTotal}}
    console.log(output)
    output = {Bombardier: {totalSales: bombTotal, totalTaxes: bombSumTotal}}
    console.log(output)
}


calculateSalesTax()

        // for (var i = 0; i < telusSalesData.length; i++){
            
        //     addthis = telusSalesData[i]
        //     sum += addthis
            
        // }
        
//         //Calculate Sales Tax
//         return sum * BCTax
      
//   }
// (calculateSalesTax(salesData,0))
  
  
  //var results = calculateSalesTax(companySalesData, salesTaxRates);
  
  /* Expected Results:
  {
    Telus: {
      totalSales: 1300
      totalTaxes: 144
    },
    Bombardier: {
      totalSales: 800,
      totalTaxes: 40
    }
  }
  */