"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ResponsiveLine } from "@nivo/line"
import {SVGProps} from 'react';

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
interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}



function BellIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
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
  );
}

function CalendarIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
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
  );
}

function ChevronDownIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
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
  );
}

function DotIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}




function ExpandIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
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
      <path d="M21 15v4a2 2 0 0 1-2 2h-4" />
      <path d="m21 21-6-6" />
      <path d="M3 9V5a2 2 0 0 1 2-2h4" />
      <path d="m3 3 6 6" />
    </svg>
  );
}

function LayoutDashboardIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
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
  );
}

function LineChart({ className, ...props }: IconProps) {
  return (
    <div className={className} {...props}>
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
  );
}

function MenuIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
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
      <path d="M4 12h16" />
      <path d="M4 6h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function MessageCircleIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
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
      <path d="M21 11.5a8.38 8.38 0 0 1-1.2 4.4 8.5 8.5 0 0 1-7.5 4.6 8.38 8.38 0 0 1-4.4-1.2L3 21l1.7-4.4A8.38 8.38 0 0 1 3 12a8.5 8.5 0 0 1 4.6-7.5 8.5 8.5 0 0 1 12 7.5Z" />
    </svg>
  );
}

function PinIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
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
      <path d="m17.7 6.3-11.4 11.4a2 2 0 1 0 2.8 2.8L20.5 9" />
      <path d="m8 2 4 4-5 5-3-1-2 2 3 3-4 4" />
      <path d="m20 7 2 2-4 4" />
    </svg>
  );
}

function PowerIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
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
      <path d="M18.36 18.37a9 9 0 1 0-12.73 0" />
    </svg>
  );
}

function RecycleIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
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
      <path d="M21 11h-5l1-7M21 11l-9 7-4-4M21 11l-9-7-1.5 5M7.9 15.1 4 21m-.9-6.1 4.8-3.5" />
      <path d="M8.2 7.2 3 6l2.1 5.1" />
    </svg>
  );
}

function SearchIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
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
  );
}

function SettingsIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
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
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1a2.1 2.1 0 1 1-2.9 3l-.1-.1a1.8 1.8 0 0 0-2 0h-.2a1.8 1.8 0 0 0-1 .5 1.8 1.8 0 0 0-.5 1v.2a2.1 2.1 0 0 1-4.1 0v-.2a1.8 1.8 0 0 0-1.5-1.5h-.2a1.8 1.8 0 0 0-1-.5 1.8 1.8 0 0 0-2.1.4l-.1.1a2.1 2.1 0 0 1-3-2.9l.1-.1a1.8 1.8 0 0 0 0-2v-.2a1.8 1.8 0 0 0-.5-1 1.8 1.8 0 0 0-1.5-.5h-.2a2.1 2.1 0 1 1 0-4.1h.2a1.8 1.8 0 0 0 1.5-1.5v-.2a1.8 1.8 0 0 0-.4-2l-.1-.1a2.1 2.1 0 0 1 2.9-3l.1.1a1.8 1.8 0 0 0 2 0h.2a1.8 1.8 0 0 0 1-.5 1.8 1.8 0 0 0 .5-1v-.2a2.1 2.1 0 1 1 4.1 0v.2a1.8 1.8 0 0 0 1.5 1.5h.2a1.8 1.8 0 0 0 1 .5 1.8 1.8 0 0 0 2.1-.4l.1-.1a2.1 2.1 0 1 1 3 2.9l-.1.1a1.8 1.8 0 0 0 0 2v.2a1.8 1.8 0 0 0 .5 1h.2a1.8 1.8 0 0 0 1.5 1.5h.2a2.1 2.1 0 1 1 0 4.1h-.2a1.8 1.8 0 0 0-1.5 1.5v.2z" />
    </svg>
  );
}

function UserIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
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
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </svg>
  );
}