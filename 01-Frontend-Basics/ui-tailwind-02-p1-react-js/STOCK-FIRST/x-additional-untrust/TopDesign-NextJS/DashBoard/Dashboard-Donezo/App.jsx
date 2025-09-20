// app/dashboard/page.jsx
import Sidebar from "./Sidebar";
import Header from "./Header";
// import DashboardCards from "./DashboardCards";
import TeamSection from "./TeamSection";
import TimeTrackerCard from "./TimeTrackerCard";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="p-6 overflow-y-auto max-w-full">
          {/* <section className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-6">
            <DashboardCards />
          </section> */}

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <TeamSection />
            </div>
            <TimeTrackerCard />
          </section>
        </main>
      </div>
    </div>
  );
}
