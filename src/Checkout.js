import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className="checkout__ad" src="https://salesfunnelhq.com/wp-content/uploads/2018/07/AdBadger_Banner_Ads_06-1024x225.png" alt=""/>
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                </div>      
            </div>

            <div className="checkout__right">
                <Subtotal/>
                <h2>The subtotal will go here</h2>
            </div>

        </div>
    )
}

export default Checkout
