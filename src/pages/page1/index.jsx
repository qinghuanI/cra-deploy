import { useCount } from "./useCount";
import { useObserver, useLocalStore } from "mobx-react";
import { store } from "../../stores/page1Store";
import { useUnmount } from "react-use";

export default function Page1() {
  const { count, add } = useCount();
  const localStore = useLocalStore(() => store);

  const handleClick = () => {
    add();
  };

  useUnmount(() => {
    localStore.reset();
  });

  return useObserver(() => (
    <div>
      <h2>this is Page1 component!</h2>
      <p>data from store: {localStore.num}</p>
      {count}
      <button onClick={handleClick}>click</button>
      <button onClick={localStore.setCount}>change name</button>
    </div>
  ));
}
