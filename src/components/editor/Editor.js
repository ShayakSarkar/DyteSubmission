import React from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/theme/dracula.css';
import './Editor.css';

class Editor extends React.Component{
    constructor(props){ 
        super();
        this.state={
            value: ''
        };
    }
    changeHandler(editor,data,value){
        console.log(value);
    }
    render(){
        return <div className="Editor"
                style={{
                    position: 'relative',
                    left: this.props.left,
                    top: this.props.top,
                    height: this.props.height,
                    width: this.props.width
                }}
            >
            <div className="Heading"> {this.props.editorHeading || 'CODE WRITER'} </div>
            <ControlledEditor 
            value={this.props.value}
            onBeforeChange={(editor,data,value)=>{
                this.props.changeHandler(value);
            }}
            options={{
                lineWrapping: true,
                mode: this.props.mode,
                lint: true,
                lineNumbers: true,
                theme: 'dracula'
            }}
        ></ControlledEditor></div>
    }
}
export default Editor;