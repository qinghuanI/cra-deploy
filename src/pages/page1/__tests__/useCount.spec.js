import { renderHook, act } from "@testing-library/react-hooks";
import { useCount } from "../useCount";

/**
 * @testing-library/react-hooks 用来测自定义 hooks
 * @testing-library/react 用来测 react 组件
 *
 * 在自定义 hooks 里有下面这些内容
 *
 * 状态(变量)
 * 方法(更改状态的方法)
 *  同步方法
 *  异步方法
 *
 * 主要测执行方法会,状态的更改是否符合预期值
 */

describe("test useCount hook", () => {
  it("should return count as 0", () => {
    const { result } = renderHook(() => useCount());

    expect(result.current.count).toBe(0);
    expect(typeof result.current.add).toBe("function");
  });

  it("when click add button, count should add 1", () => {
    const { result } = renderHook(() => useCount());

    act(() => {
      result.current.add();
    });

    expect(result.current.count).toBe(1);
  });

  it("when initial value is 9000", () => {
    const { result } = renderHook(() => useCount(9000));

    act(() => {
      result.current.add();
    });

    expect(result.current.count).toBe(9001);
  });

  it("should reset counter to updated initial value", () => {
    let initialValue = 0;
    const { result, rerender } = renderHook(() => useCount(initialValue));

    initialValue = 10;
    rerender();

    act(() => {
      result.current.reset();
    });

    expect(result.current.count).toBe(10);
  });

  it("should reset counter to updated initial value2", () => {
    const { result, rerender } = renderHook(({ initialValue }) => useCount(initialValue), {
      initialProps: { initialValue: 0 },
    });

    rerender({ initialValue: 10 });

    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(10);
  });
});
