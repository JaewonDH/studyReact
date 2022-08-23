import { GetApi } from "view/study/reducer/GetApi";
const baseUrl = "https://jsonplaceholder.typicode.com/users";

const CustomHook = () => {
  const { dataInfo, getData, ACTION_STATUS } = GetApi(baseUrl);
  const getUserListView = () => {
    switch (dataInfo.status) {
      case ACTION_STATUS.ERROR:
        return <p>에러</p>;
      case ACTION_STATUS.SUCCESS:
        if (dataInfo.userList === undefined) {
          return "";
        }
        return dataInfo.userList.map((user) => {
          return (
            <p key={user.id}>
              {user.name}- {user.email}
            </p>
          );
        });

      case ACTION_STATUS.LOADING:
        return <p>로딩</p>;
      default:
        return "";
    }
  };

  return (
    <>
      {getUserListView()}
      <button
        onClick={() => {
          getData(baseUrl);
        }}
      >
        리프레쉬
      </button>
    </>
  );
};

export default CustomHook;
