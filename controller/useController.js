let message = "This is my message. ";
let longMessage = message.repeat(17).trim();
let data =[
     { name : "Michael Choi ",
      createdAt : "January 15th 2013",
       message : longMessage,   
     },
     { name : "Michael Choi ",
      createdAt : "January 23th 2013",
      message : longMessage,
     },
    { name : "Carry Whiteland",
      createdAt : "January 15th 2013",
      message : longMessage,
    },
    { name : "Carry Whiteland",
      createdAt : "January 1st 2013",
      message : longMessage,
    },
  ]
const homePage =(req, res) =>{
    
  res.render("homepage" , {data})
   
};  





module.exports = {
  homePage,
  
  
  
};
