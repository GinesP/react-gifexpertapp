import React from 'react';     
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItgem />', () => {

    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('debe de mostrar el componente correctament ', () => {

        expect(wrapper).toMatchSnapshot();
        
    });

    test('debe de tener un párrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe( title );

    });

    test('debe de tener la imagen igual a url y alt de los props', () => {

        const img = wrapper.find('img');
        // console.log( img.props().src );
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
        
    });

    test('debe tener animate_fadeIn', () => {

        const div = wrapper.find( 'div' );
        // console.log(div.prop('className'));
        const className = div.prop('className');
        expect( className.includes( 'animate__fadeIn' ) ).toBe( true );
        
    });
       
});
