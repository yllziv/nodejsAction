console.log(process.pid) // ��ȡnode��pid
process.on("message",function(m){
    console.log("zi:",m);
})
process.send({message:"hello parent!"})
