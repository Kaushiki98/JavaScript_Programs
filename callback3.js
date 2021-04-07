const userLeft = false
const userWatching = true

function watchingcallback(callback, errorCallback) {
  if(userLeft){
    errorCallback ({
       name : 'user left',
       message : ':('
    })
  }
     else if (userWatching){
       errorCallback({
         name:'user watching',
         message: 'webpageSimplified<cat'
       })
     }else{
       callback('like')
     }
  }
  watchingcallback((message) => {
    console.log('success '+message)
    }, (error) =>{
      console.log(error.name + ' ' +error.message)
    })
