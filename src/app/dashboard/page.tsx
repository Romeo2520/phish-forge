import { readCaptures } from "@/lib/store";

export const dynamic = "force-dynamic";

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString("fr-FR", {
      dateStyle: "short",
      timeStyle: "medium",
    });
  } catch {
    return iso;
  }
}

export default async function DashboardPage() {
  const captures = await readCaptures();
  const total = captures.length;
  const uniqueIdentifiers = new Set(
    captures.map((c) => c.identifier.toLowerCase())
  ).size;
  const sorted = [...captures].sort((a, b) =>
    b.submittedAt.localeCompare(a.submittedAt)
  );

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-wide text-amber-700 bg-amber-100 rounded-full px-3 py-1 mb-3">
            Usage interne autorisé uniquement
          </span>
          <h1 className="text-2xl font-bold text-slate-800">
            Tableau de bord — Simulation de phishing
          </h1>
          <p className="text-slate-500 mt-1">
            Identifiants saisis par les participants pendant la campagne.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <p className="text-sm text-slate-500">Soumissions totales</p>
            <p className="text-3xl font-bold text-slate-800 mt-1">{total}</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <p className="text-sm text-slate-500">
              Collaborateurs distincts touchés
            </p>
            <p className="text-3xl font-bold text-slate-800 mt-1">
              {uniqueIdentifiers}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4">
            <h2 className="font-semibold text-slate-800">
              Identifiants récupérés
            </h2>
            <form action="/api/reset" method="POST">
              <button
                type="submit"
                className="text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Réinitialiser
              </button>
            </form>
          </div>

          {sorted.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <p className="text-slate-400">
                Aucune soumission pour l&apos;instant.
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Partagez le lien de la campagne pour démarrer la simulation.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500 border-b border-slate-200">
                    <th className="px-6 py-3 font-medium">Identifiant</th>
                    <th className="px-6 py-3 font-medium">Mot de passe</th>
                    <th className="px-6 py-3 font-medium">Jeton</th>
                    <th className="px-6 py-3 font-medium">Date</th>
                    <th className="px-6 py-3 font-medium">IP</th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((c) => (
                    <tr
                      key={c.id}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                    >
                      <td className="px-6 py-3 font-medium text-slate-800">
                        {c.identifier || "—"}
                      </td>
                      <td className="px-6 py-3 font-mono text-slate-600">
                        {c.password || "—"}
                      </td>
                      <td className="px-6 py-3 text-slate-500">
                        {c.token || "—"}
                      </td>
                      <td className="px-6 py-3 text-slate-500">
                        {formatDate(c.submittedAt)}
                      </td>
                      <td className="px-6 py-3 text-slate-500">{c.ip || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
