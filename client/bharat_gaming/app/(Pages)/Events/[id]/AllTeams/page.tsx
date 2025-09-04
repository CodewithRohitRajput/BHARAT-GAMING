import Navbar from "@/(Components)/Navbar/page";
import Footer from "@/(Components)/Footer/page";

// interface PageProps {
//   params: {

//     id: string;
//   };
// }

export default async function AllTeams({ params }: {params : Promise <{id : string} >}) {
  const { id } = await  params;

  const res = await fetch(`http://localhost:5000/team/${id}/AllTeams`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Teams Fetching failed");
  }

  const data = await res.json();
  const TeamsDetails = data.TeamsDetails || [];

  return (
    <div>
        <Navbar/>

    <div className="min-h-screen mt-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
            All Registered Teams
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {TeamsDetails.length > 0 ? (
          <>
            {/* Teams Count */}
            <div className="mb-8 text-center">
              <p className="text-lg text-gray-300">
                Total Teams:{" "}
                <span className="text-blue-400 font-semibold">
                  {TeamsDetails.length}
                </span>
              </p>
            </div>

            {/* Teams Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TeamsDetails.map((team: any, i: number) => (
                  <div
                  key={i}
                  className="bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 p-6"
                  >
                  {/* Team Header */}
                  <div className="border-b border-gray-700 pb-4 mb-4">
                    {/* <span> Team: </span>    */}
                    <div className="flex mb-2 ml-1 items-center gap-2">
                    <span className="text-gray-400 text-sm">Team:</span>
                    <h3 className="text-xl font-bold text-blue-400">
                      {team.teamname}
                    </h3>
                        </div>

                    <div className="flex items-center text-gray-300">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                          />
                      </svg>
                      <span className="text-sm">
                        Captain Game Id:{" "}
                        <span className="text-white font-medium">
                          {team.captain}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Team Stats */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Team Members</span>
                      <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {team.members?.length || 0}
                      </span>
                    </div>
                  </div>

                  {/* Members List */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Game IDs
                    </h4>
                    <div className="space-y-2 max-h-40">
                      {team.members?.map((member: any, j: number) => (
                          <div
                          key={j}
                          className="bg-gray-700 rounded px-3 py-2 text-sm text-gray-200 border-l-2 border-blue-500"
                        >
                          {member}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
            /* Empty State */
            <div className="text-center py-16">
            <div className="mb-6">
              <svg
                className="w-24 h-24 text-gray-600 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-400 mb-4">
              No Teams Registered Yet
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Be the first one to participate in this exciting gaming event!
              Register your team now and start your journey to victory.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Register Your Team
            </button>
          </div>
        )}
      </div>
        </div>
      <Footer/>
    </div>
  );
}
