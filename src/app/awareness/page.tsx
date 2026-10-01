import Link from "next/link";

export default function AwarenessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 px-4 py-12">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-amber-200 p-8 sm:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-xl bg-amber-500 flex items-center justify-center shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">
            This was a security test
          </h1>
        </div>

        <p className="text-slate-700 leading-relaxed mb-6">
          You just entered your credentials on a{" "}
          <strong>phishing simulation</strong> page run by your IT department.
          Don&apos;t worry: none of your real data has been compromised. The goal
          is to help you recognize this kind of attack.
        </p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 mb-6">
          <h2 className="font-semibold text-slate-800 mb-3">
            How to spot a phishing attempt?
          </h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="text-amber-600">•</span>
              Always check the exact address of a link before clicking.
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600">•</span>
              Be wary of messages that create a sense of urgency.
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600">•</span>
              Never enter your credentials from a link received by email without
              verifying it.
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600">•</span>
              When in doubt, contact the IT department directly.
            </li>
          </ul>
        </div>

        <p className="text-sm text-slate-500">
          Thank you for taking part. This awareness exercise helps strengthen the
          security of the whole organization.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back
          </Link>
        </div>
      </div>
    </main>
  );
}
