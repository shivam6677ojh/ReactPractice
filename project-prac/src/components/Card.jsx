export default function Cards({company}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <div
                className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all"
            >
                <h2 className="text-xl text-red-500 font-semibold mb-2">{company}</h2>

                <p className="text-gray-700">
                    <span className="font-medium">Card Holder:</span> 
                </p>

                <p className="text-gray-700">
                    <span className="font-medium">Card Number:</span> 
                </p>

                <p className="text-gray-700">
                    <span className="font-medium">Expiry:</span> 
                </p>
            </div>
        </div>
    );
}
