"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ResponsiveLine } from "@nivo/line"

export function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className={`flex min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <aside
        className={`w-64 bg-white border-r dark:bg-gray-800 dark:border-gray-700 ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex items-center justify-center h-16 border-b dark:border-gray-700">
          <img
            src="/placeholder.svg"
            alt="Acme Inc Logo"
            className="h-8 w-8"
            width="32"
            height="32"
            style={{ aspectRatio: "32/32", objectFit: "cover" }}
          />
          <span className="ml-2 text-xl font-bold dark:text-white">Vasitum</span>
        </div>
        <nav className="p-4">
          <div className="space-y-4">
            <div>
              <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">MAIN MENU</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-red-500 bg-red-100 rounded-md dark:text-red-400 dark:bg-red-900/20"
                  >
                    <LayoutDashboardIcon className="w-5 h-5" />
                    <span className="ml-3">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md dark:text-gray-400 dark:hover:bg-gray-700"
                  >
                    <RecycleIcon className="w-5 h-5" />
                    <span>Recruitment</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md dark:text-gray-400 dark:hover:bg-gray-700"
                  >
                    <CalendarIcon className="w-5 h-5" />
                    <span className="ml-3">Schedule</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md dark:text-gray-400 dark:hover:bg-gray-700"
                  >
                    <UserIcon className="w-5 h-5" />
                    <span className="ml-3">Employee</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md dark:text-gray-400 dark:hover:bg-gray-700"
                  >
                    <DotIcon className="w-5 h-5" />
                    <span className="ml-3">Department</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">OTHER</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md dark:text-gray-400 dark:hover:bg-gray-700"
                  >
                    <PowerIcon className="w-5 h-5" />
                    <span className="ml-3">Support</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md dark:text-gray-400 dark:hover:bg-gray-700"
                  >
                    <SettingsIcon className="w-5 h-5" />
                    <span className="ml-3">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 md:px-10 lg:px-16">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6">
          <div className="relative w-full md:w-1/3">
            <SearchIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-full border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <BellIcon className="w-6 h-6 text-gray-400 dark:text-gray-500" />
            <MessageCircleIcon className="w-6 h-6 text-gray-400 dark:text-gray-500" />
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="Admirra John" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <span className="font-medium dark:text-white">Admirra John</span>
              <ChevronDownIcon className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            </div>
            <div className="flex items-center">
              <Switch
                id="theme-switch"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="relative inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <span className="sr-only">Toggle theme</span>
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                    isDarkMode ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </Switch>
            </div>
            <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MenuIcon className="w-6 h-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </header>
        <section>
          <h1 className="text-2xl font-bold dark:text-white">Dashboard</h1>
          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-3 lg:grid-cols-4">
            <Card className="bg-[#FFF4E6] dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg font-medium dark:text-white">Available Position</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold dark:text-white">24</div>
                <p className="text-sm text-red-500 dark:text-red-400">4 Urgently needed</p>
              </CardContent>
            </Card>
            <Card className="bg-[#E6F7FF] dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg font-medium dark:text-white">Job Open</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold dark:text-white">10</div>
                <p className="text-sm text-blue-500 dark:text-blue-400">4 Active hiring</p>
              </CardContent>
            </Card>
            <Card className="bg-[#FDE6F2] dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg font-medium dark:text-white">New Employees</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold dark:text-white">24</div>
                <p className="text-sm text-pink-500 dark:text-pink-400">4 Department</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg font-medium dark:text-white">Total Employees</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold dark:text-white">216</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">120 Men</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">96 Women</p>
                <div className="flex items-center mt-2">
                  <LineChart className="w-full h-32" />
                  <Badge />
                </div>
              </CardContent>
            </Card>
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg font-medium dark:text-white">Talent Request</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold dark:text-white">16</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">6 Men</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">10 Women</p>
                <div className="flex items-center mt-2">
                  <LineChart className="w-full h-32" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#1E3A8A] text-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Recently Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">10.40 AM, Fri 10 Sept 2021</p>
                <h2 className="mt-2 text-xl font-semibold">You Posted a New Job</h2>
                <p className="mt-2 text-sm">
                  Kindly check the requirements and terms of work and make sure everything is right.
                </p>
                <p className="mt-2 text-sm">Today you makes 12 Activity</p>
                <Button variant="default" className="mt-4 bg-red-500 text-white">
                  See All Activity
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="dark:bg-gray-800">
              <CardHeader className="flex justify-between">
                <CardTitle className="text-lg font-medium dark:text-white">Announcement</CardTitle>
                <Button variant="outline" size="sm" className="dark:text-gray-400 dark:border-gray-700">
                  Today, 13 Sep 2021
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium dark:text-white">Outing schedule for every department</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">5 Minutes ago</p>
                    </div>
                    <PinIcon className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium dark:text-white">Meeting HR Department</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Yesterday, 12:30 PM</p>
                    </div>
                    <PinIcon className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium dark:text-white">
                        IT Department need two more talents for UX/UI Designer position
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">3 Days ago</p>
                    </div>
                    <PinIcon className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="dark:bg-gray-800">
              <CardHeader className="flex justify-between">
                <CardTitle className="text-lg font-medium dark:text-white">Upcoming Schedule</CardTitle>
                <Button variant="outline" size="sm" className="dark:text-gray-400 dark:border-gray-700">
                  Today, 13 Sep 2021
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium dark:text-white">Review candidate applications</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Today - 11.30 AM</p>
                    </div>
                    <ExpandIcon className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium dark:text-white">Interview with candidates</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Today - 10.30 AM</p>
                    </div>
                    <ExpandIcon className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium dark:text-white">
                        Short meeting with product designer from IT Department
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Today - 09.15 AM</p>
                    </div>
                    <ExpandIcon className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function DotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  )
}


function ExpandIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </svg>
  )
}


function LayoutDashboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  )
}


function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function PinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  )
}


function PowerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
}


function RecycleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
