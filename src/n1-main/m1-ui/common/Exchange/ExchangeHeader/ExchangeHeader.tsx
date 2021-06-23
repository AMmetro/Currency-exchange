
import style from "./ExchangeHeader.module.css";
import React, {ChangeEvent, ChangeEventHandler, EventHandler, useEffect, useState} from "react";
import SuperButtonContainer from "../../SuperComponents/SuperButton/SuperButtonContainer";
import {makeCurrencyListTC, currencyListStateType} from "../../../../m2-bll/currencyListReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../m2-bll/store";
import {byCurrencyTC, sellCurrencyTC, walletReducerStateType} from "../../../../m2-bll/currencyWalletReducer";


const ExchangeHeader = (props: any) => {
    const [amount, setAmount] = useState<number>(1000);
    const currencyList=useSelector<AppStoreType,currencyListStateType>(state=>state.currencyListReducer)
    const wallet=useSelector<AppStoreType,walletReducerStateType>(state=>state.walletReducer)
    const [currencyId, setCurrencyId] = useState<string>("");  
    const dispatch = useDispatch()

    const today = new Date();
    today.setDate(today.getDate() );
    const date = today.toISOString().substr(0,10);

    useEffect(() => {
        dispatch(makeCurrencyListTC(date))
    },[date]);

    const selectDropChart = (e:ChangeEvent<HTMLSelectElement>) => {
      setCurrencyId(e.currentTarget.value)
     }

    const bySome=()=>{
        dispatch(byCurrencyTC(amount,currencyId))
    }

    const sellSome=()=>{
        dispatch(sellCurrencyTC(amount,currencyId))
    }


    const enterAmount=(e:ChangeEvent<HTMLInputElement>)=>{
        setAmount(+e.currentTarget.value)        
    }

    const currencyListName = currencyList.list.map(elem =>
        <option key={elem.Cur_Abbreviation}
                value={elem.Cur_ID}
          >
             {elem.Cur_Name}
        </option>
          )


    return (
    <div className={style.exchange_header} >
       <div className={style.exchange_header_menu}>
          <div>
            Select currency<br/>
            <select
            style={{width:150}}
            onChange={selectDropChart}>
            {currencyListName}
            </select>
          </div>

          <div>
            Enter amount<br/>
            <input type="number"
            style={{width:50}}
            onChange={(e)=>enterAmount(e)}
            />
          </div>

          <div>
            press for<br/> 
            <button onClick={bySome}>By</button>
            <button onClick={sellSome}>Sell</button>
          </div>
       </div>


        <div className={style.wallet_wrapper}> 
            <div>
                Balance <br/>
                {wallet.balance}$
            </div>
            <div>
               <svg id="Layer_1" height="51" viewBox="0 0 512 512"
                 width="51" data-name="Layer 1"><path d="m365.29 117.74-298.51 96.96a28.75 28.75 0 0 1 5.98-.62h317.79v-77.98a19.3 19.3 0 0 0 -25.26-18.36z"
                 fill="#7b9aaa"/>
                 <path d="m409.77 214.08h-337.01a28.927 28.927 0 0 0 -28.95 28.95v229.02a28.948 28.948 0 0 0 28.95 28.95h337.01a28.948 28.948 0 0 0 28.95-28.95v-229.02a28.948 28.948 0 0 0 -28.95-28.95z"
                  fill="#a4bdc1"/>
                  <path d="m448.89 300.52h-96.12a28.948 28.948 0 0 0 -28.95 28.95v56.14a28.948 28.948 0 0 0 28.95 28.95h96.12a19.3 19.3 0 0 0 19.3-19.3v-75.44a19.3 19.3 0 0 0 -19.3-19.3z" fill="#7b9aaa"/>
                  <path d="m387.52 353.6v7.88a14.48 14.48 0 1 1 -28.96 0v-7.88a14.48 14.48 0 1 1 28.96 0z" fill="#6d7486"/>
                  <path d="m336.89 11h-190.74a10.113 10.113 0 0 0 -10.15 9.83v193.17h211v-193.17a10.072 10.072 0 0 0 -10.11-9.83z" fill="#81c83d"/><path d="m315.675 60.95c-11.71-2.53-20.465-11.95-20.815-23.95h-106.68a24.721 24.721 0 0 1 -19.57 23.94 8.652 8.652 0 0 0 -6.61 8.21v144.85h160v-144.83a8.341 8.341 0 0 0 -6.325-8.22z" fill="#9be147"/>
                  <path d="m314.83 180.4a72.84 72.84 0 0 1 -8.18 33.68h-130.26a73.316 73.316 0 1 1 138.44-33.68z" fill="#81c83d"/><path d="m74 472.05v-229.02a28.913 28.913 0 0 1 22.875-28.37 27.855 27.855 0 0 1 5.885-.66h-30a27.855 27.855 0 0 0 -5.885.66 28.913 28.913 0 0 0 -22.875 28.37v229.02a28.787 28.787 0 0 0 28.76 28.95h30a28.787 28.787 0 0 1 -28.76-28.95z" fill="#7b8f91"/><path d="m256.52 108.632a73.349 73.349 0 0 0 -88.31 71.728 72.649 72.649 0 0 0 8.18 33.64h30a73.27 73.27 0 0 1 50.13-105.368z" fill="#6c9e38"/>
                  <g fill="#284268">
                  <path d="m373.039 333.121a20.5 20.5 0 0 0 -20.477 20.479v7.886a20.477 20.477 0 1 0 40.954 0v-7.886a20.5 20.5 0 0 0 -20.477-20.479zm8.477 28.362a8.477 8.477 0 0 1 -16.954 0v-7.883a8.477 8.477 0 0 1 16.954 0z"/>
                  <path d="m76 249a6 6 0 0 0 -6 6v2a6 6 0 0 0 12 0v-2a6 6 0 0 0 -6-6z"/>
                  <path d="m76 277a6 6 0 0 0 -6 6v92a6 6 0 0 0 12 0v-92a6 6 0 0 0 -6-6z"/>
                  <path d="m247.113 180.4a12.018 12.018 0 0 1 24.035-.126c0 .042-.006.083-.006.126s0 .083.006.125a12.031 12.031 0 0 1 -12.014 11.9 6 6 0 0 0 0 12 24.064 24.064 0 0 0 23.266-18.025h5.48a6 6 0 0 0 0-12h-5.48a24.022 24.022 0 0 0 -47.283 6 12.021 12.021 0 1 1 -12.02-12.021 6 6 0 0 0 0-12 24.063 24.063 0 0 0 -23.266 18.021h-4.66a6 6 0 0 0 0 12h4.66a24.022 24.022 0 0 0 47.282-6z"/>
                  <path d="m448.888 294.516h-4.168v-51.482a34.954 34.954 0 0 0 -34.954-34.953h-13.212v-71.981a25.3 25.3 0 0 0 -33.119-24.065l-10.713 3.48v-94.685a15.848 15.848 0 0 0 -15.83-15.83h-190.738a15.847 15.847 0 0 0 -15.829 15.83v166.92l-65.191 21.176a34.959 34.959 0 0 0 -27.324 34.108v229.012a34.953 34.953 0 0 0 34.954 34.954h337a34.954 34.954 0 0 0 34.954-34.954v-51.481h4.168a25.331 25.331 0 0 0 25.3-25.3v-75.447a25.33 25.33 0 0 0 -25.298-25.302zm-96.166-166.388 14.42-4.685a13.3 13.3 0 0 1 17.412 12.657v71.986h-31.832zm-210.4-107.3a3.834 3.834 0 0 1 3.832-3.828h190.738a3.834 3.834 0 0 1 3.83 3.83v187.251h-12.515v-138.906a14.247 14.247 0 0 0 -11.156-13.857c-9.425-2.042-15.932-9.291-16.192-18.037a6 6 0 0 0 -6-5.822h-106.674a6 6 0 0 0 -6 5.822 18.5 18.5 0 0 1 -14.655 18.037 14.1 14.1 0 0 0 -11.055 13.834v138.929h-14.15zm99.2 80.263a79.432 79.432 0 0 0 -73.045 48.418v-80.357a2.164 2.164 0 0 1 1.692-2.127 30.408 30.408 0 0 0 23.318-23.566h96.138c2.707 11.541 12.275 20.853 24.885 23.586a2.182 2.182 0 0 1 1.7 2.13v84.555a79.439 79.439 0 0 0 -74.687-52.637zm74.685 106.009v.977h-.367c.121-.323.25-.646.367-.977zm-185.882-6.737v7.714h-23.746zm302.4 271.679a22.954 22.954 0 0 1 -22.959 22.958h-337a22.954 22.954 0 0 1 -22.956-22.954v-229.012a22.953 22.953 0 0 1 22.954-22.953h113.513a6 6 0 0 0 0-12h-6.127a67.312 67.312 0 1 1 122.746 0h-66.619a6 6 0 0 0 0 12h173.489a22.954 22.954 0 0 1 22.954 22.954v51.481h-79.949a34.993 34.993 0 0 0 -34.953 34.953v56.142a34.993 34.993 0 0 0 34.953 34.954h79.949zm29.47-76.784a13.318 13.318 0 0 1 -13.3 13.3h-96.124a22.98 22.98 0 0 1 -22.953-22.954v-56.135a22.979 22.979 0 0 1 22.953-22.953h96.117a13.317 13.317 0 0 1 13.3 13.3z"/></g></svg>
            </div>
        </div>
     </div>
    )
}

export default ExchangeHeader
