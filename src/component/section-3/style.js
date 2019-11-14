import React from 'react'
export default()=>(
    <style js="true">{
        `
        .progress{
            height:25px;
            width:50%;
        }
       
        .cc{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top:3%;
        }
        .cc h1{
            font-size: 50px;
            color: #8b6ba3;
        }
        .box1{
        
            width: 260px;
            text-align: center;
            background:#8a1082;
            height: 150px;
            border-radius: 5px;
            transition: background 0.5s;
            transition-timing-function: ease-in-out;
        }
        .box1:hover{
            
            background-color: #8b6ba3;
        }
        .box1 p{
            
            font-size: 25px;
            padding-top: 23%;
            color: white;
        }
        .steps{
            color: #8b6ba3;
        }
        
        
        /* section 4 ends here */
        
        
  

        `
    }

    </style>
);