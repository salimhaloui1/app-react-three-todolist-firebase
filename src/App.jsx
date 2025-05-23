import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


export default function App() {
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 text-gray-900 dark:text-white">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Formulaire à gauche */}
        <div className="sticky top-4 h-fit md:col-span-1">
          <TodoForm />
        </div>

        {/* Listes des tâches en cours et terminées */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <TodoList done={false} />
          <TodoList done={true} />
        </div>
      </div>
    </div>
  );
}
