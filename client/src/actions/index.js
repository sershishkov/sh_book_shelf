import axios from 'axios';

export function getBooks (
  limit = 10,
  start = 0,
  order = 'asc',
  list = ''
){
  const request = 
       axios.get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
            .then(response => {
              if(list){
                return [...list, ...response.data];
              }else{
                return response.data;
              }
            })
            .catch(err => console.log(err));  

      return{
        type:'GET_BOOKS',
        payload:request

      }

};

export function getBookWithReviewer(id){
  const request = axios.get(`/api/getBook?id=${id}`);
  return (dispatch) =>{
    request.then(({data})=>{
      let book = data;

      axios.get(`/api/getReviewer?id=${book.ownerId}`)
        .then(({data})=>{
          let response = {
            book,
            reviewer:data
          }
            // console.log(response);
          dispatch({
            type:'GET_BOOK_WITH_REVIEWER',
            payload: response
          });
        })
      
      
    });
  }
}
