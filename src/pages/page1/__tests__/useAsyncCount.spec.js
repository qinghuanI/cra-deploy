import { renderHook } from "@testing-library/react-hooks";
import { useAsyncCount } from "../useAsyncCount";

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
  it("when setCount in useEffect hook", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAsyncCount());

    expect(result.current.count).toBe(0);

    await waitForNextUpdate({ timeout: 2000 });

    expect(result.current.count).toBe(100);
  });
});
