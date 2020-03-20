import React from 'react';

function Footer(){
    return(
        <div className="bg-dark light align-middle" style={{height:'40px'}}>
            <p className="text-xs-center text-white align-baseline "> 
                <span className=" align-middle">
                &copy; {new Date().getFullYear()} City Guide App - All rights Reserved
                </span>
                    
            </p>
         </div>
    )
}

export default Footer;