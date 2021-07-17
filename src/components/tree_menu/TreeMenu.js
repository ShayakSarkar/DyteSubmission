import React from 'react';

class TreeMenu extends React.Component{
    constructor(props){
        super();
    }
    render(){
        var docElm=<ul>{this.props.items.map(elm=>{return <li style={{cursor: 'pointer'}} onClick={this.props.changeCurrentDoc} key={elm}>{elm}</li>})}
            <li>
                <button onClick={this.props.addItem}>
                    add
                </button>
            </li>
        </ul>
        return <div
            style={{
                color: 'white'
            }}
        ><h3>{this.props.heading}</h3>{docElm}</div>;
    }
}
export default TreeMenu;