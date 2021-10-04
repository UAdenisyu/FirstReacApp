import React, {Component} from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component{

    state = {
        text:''
    }

    onValueChange(e){
        this.setState({
            text: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });

    }

    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={e => this.onSubmit(e)}>
                <input
                    type="text"
                    placeholder="О чём вы хотите поделиться?"
                    className="form-control new-post-label"
                    onChange={e => this.onValueChange(e)}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить</button>
            </form>
        );
    }
}