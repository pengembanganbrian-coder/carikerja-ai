"use client";

import { useEffect, useState } from "react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  source: string;
  sourceUrl: string;
};

export default function SaveJobButton({ job }: { job: Job }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const storedJobs = localStorage.getItem("savedJobs");
    const currentJobs: Job[] = storedJobs ? JSON.parse(storedJobs) : [];
    setIsSaved(currentJobs.some((item) => item.id === job.id));
  }, [job.id]);

  function toggleSaveJob() {
    const storedJobs = localStorage.getItem("savedJobs");
    const currentJobs: Job[] = storedJobs ? JSON.parse(storedJobs) : [];

    const alreadySaved = currentJobs.some((item) => item.id === job.id);

    if (alreadySaved) {
      const updatedJobs = currentJobs.filter((item) => item.id !== job.id);
      localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
      setIsSaved(false);
      return;
    }

    const updatedJobs = [...currentJobs, job];
    localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
    setIsSaved(true);
  }

  return (
    <button
      onClick={toggleSaveJob}
      className={
        isSaved
          ? "rounded-xl border border-blue-700 bg-blue-50 px-6 py-3 text-center font-semibold text-blue-700 hover:bg-blue-100"
          : "rounded-xl border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
      }
    >
      {isSaved ? "Tersimpan" : "Simpan Lowongan"}
    </button>
  );
}
