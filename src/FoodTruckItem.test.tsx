/**
 * @jest-environment jsdom
 */

import React from 'react';
import FoodTruckItem from './FoodTruckItem';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('FoodTruckItems', () => {

    describe('render', () => {
        it('should render correctly', () => {
            const item = { locationDescription: 'Los Angels', status: 'APPROVED' };
            render(<FoodTruckItem item={item}/>);
            expect(screen.getByText('Location')).toBeInTheDocument();
        });

        it('status', () => {
            const item = { locationDescription: ': Los Angels', status: 'APPROVED' };
            render(<FoodTruckItem item={item}/>);
            expect(screen.getByText('Status')).toBeInTheDocument();
        });
    });

});