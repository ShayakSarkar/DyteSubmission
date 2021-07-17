import React from 'react';
import Editor from '../editor/Editor';
import LiveView from '../live_view/LiveView';
import ReadSavePane from '../read_save_pane/ReadSavePane';

class CodeMaker extends React.Component{
    constructor(props){
        super();
        this.state={
            htmlCode: '',
            cssCode: '',
            jsCode: '',
            currentHtmlDoc: 'doc1',
            currentCssDoc: 'doc1',
            currentJsDoc: 'doc1'
        };
    }
    changeHtml(newHtml){
        this.setState({
            htmlCode: newHtml
        });
    }
    changeCss(newCss){
        this.setState({
            cssCode: newCss
        });
    }
    changeJs(newJs){
        this.setState({
            jsCode: newJs
        });
    }
    makeFinalCode(){
        return `<html>${this.state.htmlCode}<style>${this.state.cssCode}</style><script>function execute(){${this.state.jsCode}}</script></html>`;
    }
    changeCurrentHtmlDoc(event){
        console.log(event.target.innerHTML);
        this.setState({
            currentHtmlDoc: event.target.innerHTML,
            htmlCode: window.localStorage.getItem(event.target.innerHTML+'.html')
        });
    }
    changeCurrentCssDoc(event){
        console.log('current css doc changed');

        this.setState({
            currentCssDoc: event.target.innerHTML,
            cssCode: window.localStorage.getItem(event.target.innerHTML+'.css')
        });
    }
    changeCurrentJsDoc(event){
        console.log('current js doc changed');
        this.setState({
            currentJsDoc: event.target.innerHTML,
            jsCode: window.localStorage.getItem(event.target.innerHTML+'.js')
        });
    }
    saveAllDocs(){
        console.log(this.state.currentHtmlDoc);
        console.log(this.state.currentCssDoc);
        console.log(this.state.currentJsDoc);
        //return;
        window.localStorage.setItem(this.state.currentHtmlDoc+'.html',this.state.htmlCode);
        window.localStorage.setItem(this.state.currentCssDoc+'.css',this.state.cssCode);
        window.localStorage.setItem(this.state.currentJsDoc+'.js',this.state.jsCode);
    }
    removeDoc(name){
        for(var item of window.localStorage){
            if(item===name){
                window.localStorage.removeItem(name);
                return;
            }
        }
    }
    render(){
        return <div>
            <Editor mode='xml'
                editorHeading='HTML'
                width={500}
                height={300} 
                top={0}
                changeHandler={this.changeHtml.bind(this)}
                value={this.state.htmlCode}
            />
            <Editor mode="css"
                editorHeading="CSS"
                width={500}
                height={300} 
                top={30}
                changeHandler={this.changeCss.bind(this)}
                value={this.state.cssCode}
            />
            <Editor editorHeading="JS"
                mode="javascript"
                width={750}
                height={300} 
                top={-600} 
                left={510}
                changeHandler={this.changeJs.bind(this)}
                value={this.state.jsCode}
            />
            <LiveView outputCode={this.makeFinalCode.call(this)}
                jsCode={this.state.jsCode}>
            </LiveView>
            <ReadSavePane
                changeCurrentHtmlDoc={this.changeCurrentHtmlDoc.bind(this)}
                changeCurrentCssDoc={this.changeCurrentCssDoc.bind(this)}
                changeCurrentJsDoc={this.changeCurrentJsDoc.bind(this)}
            />
            <button style={{
                width: 500,
                height: 70,
                backgroundColor: 'black',
                color: 'white',
                position: 'relative',
                top: -1460,
                textAlign: 'center',
                fontSize: 'larger',
                cursor: 'pointer'
            }}
                onClick={this.saveAllDocs.bind(this)}
            >
                SAVE DOCS
            </button>
        </div>
    }
}

export default CodeMaker;