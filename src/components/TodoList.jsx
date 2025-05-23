import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import TodoItem from "./TodoItem";
import { AnimatePresence } from "framer-motion";

export default function TodoList({ done }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "tasks"),
      where("done", "==", done),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTasks(data);
    },
     (error) => {
    console.error("Erreur Firestore:", error);
     }
  );

    return () => unsubscribe();
  }, [done]);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md max-h-[calc(100vh-2rem)] overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">
        {done ? "✅ Tâches terminées" : "🕒 Tâches en cours"}
      </h2>
      <AnimatePresence>
        {tasks.map(task => (
          <TodoItem key={task.id} task={task} />
        ))}
      </AnimatePresence>
    </div>
  );
}
