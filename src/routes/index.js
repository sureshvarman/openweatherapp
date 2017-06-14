/**
 * Defines route in application and corresponding components
 */
import { Route }   from 'react-router';
import React       from 'react';
import CoreLayout  from 'layouts/CoreLayout';
import HomeView    from 'views/HomeView.react';

export default (
    <Route component={CoreLayout}>
        <Route name='home' path='/' component={HomeView} />
    </Route>
);
