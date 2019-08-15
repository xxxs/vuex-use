import axios from "axios"
export default {
    getData({ commit }) {

        if (this.state.list.length > 0) {
            console.log(1111,this.state.list)
        } else {
            axios.get('./cityList.json').then(function (response) {
                commit('CITY_LIST', response.data)
                console.log('city',response.data);
            }).catch(function (error) {
                console.log(error);
                commit('CITY_LIST', error)
            });
        }

    },
    addNum({ commit }) {
        commit('NUM_ADD', 1111);
    }
}