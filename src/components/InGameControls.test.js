import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import InGameControls from './InGameControls';
import { STOP_GAME } from '../actions/types';

Enzyme.configure({ adapter: new Adapter() });

describe('components', () => {
    describe('InGameControls', () => {
        it('stop game button should call stopGame action creator', () => {
            const mockStore = configureStore();
            const store = mockStore({});
            const wrapper = mount(<Provider store={store}><InGameControls /></Provider>);
            const button = wrapper.find('Button');
            expect(button.props().onClick()).toEqual({ type: STOP_GAME });
        });
    });
});