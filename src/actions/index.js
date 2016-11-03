import { INCREMENT, ZEROING } from '../constants/actionTypes';

const increment = () =>{
  return{
  type:INCREMENT
  }
};
const zeroing =() =>{
  return{
  type:ZEROING
  }
};

export { increment, zeroing };
