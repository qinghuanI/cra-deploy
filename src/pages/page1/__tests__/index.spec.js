import React from "react";
import { render, screen } from "@testing-library/react";
import Page1 from "../index";

// 测试库统称为 test runner

/**
 * react 组件的测试
 * 使用 @testing-library/react 库
 *
 * 组件测试重在测试显示逻辑
 * 1、组件需要显示的内容
 * 2、组件交互后,应该显示的内容
 */

describe("test Page1 component", () => {
  it("should render Page1 component", () => {
    render(<Page1 />);

    const message = "this is Page1 component!";

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
