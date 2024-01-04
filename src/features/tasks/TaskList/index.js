import { selectTasks, toggleTaskDone } from "../tasksSlice";
import { StyledButtonTask, StyledItem, StyledList, StyledContent } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const TaskList = ({ removeTask }) => {

    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <StyledList>
            {tasks.map(task => (
                <StyledItem
                    $hidden={task.done && hideDone}
                    key={task.id}
                >
                    <StyledButtonTask
                        $toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? " ✓ " : ""}
                    </StyledButtonTask>
                    <StyledContent
                        $done={task.done}
                    >
                        {task.content}
                    </StyledContent>
                    <StyledButtonTask
                        $remove
                        onClick={() => removeTask(task.id)}
                    >
                        🗑
                    </StyledButtonTask>
                </StyledItem>
            ))}
        </StyledList >
    );
};


export default TaskList;