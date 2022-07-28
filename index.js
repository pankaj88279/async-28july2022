async function MyClass(){
    let po =new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({
                msg:"hello good night"
            });
        },2000);
        
    });
    let x = await po;
    console.log(x.msg);


}

MyClass();
