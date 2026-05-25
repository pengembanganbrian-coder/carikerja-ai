type RemotiveJob = {
  id: number;
  title: string;
  company_name: string;
  candidate_required_location: string;
  job_type: string;
  salary?: string;
  url: string;
  description?: string;
};

function cleanDescription(html?: string) {
  if (!html) return "Deskripsi lowongan tidak tersedia.";

  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function GET() {
  const response = await fetch("https://remotive.com/api/remote-jobs", {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return Response.json(
      { error: "Gagal mengambil data lowongan" },
      { status: 500 }
    );
  }

  const data: { jobs: RemotiveJob[] } = await response.json();

  const jobs = data.jobs.slice(0, 20).map((job) => ({
    id: job.id,
    title: job.title,
    company: job.company_name,
    location: job.candidate_required_location,
    type: job.job_type,
    salary: job.salary || "Tidak dicantumkan",
    source: "Remotive",
    sourceUrl: job.url,
    description: cleanDescription(job.description),
  }));

  return Response.json(jobs);
}
