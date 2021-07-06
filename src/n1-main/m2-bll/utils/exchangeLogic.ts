
export const changeCurrency={

     getAbreviature (amount:number,currencyId:string, currencyList: Array<any>) {
         const abreviatureArray=currencyList.filter(el =>el.Cur_ID=== +currencyId)
         return abreviatureArray[0].Cur_Abbreviation
    },

    getTradetCurrencyPrice (amount:number,currencyId:string, currencyList: Array<any>) {
        const boughtCurrency=currencyList.filter(el =>el.Cur_ID=== +currencyId)
        const boughtCurrencyPrice = amount * boughtCurrency[0].Cur_OfficialRate
        return boughtCurrencyPrice
    },

}




