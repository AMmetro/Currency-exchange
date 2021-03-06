import {Dispatch} from "redux";
import {myAPI} from "../dal/Api";

export type ValueType = [{ Cur_ID: string, Date: string, Cur_OfficialRate: number }]
export type currencyChartStateType = { value: ValueType, currencyId: string, dateFrom: string, dateTill: string };
const initState: currencyChartStateType = {
    value: [{Cur_ID: "", Date: "", Cur_OfficialRate: 0}],
    currencyId: "", dateFrom: "", dateTill: ""
};

export const currencyChartReducer = (state = initState, action: AddCurrencyChartType): currencyChartStateType => {
    switch (action.type) {
        case "setCurrencyChart": {
            return state = {
                value: action.rateData,
                currencyId: action.currencyId,
                dateFrom: action.dateFrom,
                dateTill: action.dateTill
            };
        }
        default:
            return state;
    }
};

// actions-------------------------------------------------------------------

type AddCurrencyChartType = { type: string, rateData: ValueType, currencyId: string, dateFrom: string, dateTill: string };
export const addCurrencyChartAC = (rateData: ValueType, currencyId: string, dateFrom: string, dateTill: string): AddCurrencyChartType => {
    return { type: "setCurrencyChart", rateData, currencyId, dateFrom, dateTill }
};

//thunks-------------------------------------------------------------------

export const makeChartsTC = (currencyId: string, dateFrom: string, dateTill: string) => {
    return (dispatch: Dispatch<AddCurrencyChartType>) => {
        myAPI.getChartData(currencyId, dateFrom, dateTill)
            .then((res) => {
              dispatch(addCurrencyChartAC(res.data, currencyId, dateFrom, dateTill))
            })

    }
}

