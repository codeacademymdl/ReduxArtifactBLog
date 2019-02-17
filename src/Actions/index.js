export const ADD_CARDS="ADD_CARDS";
export const ADD_BLOG="ADD_BLOG"

export const addCard = (cards) =>({
    type:ADD_CARDS,
    payload:cards,
})

export const addBlog = (card)=>({
    type:ADD_BLOG,
    payload:card,
})

const clapAction = () => {
    return {
      type: 'clap',
    }
  }
  
  const heartAction = () => {
    return {
      type: 'heart',
    }
  }
  

