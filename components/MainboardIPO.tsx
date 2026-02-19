"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, ExternalLink } from "lucide-react"
import Link from "next/link"

type IPOStatus = "open" | "upcoming" | "closed"

interface IPO {
  name: string
  gmp: number
  gmpPercent: number
  issuePrice: number
  openDate: string
  closeDate: string
  status: IPOStatus
}

const ipoData: IPO[] = [
  {
    name: "Venus Pipes & Tubes",
    gmp: 98,
    gmpPercent: 30.1,
    issuePrice: 326,
    openDate: "12 Feb",
    closeDate: "15 Feb",
    status: "open",
  },
  {
    name: "Stallion India Fluorochemicals",
    gmp: 36,
    gmpPercent: 42.4,
    issuePrice: 85,
    openDate: "10 Feb",
    closeDate: "14 Feb",
    status: "open",
  },
  {
    name: "Abhinav Buildcon",
    gmp: 0,
    gmpPercent: 0,
    issuePrice: 176,
    openDate: "18 Feb",
    closeDate: "21 Feb",
    status: "upcoming",
  },
  {
    name: "Vishal Mega Mart",
    gmp: -10,
    gmpPercent: -12.8,
    issuePrice: 78,
    openDate: "12 Dec",
    closeDate: "14 Dec",
    status: "closed",
  },
]

export default function MainboardIpoTable() {
  return (
    // <section className="bg-white rounded-xl p-6 md:p-10 shadow-md max-w-7xl mx-auto mt-12 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
       <section className="bg-white rounded-xl p-6 md:p-10 shadow-md max-w-7xl mx-auto mt-12 transition-all duration-300 md:hover:shadow-xl md:hover:scale-[1.02]">

      {/* Header */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <TrendingUp className="text-yellow-600" size={22} />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Mainboard IPO
        </h2>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-yellow-50 text-gray-700 uppercase text-xs tracking-wide">
            <tr>
              <th className="text-left px-6 py-4">IPO Name</th>
              <th className="text-left px-6 py-4">GMP</th>
              <th className="text-left px-6 py-4">Issue Price</th>
              <th className="text-left px-6 py-4">Open & Close</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-left px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {ipoData.map((ipo, index) => (
              <tr
                key={index}
                className="border-t transition-all duration-200 hover:bg-yellow-50"
              >
               
                <td className="px-6 py-4 font-medium">
  <Link
    href={"/abc"}
    className="text-gray-900 hover:text-yellow-600 transition-colors duration-200"
  >
    {ipo.name}
  </Link>
</td>

                <td className="px-6 py-4">
                  <div className="font-semibold text-gray-900">
                    ₹{ipo.gmp}
                  </div>
                  <div
                    className={`text-xs font-medium ${
                      ipo.gmpPercent >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {ipo.gmpPercent >= 0 ? "+" : ""}
                    {ipo.gmpPercent}%
                  </div>
                </td>

                <td className="px-6 py-4 text-gray-800">
                  ₹{ipo.issuePrice}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {ipo.openDate} – {ipo.closeDate}
                </td>

                <td className="px-6 py-4">
                  {ipo.status === "open" && (
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      Open
                    </Badge>
                  )}
                  {ipo.status === "upcoming" && (
                    <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                      Upcoming
                    </Badge>
                  )}
                  {ipo.status === "closed" && (
                    <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-200">
                      Closed
                    </Badge>
                  )}
                </td>

                <td className="px-6 py-4">
                  {ipo.status === "open" && (
                    <Button className="bg-yellow-600 text-white hover:bg-yellow-700 transition-all duration-300 hover:scale-105">
                      Apply Now <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  )}

                  {ipo.status === "upcoming" && (
                    <Button
                      variant="outline"
                      className="hover:scale-105 transition-all duration-300"
                    >
                      View Details
                    </Button>
                  )}

                  {ipo.status === "closed" && (
                    <Button className="bg-gray-700 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                      Check Allotment
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {ipoData.map((ipo, index) => (
          <div
            key={index}
            style={{ zIndex: 9999 }}
            className=" relative border rounded-xl p-4 shadow-sm transition-all duration-300 md:hover:shadow-lg md:hover:ring-2 md:hover:ring-yellow-300"

            // className="border rounded-xl p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-yellow-300"
          >

    
            <Link
  href="/abc"
  className="block font-semibold text-gray-900 mb-2"
>
  {ipo.name}
</Link>

            <div className="flex justify-between text-sm mb-1">
              <span>GMP</span>
              <span className="font-semibold">
                ₹{ipo.gmp}{" "}
                <span
                  className={`text-xs ${
                    ipo.gmpPercent >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  ({ipo.gmpPercent >= 0 ? "+" : ""}
                  {ipo.gmpPercent}%)
                </span>
              </span>
            </div>

            <div className="flex justify-between text-sm mb-1">
              <span>Issue Price</span>
              <span>₹{ipo.issuePrice}</span>
            </div>

            <div className="flex justify-between text-sm mb-3">
              <span>Dates</span>
              <span>
                {ipo.openDate} – {ipo.closeDate}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                {ipo.status === "open" && (
                  <Badge className="bg-green-100 text-green-700">
                    Open
                  </Badge>
                )}
                {ipo.status === "upcoming" && (
                  <Badge className="bg-yellow-100 text-yellow-700">
                    Upcoming
                  </Badge>
                )}
                {ipo.status === "closed" && (
                  <Badge className="bg-gray-200 text-gray-700">
                    Closed
                  </Badge>
                )}
              </div>

              {ipo.status === "open" && (
                <Button size="sm" className="bg-yellow-600 text-white">
                  Apply
                </Button>
              )}
              {ipo.status === "upcoming" && (
                <Button size="sm" variant="outline">
                  Details
                </Button>
              )}
              {ipo.status === "closed" && (
                <Button size="sm" className="bg-gray-700 text-white">
                  Allotment
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        Showing {ipoData.length} IPOs
      </div>
    </section>
  )
}
