import Input from "../../Components/Core/Profile/Input";

export default function Profile() {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <Input/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <Input/>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Save Changes
              </button>
            </form>
          </div>
  
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Bidding Preferences</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Maximum Bid Limit</label>
                <Input/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Currency</label>
                <select
                  className="mt-1 block p-1 bg-white text-black w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  defaultValue="Rupees"
                >
                  <option value="USD">Rs</option>
                  <option value="EUR">USD</option>
                  <option value="GBP">EUR</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Update Preferences
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }