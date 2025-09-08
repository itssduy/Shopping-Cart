import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Navbar from "../components/shared/Navbar";


describe('Navbar Component Works', ()=>{
    it('Navbar Component Loads', ()=>{
        render(<Navbar />)

        const nav = screen.getByRole('navigation')
        expect(nav).toBeInTheDocument();
    })
})