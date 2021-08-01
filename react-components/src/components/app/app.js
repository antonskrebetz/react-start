import React from 'react';
import './app.scss'
import SearchPanel from '../search-panel/search-panel';
import CardsList from '../cards-list/cards-list';

const App = () => {
    return (
        <div className="container">
            <h1 className="h1">React. Components</h1>
            <SearchPanel />
            <CardsList />
        </div>
    )
}

export default App;