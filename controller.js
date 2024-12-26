async function generateId(req,res) {
    let data = ''
    if(method == 'Post'){
      req.on('data',chunk =>{
        data+=chunk
      })
      req.on('end',()=>{
        console.log(data);
      })
    }
}