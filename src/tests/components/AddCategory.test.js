import React from 'react';
import '@testing-library/jest-dom';


import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"


describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        
    });

    test('Debe cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target: {value}});

        expect(wrapper.find('p').text().trim()).toBe(value);
        
    });
    
    test('No debe de postear la información con submit', () => {

        wrapper.find('form').simulate('Submit', {preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
        
    });
    
    test('Debe llamar el setCategories y limpiar la caja de texto', () => {

        //1. simular el inputChange
        //2. simular el submit
        //3. setCategories se debe haber llamado
        //4. el valor del input debe ser ''

        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target: {value}});

        wrapper.find('form').simulate('Submit', {preventDefault(){} });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        
        expect(input.prop('value')).toBe('');


        
    })
    
    
    
});
