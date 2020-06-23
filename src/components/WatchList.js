import React from 'react';
import MyList from '../components/MyList';
import EmptyList from '../components/EmptyList';
import { useStoreContext } from '../utils/GlobalState';

const WatchList = () => {
    const [state] = useStoreContext();
    return (
        <div className="row mt-4">
            {
                state.watchList.length > 0 ? <MyList /> : <EmptyList />
            }
        </div>
    );
};

export default WatchList;