import React from 'react';


export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption =(e) => {
        e.preventDefault();
        //console.log(testing)
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)
        /*
        this.setState(() =>{
            return{error}
        })
        //to powyżej jest to samo co:
        this.setState(()=>({error}))
        */
        this.setState(()=>({error}))
        if(!error){
            e.target.elements.option.value = "";
        }
    }
    render(){
        return (
            <div>
            {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
            <form className='add-option' onSubmit={this.handleAddOption}>
            <input className='add-option__input' type="text" name="option"></input>
            <button className='button'>Add Value</button>
            </form>
            </div>
        )
    };
}