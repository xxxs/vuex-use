
const NUM_ADD = "NUM_ADD";
const CITY_LIST = 'CITY_LIST';
export default{
    [NUM_ADD](state,n){
         state.num += n ;
    },

    [CITY_LIST](state,n){
            state.list = n
    }

}