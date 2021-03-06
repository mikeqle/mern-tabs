import React, { useState } from 'react';

const Tab = (props) => {
    const [ selected, setSelected ] = useState(0);
    
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

    const selectedStyle = {
        backgroundColor: "black",
        color: "white",
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
    
    const onClickHandler = (e, selected) => {
        setSelected(selected);

        // last item: change color of button when clicked on to black
    }

    return(
        <div>
            <div id="tab-container" style={ tabContainerStyle }>
                {
                    props.data.map( (item, index) => { 
                        return <button key={ index } style={ index===selected ? selectedStyle  : tabStyle } onClick={ (e) => onClickHandler(e, index) }>{ item.header }</button>
                    })
                }
            </div>
            <p style={ contentStyle }>
                { props.data[selected].content }
            </p>
        </div>
    );
}

export default Tab;