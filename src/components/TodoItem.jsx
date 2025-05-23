import { motion } from "framer-motion";
import { FaTrash, FaCheck } from "react-icons/fa";
import Swal from "sweetalert2";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function TodoItem({ task }) {
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Supprimer cette tâche ?",
      text: "Cette action est irréversible !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !"
    });

    if (result.isConfirmed) {
      await deleteDoc(doc(db, "tasks", task.id));
      Swal.fire("Supprimé !", "La tâche a été supprimée.", "success");
    }
  };

  const handleToggleDone = async () => {
    if (task.done) return;
    await updateDoc(doc(db, "tasks", task.id), {
      done: true
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      layout
      className={`p-4 rounded-xl shadow-md mb-4 transition-colors ${
        task.done ? "bg-green-100 dark:bg-green-800" : "bg-white dark:bg-gray-700"
      }`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">{task.description}</p>
          <p className="text-xs text-gray-400 mt-1">
            {new Date(task.datetime).toLocaleString()}
          </p>
        </div>

        <div className="flex gap-3 items-center">
          {!task.done && (
            <button
              onClick={handleToggleDone}
              className="text-green-600 hover:text-green-800"
              title="Marquer comme terminé"
            >
              <FaCheck />
            </button>
          )}
          <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-800"
            title="Supprimer"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
