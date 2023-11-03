
import React from "react";
//component rednering
class MyComponent extends React.Component{
    constructor(props){
        super (props);
        this.state = {count : 0};
    }

HndlClk() {
    this.setState({
        count: this.state.count + 1
    });
}

render(){
    return(
        <div>
            <p>
                Count is : { this.state.count}
            </p>

            <button onClick={() => this.HndlClk()}> Increament </button>

        </div>
    );
}
}

export default MyComponent ;