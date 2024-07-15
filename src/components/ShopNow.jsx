import React from 'react'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux';
import { actioncreators } from '../state/index';

export default function ShopNow() {
    const dispatch =  useDispatch();
  return (
    <div className='shopnow'>
        <h1>Deposit / Withdraw money</h1>
      <button onClick={()=>dispatch(actioncreators.depositMoney(50))}>+</button>
      <span>Update Money</span>
      <button onClick={()=>dispatch(actioncreators.withdrawMoney(50))}>-</button>
    </div>
  )
}
