const INITIAL_STATE = {
  articles: [],
};

function articleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDARTICLE": {
      const newArr = [...state.articles];
      // unshift : met un élément au début d'un tableau
      newArr.unshift(action.payload);
      return {
        articles: newArr
      }
    }
    case "LOADARTICLES": {
      return {
        // pas obligatoire car une seul propriété mais à mettre si plusieurs :
        // ...state,
        articles: action.payload,
      };
    }
  }
  return state;
}
export default articleReducer;

export const getArticles = () => (dispatch) => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "LOADARTICLES",
        payload: data,
      });
    });
};
