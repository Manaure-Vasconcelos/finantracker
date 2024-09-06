function BalanceChart() {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-gray-400 mb-4">Balance mensual</h2>
      <div className="flex justify-between items-center mb-4">
        <p>Ingresos</p>
        <p className="text-green-400">R$110.00</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p>Gastos</p>
        <p className="text-red-400">R$10.00</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Balance</p>
        <p>R$100.00</p>
      </div>
    </div>
  );
}

export default BalanceChart;