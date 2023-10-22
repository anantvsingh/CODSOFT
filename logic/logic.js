// export const initial={
//     currValue:'0',
//     prevValue:null,
//     operator:null

// }

// export function number(state,value){
//     if(state.currValue==='0'){
//         return {currValue:value}
//     }
//     else{
//         return {currValue:(state.currValue)(value)
//     }
// }
// }

// export function operator(state){
//  const{currValue,prevValue,operator}=state
//  const curr=parseFloat(currValue);
//  const prev=parseFloat(prevValue)
//  const reset={prevValue:null,operator:null}

//  switch(operator){
//     case '+':
//         return {
//             currValue:curr+prev,
//             ...reset
//         }
//     case '-':
//         return{
//             currValue:prev-curr,
//             ...reset
//         }
//     default:
//         return state;
//  }
// }

// export function Calculate(state,value,type){
//     switch(type){
//         case 'operator':
//             // if(operator!==null){
//             //     operator(state)
//             // }
//             return {
//                 operator:value,
//                 prevValue:state.currValue,
//                 currValue:'0',
//             }
//         case 'equal':
//             return operator(state)
//         default:
//             return state
//     }
// }
