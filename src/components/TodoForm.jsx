import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import Swal from "sweetalert2";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [datetime, setDatetime] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !datetime) return;

    const selectedDate = new Date(datetime);
    const now = new Date();

    if (selectedDate < now) {
      Swal.fire("Erreur", "La date ne peut pas être dans le passé.", "error");
      return;
    }

    await addDoc(collection(db, "tasks"), {
      title,
      description,
      datetime,
      done,
      createdAt: serverTimestamp(),
    });

    setTitle("");
    setDescription("");
    setDatetime("");
    setDone(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Ajouter une tâche</h2>

      <div>
        <label className="block mb-1 font-medium">Titre</label>
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div>
        <label className="block mb-1 font-medium">Date & Heure</label>
        <input
          type="datetime-local"
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
        />
      </div>

      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={!done}
            onChange={() => setDone(false)}
          />
          En cours
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={done}
            onChange={() => setDone(true)}
          />
          Terminée
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Ajouter
      </button>
    </form>
  );
}
