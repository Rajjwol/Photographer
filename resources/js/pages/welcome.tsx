
import AppLayout from "@/layouts/AppLayout";

export default function Welcome() {
    return (
        <>

    <AppLayout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome to your dashboard. Manage your portfolio and projects here.
        </p>
      </div>
    </AppLayout>

        </>
    );
}
