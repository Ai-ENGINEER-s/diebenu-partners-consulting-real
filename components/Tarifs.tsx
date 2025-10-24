function Tarifs() {
  const destinations = [
    { name: 'Casablanca', standard: '2.600 €', premium: '3.200 €' },
    { name: 'Abidjan', standard: '2.600 €', premium: '3.200 €' },
    { name: 'Dakar', standard: '2.600 €', premium: '3.200 €' },
    { name: 'Ouagadougou', standard: '2.600 €', premium: '3.200 €' },
    { name: 'Dubaï', standard: '4.700 €', premium: '5.100 €' }
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Tarifs</h2>
        <p className="text-gray-600">Formation d'une semaine</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-10 shadow-xl border-2">
          <h3 className="text-3xl font-bold mb-8">Standard</h3>
          <div className="space-y-4">
            {destinations.map((dest) => (
              <div key={dest.name} className="flex justify-between p-4 bg-gray-50 rounded-xl">
                <span className="font-semibold">{dest.name}</span>
                <span className="font-bold text-red-600">{dest.standard}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-10 shadow-2xl text-white">
          <h3 className="text-3xl font-bold mb-8">Premium</h3>
          <div className="space-y-4">
            {destinations.map((dest) => (
              <div key={dest.name} className="flex justify-between p-4 bg-white/10 rounded-xl">
                <span className="font-semibold">{dest.name}</span>
                <span className="font-bold">{dest.premium}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}