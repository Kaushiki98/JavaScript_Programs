let p = new Promise((resolve, reject) => {
  let a =3+3
  if(a === 6){
     resolve('success')
  }else {
    reject('fail')
  }
})
p.then((message) => {
  console.log('this is '+ message)
}).catch((message) =>{
  console.log('in catch '+message)
})
