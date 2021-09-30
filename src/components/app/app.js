import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {



    state = {
        data: [
            {label: "Going to learn React", important: false, id: 1},
            {label: "The best framework ever", important: true, id: "234"},
            {label: "I really into learning React", important: false, id: 3},
            {label: "Aslo i have just created my first React app", important: true, id: 4},
        ]
    }

    deleteItem(id){
        console.log(id);
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

    render(){
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={id => this.deleteItem(id)}/>
                <PostAddForm/>
            </div>
        )
    }
}