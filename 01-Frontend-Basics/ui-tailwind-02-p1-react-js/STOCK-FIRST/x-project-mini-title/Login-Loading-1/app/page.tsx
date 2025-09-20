"use client";
import LoginForm from "@/app/login/page";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center min-h-screen bg-blue-50">
        <LoginForm />
      </div>
    </main>
  );
}
