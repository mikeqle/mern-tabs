import React, { useState } from 'react';

const Tab = (props) => {
    const [ index, setIndex ] = useState(0);
    
    const tabContainerStyle = {
        display: "flex",
        justifyContent: "flex-start",
        width: "420px",
        margin: "10px auto"
    }
    
    const tabStyle = {
        backgroundColor: "white",
        border: "1px solid #DFDFDF",
        height: "30px",
        width: "80px",
        fontSize: "16px",
        marginRight: "10px"
    }

    const contentStyle = {
        padding: "10px",
        width: "400px",
        height: "200px",
        border: "1px solid #DFDFDF",
        margin: "10px auto",
        textAlign: "left"
    }
    
    const onClickHandler = (e, index) => {
        setIndex(index);

        // last item: change color of button when clicked on to black
    }

    return(
        <div>
            <div id="tab-container" style={ tabContainerStyle }>
                {
                    props.data.map( (item, index) => { 
                        return <button style={ tabStyle } onClick={ (e) => onClickHandler(e, index) }>{ item.header }</button>
                    })
                }
            </div>
            <p style={ contentStyle }>
                { props.data[index].content }
            </p>
        </div>
    );
}

export default Tab;