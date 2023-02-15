import NewChat from "./NewChat"

function Sidebar() {
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div className="">
                {/* New Chat */}
                <NewChat />
                <div>
                    {/* Middle section */}
                </div>

                {/* Map through the Chartrows */}

            </div>
        </div>
    </div>
  )
}

export default Sidebar