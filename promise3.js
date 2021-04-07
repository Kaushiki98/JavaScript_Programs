function watchingPromise() {
  return new Promise((resolve, reject) => {
    if(userLeft){
      reject ({
         name : 'user left',
         message : ':('
      })
    }
      else if (userWatching){
        reject({
          name:'user watching',
          message: 'webpageSimplified<cat'
        })
      } else {
        resolve('like')
      }
    })
  }
  watchingPromise().then((message) => {
    console.log('success '+message)
  }).catch((error) =>{
    console.log(error.name + ' ' +error.message)
  })

