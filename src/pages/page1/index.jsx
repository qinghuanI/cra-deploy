import { useObserver, useLocalStore } from "mobx-react";
import { useMount, useUnmount } from "react-use";
import { useCount } from "./useCount";
import { store } from "../../stores/page1Store";

export default function Page1() {
  const { count, add } = useCount();
  const localStore = useLocalStore(() => store);

  const handleClick = () => {
    add();
  };

  useMount(() => {
    localStore.getUsers();
  });

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
      <button onClick={localStore.addUser}>Add user</button>
      <p>user 总人数：{localStore.userCount}</p>
      <ul>
        {localStore.users.map(({ name }, _index) => (
          <li key={_index}>{name}</li>
        ))}
      </ul>
    </div>
  ));
}
