import AccountCreation from "../components/AccountCreation";
import Login from "../components/Login";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center">Banca en Línea</h1>
        <AccountCreation />
        <div className="my-4 border-t border-gray-300" />
        <Login />
      </div>
    </div>
  );
}
