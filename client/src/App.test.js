import React from "react";
import * as rtl from "@testing-library/react";
import "jest-dom/extend-expect";
import App from "./App";

// test("Render players county that from Italy ", async () => {
//   expect.assertion(3);
//   const data = await functions.fetchUser();
//   expect(data.country).toEqual("Italy");
// });
describe("App", () => {
  it('renders "all about Italy players" text', () => {
    const wrapper = rtl.render(<App />);
    const players = wrapper.queryByText(/Italy/i);
  });
});

describe("App", () => {
  it("find word WorldCup", () => {
    const simulateDom = rtl.render(<App />);
    const h1 = simulateDom.queryByText(/WorldCup/i);
    console.log(h1.textContent);
  });
});

describe("App", () => {
  it("find the wordfetch ", () => {
    const simulateDom = rtl.render(<App />);
    const h1 = simulateDom.queryByText(/fetch/i);
    console.log(h1.textContent);
  });
});
