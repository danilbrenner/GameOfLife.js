import React from 'react';
import { Provider } from "react-redux";
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import OutGameControls from './OutGameControls';
import { START_GAME, CLEAR_UNIVERSE, MAKE_STEP } from '../actions/types';

Enzyme.configure({ adapter: new Adapter() });

describe('components', () => {
    describe('OutGameControls', () => {
        
        let wrapper;

        beforeEach(() => {
            const mockStore = configureStore();
            const store = mockStore({});
            wrapper = mount(<Provider store={store}><OutGameControls /></Provider>);
        });
        
        it('Play button should start game', () => {
            const button = wrapper.find('Button#play-button');
            expect(button.props().onClick()).toEqual({ type: START_GAME });
        });
        
        it('Clear button should clear universe', () => {
            const button = wrapper.find('Button#clear-button');
            expect(button.props().onClick()).toEqual({ type: CLEAR_UNIVERSE });
        });

        it('Step button should make step', () => {
            const button = wrapper.find('Button#step-button');
            expect(button.props().onClick()).toEqual({ type: MAKE_STEP });
        });
    })
})