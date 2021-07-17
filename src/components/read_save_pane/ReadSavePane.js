import React from 'react';
import TreeMenu from '../tree_menu/TreeMenu';
//import './ReadSavePane.css';

class ReadSavePane extends React.Component{
    constructor(props){
        super();
        this.state={
            htmlDocs: ['doc1'],
            cssDocs: ['doc1'],
            jsDocs: ['doc1']
        };
    }
    addHtmlDoc(){
        console.log('adding html doc');
        var newDoc='doc'+(this.state.htmlDocs.length+1);
        var newArray=[]
        for(var i of this.state.htmlDocs){
            newArray.push(i);
        }
        newArray.push(newDoc);
        this.setState({
            htmlDocs: newArray
        });
    }
    addCssDoc(){
        console.log('adding css doc');
        var newDoc='doc'+(this.state.cssDocs.length+1);
        var newArray=[]
        for(var i of this.state.cssDocs){
            newArray.push(i);
        }
        newArray.push(newDoc);
        this.setState({
            cssDocs: newArray
        });
    }
    addJsDoc(){
        console.log('adding js doc');
        var newDoc='doc'+(this.state.jsDocs.length+1);
        var newArray=[]
        for(var i of this.state.jsDocs){
            newArray.push(i);
        }
        newArray.push(newDoc);
        this.setState({
            jsDocs: newArray
        });
    }
    render(){
        console.log(window.localStorage);
        return <div style={{
            backgroundColor: '#2c3252',
            height: 800,
            width: 200,
            position: 'relative',
            left: 1268,
            top: -1310
        }} 
        className="ReadSavePane">
            <TreeMenu
                heading="HTML"
                changeDoc={this.props.changeCurrentHtmlDoc}
                items={this.state.htmlDocs}
                addItem={this.addHtmlDoc.bind(this)}
                changeCurrentDoc={this.props.changeCurrentHtmlDoc}
            />
            <TreeMenu
                heading="CSS"
                changeDoc={this.props.changeCurrentCssDoc}
                items={this.state.cssDocs}
                addItem={this.addCssDoc.bind(this)}
                changeCurrentDoc={this.props.changeCurrentCssDoc}
            />
            <TreeMenu   
                heading="JS"
                changeDoc={this.props.changeCurrentJsDoc}
                items={this.state.jsDocs}
                addItem={this.addJsDoc.bind(this)}
                changeCurrentDoc={this.props.changeCurrentJsDoc}
            />
        </div>
    }
}

export default ReadSavePane;