import { getAllTicketAPI } from "@/api/ticket";
import { formatData } from "@/utils/format-date";

const state = () => {
  return {
    listTicket: {},
  };
};

const mutations = {
  setListTicketMutation(state, payload) {
    const data = payload.map((item) => ({
      ...item,
      checkIn: formatData(item.checkIn),
      checkOut: formatData(item.checkOut),
    }));

    state.listTicket = data;
  },
};

const actions = {
  async getAllTicketAction({ commit }) {
    const data = await getAllTicketAPI();
    commit("setListTicketMutation", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
