import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import nextId from "react-id-generator";

import './app.css';

export default class App extends Component {

    state = {
        data: [
            {label: "Going to learn React", important: false, like: false, id: nextId()},
            {label: "The best framework ever", important: false, like: false, id: nextId()},
            {label: "I really into learning React", important: false, like: false, id: nextId()},
            {label: "Aslo i have just created my first React app", important: false, like: false, id: nextId()},
        ],
        term: '',
        filter: 'all'
    }

    deleteItem(id){
        // console.log(id);
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: nextId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            // console.log(newArr);
            return {
                data: newArr
            } 
        });
    }

    onToggleImportant(id){
        // console.log(`Important ${id}`);
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];//current post
            const newItem = {...old, important: !old.important}//перезаписываем свойство like

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    onToggleLiked(id){
        // console.log(`Liked ${id}`);
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];//current post
            const newItem = {...old, like: !old.like}//перезаписываем свойство like

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    searchPost(items, term){
        if (term.length === 0){
            return items;
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    }

    onUpdateSearch(term){
        this.setState({term});
    }
    
    filterPost(items, filter){
        if (filter === 'liked'){
            return items.filter(item => item.like);
        }
        else {
            return items;
        }

    }
    
    onFilterSelect(filter){
        this.setState({filter});
    }

    render(){

        const {data, term, filter} = this.state;

        const likedPostsAmount = data.filter(item => item.like).length;
        const allPostsAmount = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader
                    liked={likedPostsAmount}
                    all={allPostsAmount}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch={text => this.onUpdateSearch(text)}/>
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={filter => this.onFilterSelect(filter)}/>
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={id => this.deleteItem(id)}
                    onToggleImportant={id => this.onToggleImportant(id)}
                    onToggleLiked={id => this.onToggleLiked(id)}/>
                <PostAddForm
                    onAdd={body => this.addItem(body)}/>
            </div>
        )
    }
}