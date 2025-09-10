import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Navbar from "../components/shared/Navbar";
import { MemoryRouter } from "react-router";


describe('Navbar Component Works', ()=>{

    beforeEach(()=>{
        render(
            <MemoryRouter>
                <Navbar/>
            </MemoryRouter>
        )
    })
    it('Navbar Component Loads', ()=>{
        const navbar = screen.getByRole('navigation')
        expect(navbar).toBeInTheDocument();
    })
    
    it('List Items Load', ()=>{
        
        const li = screen.queryAllByRole('listitem')

        expect(li).toHaveLength(3);
    })
})