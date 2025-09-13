import { render } from "@testing-library/react";
import { beforeEach, describe, it } from "vitest";
import Home from "../components/pages/Home";

describe('Home Page Works', ()=>{
    beforeEach(()=>{
        render(<Home/>)
    })

    it('Home Page Loads', ()=>{
        
    })
})