import React from 'react';
//import './LiveView.css';

class LiveView extends React.Component{
    constructor(props){
        super();
        this.iframeRef=React.createRef();
    }
    componentDidMount(){
        console.log(this.iframeRef.current);
        this.iframeRef.current.contentWindow.document.body.innerHTML=this.props.outputCode;
    }
    componentDidUpdate(){
        this.iframeRef.current.contentWindow.document.body.innerHTML=this.props.outputCode;
        try{
            this.iframeRef.current.contentWindow.eval(this.props.jsCode)
        }
        catch(e){
            console.log('invalid js');
        }
        // this.iframeRef.current.contentWindow.document.write(this.props.outputCode);
    }
    render(){
        console.log(this.props.outputCode);
        var iframeObj=<iframe className="LiveView" 
                style={{
                    position: 'relative',
                    width: this.props.width || 750,
                    height: this.props.height || 380,
                    top: this.props.top || -570,
                    left: this.props.left || 510,
                    backgroundColor: 'white'
                }}
                ref={this.iframeRef}>
            </iframe>;
        //this.iframeRef.current.contentWindow.document.write(this.props.outputCode);
        return iframeObj;
    }
}

export default LiveView;