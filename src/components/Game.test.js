import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import Game from './Game';

Enzyme.configure({ adapter: new Adapter() });

describe('components', () => {
    describe('Game', () => {
        it('should contain InGameControls when game is started', () => {
            const mockStore = configureStore();
            const store = mockStore({ isGameStarted: true });
            const wrapper = mount(<Provider store={store}><Game /></Provider>);
                        
            expect(wrapper.find('InGameControls').length).toBe(1);
            expect(wrapper.find('OutGameControls').length).toBe(0);
        });

        it('should contain OutGameControls when game is not started', () => {
            const mockStore = configureStore();
            const store = mockStore({ isGameStarted: false });
            const wrapper = mount(<Provider store={store}><Game /></Provider>);
                        
            expect(wrapper.find('InGameControls').length).toBe(0);
            expect(wrapper.find('OutGameControls').length).toBe(1);
        });
    });
});