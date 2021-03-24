import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen';
import HackerNewsLoader from 'components/Cargando/NewLoader';


const ListOfCategories = React.lazy( () => 
    import('./ListOfCategories')
);

export default function LazyCategories() {
    const {isNearScreen, fromRef} = useNearScreen({distance: '100px'});
    // console.log(isNearScreen);

    return <div ref={fromRef}>
        <Suspense fallback={<HackerNewsLoader />}>
            {isNearScreen ? <ListOfCategories /> : HackerNewsLoader}
        </Suspense>
    </div>
        ;
}