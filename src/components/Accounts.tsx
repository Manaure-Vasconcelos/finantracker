function Accounts() {
  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-6">
      <h2 className="text-gray-400 mb-4">Cuentas</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            💸
          </div>
          <div className="ml-2">Other</div>
        </div>
        <p>R$448.02</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
            👤
          </div>
          <div className="ml-2">Pessoal</div>
        </div>
        <p>R$100.00</p>
      </div>
      <div className="text-right mt-4">
        <p>Total: R$548.02</p>
      </div>
    </div>
  );
}

export default Accounts;
