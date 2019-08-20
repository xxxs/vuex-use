
const NUM_ADD = "NUM_ADD";
const CITY_LIST = 'CITY_LIST';
const SET_DATA  = "SET_DATA"
export default{
    [NUM_ADD](state,n){
         state.num += n ;
    },

    [CITY_LIST](state,n){
            state.list = n
    },
    SET_DATA(state, obj) {
        state.datas = obj
    }

}