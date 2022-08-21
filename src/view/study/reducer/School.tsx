import { useReducer, useState, useRef } from "react";

interface IPayload {
  id?: number;
  name?: string;
}

interface IStudentInfo {
  count: number;
  studentList: Array<IState>;
}
interface IAction {
  type: number;
  payload: IPayload;
}

interface IState {
  id: number;
  name: string;
  isHere: boolean;
}

const ACTION_TYPE = {
  ACTION_ADD_STUDENT: 1,
  ACTION_REMOVE_STUDENT: 2,
};

const InputStudent = ({
  onchange,
  onClick,
}: {
  onchange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <input onChange={onchange}></input>
      <button onClick={onClick}>추가</button>
    </>
  );
};

const StudentList = ({
  studentInfo,
  removeStudentEvent,
}: {
  studentInfo: IStudentInfo;
  removeStudentEvent: Function;
}): JSX.Element => {
  return (
    <>
      {studentInfo.studentList.map((student) => {
        return (
          <div key={student.id + ""}>
            <span>{student.name}</span>
            <button
              onClick={() => {
                removeStudentEvent(student.id);
              }}
            >
              제거
            </button>
          </div>
        );
      })}
    </>
  );
};

const reducer = (state: IStudentInfo, action: IAction): IStudentInfo => {
  switch (action.type) {
    case ACTION_TYPE.ACTION_ADD_STUDENT:
      return {
        count: state.studentList.length,
        studentList: [
          { id: action.payload.id!, name: action.payload.name!, isHere: false },
          ...state.studentList,
        ],
      };
    case ACTION_TYPE.ACTION_REMOVE_STUDENT:
      return {
        count: state.studentList.length - 1,
        studentList: state.studentList.filter((student) => {
          return student.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};

const School = () => {
  const [name, setName] = useState("");
  const [studentInfo, dispatch] = useReducer(reducer, {
    count: 0,
    studentList: [],
  });
  const stuendId = useRef(0);

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const addStudentEvent = () => {
    dispatch({
      type: ACTION_TYPE.ACTION_ADD_STUDENT,
      payload: {
        name,
        id: (stuendId.current += 1),
      },
    });
  };

  const removeStudentEvent = (id: number) => {
    dispatch({
      type: ACTION_TYPE.ACTION_REMOVE_STUDENT,
      payload: { id },
    });
  };

  return (
    <>
      <h2> 출석부</h2>
      <p>총 학생 수: {studentInfo.count}</p>
      <InputStudent
        onchange={onchange}
        onClick={addStudentEvent}
      ></InputStudent>
      <StudentList
        studentInfo={studentInfo}
        removeStudentEvent={removeStudentEvent}
      ></StudentList>
    </>
  );
};

export default School;
