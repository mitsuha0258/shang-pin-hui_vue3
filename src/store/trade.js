import { reqAddressInfo, reqOrderInfo } from "@/api";
const state = {
  address: [],
  orderInfo:{}
};
const mutations = {
  GETUSERADDRESS(state, address) {
    // 请求接口数据为空，所以我自己编了一些数据
    console.log('111', address)
    if(address.length === 0){
      address = [
        {
          id: 1,
          isDefault: 1,
          consignee: 'Alex',
          fullAddress: 'wwwwwwwww',
          phoneNum: 13899999999
        },
        {
          id: 2,
          isDefault: 0,
          consignee: 'Bob',
          fullAddress: 'qqqqqqqqq',
          phoneNum: 13888888888
        },
        {
          id: 3,
          isDefault: 0,
          consignee: 'Tom',
          fullAddress: 'zzzzzzzz',
          phoneNum: 13800000000
        }
      ]
    }
    state.address = address;
  },
  GETORDERINFO(state,orderInfo){
     state.orderInfo = orderInfo;
  }
};
const actions = {
  //获取用户地址信息
  async getUserAddress({ commit }) {
    let result = await reqAddressInfo();
    if (result.code === 200) {
      commit("GETUSERADDRESS", result.data);
    }
  },
  //获取商品清单数据
  async getOrderInfo({commit}) {
    let result = await reqOrderInfo();
    if(result.code===200){
      commit("GETORDERINFO",result.data);
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
