import { COUNTUP } from "../actions";

const count = (state = [], action) => {
  switch (action.type) {
    case COUNTUP:
      // 対象のオブジェクトを取得してインクリメント
      let target = state.counters.filter((counter) => {
        return counter.id === action.id;
      })[0];

      target.count++;

      return {
        counters: state.counters,
        total: state.total + 1,
      };

    default:
      return state;
  }
};

export default count;
