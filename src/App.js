import { useTasks } from "./useTasks";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Footer from "./Footer";
import Header from "./Header";
import { MainContainer } from "./Container/styled";



function App() {

  const { tasks,
    hideDone,
    toggleHideDone,
    removeTask,
    toggleTaskDone,
    markAllTasksCompleted,
    addNewTask,
    removeAllTasks,
  } = useTasks();

  return (
    <MainContainer>
      <Header title="Lista zadań"

      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            markAllTasksCompleted={markAllTasksCompleted}
            removeAllTasks={removeAllTasks}
          />
        }
      />
      <Footer />
    </MainContainer>
  );
}

export default App;