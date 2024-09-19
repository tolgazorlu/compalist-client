const Projects = () => {
  return (
    <>
      {/* Card Section */}
      <div className="mx-auto pt-10">
        {/* Grid */}
        <h1 className="text-md font-bold uppercase tracking-wide text-gray-700">
          Projeler
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-2">
          {/* Card */}
          <div className="flex flex-col border rounded-xl shadow">
            <div className="p-4 md:p-5">
              <div className="mt-2 text-sm text-gray-500 flex justify-between">
                <span>Proje İsmi</span>
                <span className="font-bold">Compalist</span>
              </div>
              <div className="mt-2 text-sm text-gray-500 flex justify-between">
                <span>Toplam Süre</span>
                <span className="font-bold">6s 26d</span>
              </div>
              <div className="mt-2 text-sm text-gray-500 flex justify-between">
                <span>Gün</span>
                <span className="font-bold">13 gün</span>
              </div>
              <div className="mt-2 text-sm text-gray-500 flex justify-between">
                <span>Durum</span>
                <span className="font-bold text-green-500">Tamamlandı</span>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Section */}
    </>
  );
};

export default Projects;
