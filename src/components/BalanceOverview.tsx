function BalanceOverview() {
  return (
    <div className="text-center mb-6">
      <p className="text-gray-400">Saldo actual en cuentas</p>
      <h1 className="text-3xl font-bold">R$548.02</h1>
      <div className="flex justify-around mt-4">
        <div className="flex items-center">
          <div className="text-green-400">↑</div>
          <p className="ml-2">R$110.00</p>
        </div>
        <div className="flex items-center">
          <div className="text-red-400">↓</div>
          <p className="ml-2">R$10.00</p>
        </div>
      </div>
    </div>
  );
}

export default BalanceOverview;