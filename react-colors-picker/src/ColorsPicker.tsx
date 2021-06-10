import React  from 'react';


export interface IColorsPicker {
    colors: any;
    handle: any;
    borderRadius?: string;
    width?: string;
    height?: string;
    marginRight?: string;
    marginBottom?: string;
    border?: string;
    transformOnHover?: boolean;
}

const colorsWrapper = {
    display: 'flex',
    alignItems: 'center'
  };

const circleColorStyle = {
    display: 'inline-block',
};


function hoverHandleOn(id: string) {
    var myPara = document.getElementById(id);
    if(myPara){
        myPara.style.transform='scale(1.1)';
    }
}

function hoverHandleOff(id: string) {
    var myPara = document.getElementById(id);
    if(myPara){
        myPara.style.transform='none';
    }
}

export function ColorsPicker({
    colors,
    handle,
    borderRadius = "20px",
    border="1px solid black",
    width="28px", 
    height="28px", 
    marginRight="10px", 
    marginBottom="4px",
    transformOnHover=true} : IColorsPicker) {


        return(
            <div style={colorsWrapper}>
                
                {colors.map((c:any,index:number) => {
                    return(<div className='SingleColor' style={Object.assign({
                                                    backgroundColor: c.value, 
                                                    borderRadius: borderRadius,
                                                    border: border,
                                                    width: width,
                                                    height: height,
                                                    marginRight: marginRight,
                                                    marginBottom: marginBottom,
                                                    
                                                    },
                                                    circleColorStyle) } 
                                key={index.toString()}
                                id={index.toString()}
                                onClick={() =>{handle(c)}}
                                onMouseEnter={() => transformOnHover ? hoverHandleOn(index.toString()) : ''}
                                onMouseLeave={() => transformOnHover ? hoverHandleOff(index.toString()) : ''}
                                >

                                </div>)
                })}
            
            </div>


        )
    

        
    
}