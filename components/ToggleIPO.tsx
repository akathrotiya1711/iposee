"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, ExternalLink } from "lucide-react"
import Link from "next/link"

type IPOStatus = "open" | "upcoming" | "closed"
type IPOType = "mainboard" | "sme"

interface IPO {
  name: string
  type: IPOType
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
    type: "mainboard",
    gmp: 98,
    gmpPercent: 30.1,
    issuePrice: 326,
    openDate: "12 Feb",
    closeDate: "15 Feb",
    status: "open",
  },
  {
    name: "Stallion India Fluorochemicals",
    type: "mainboard",
    gmp: 36,
    gmpPercent: 42.4,
    issuePrice: 85,
    openDate: "10 Feb",
    closeDate: "14 Feb",
    status: "open",
  },
  {
    name: "ABC SME Industries",
    type: "sme",
    gmp: 12,
    gmpPercent: 18.2,
    issuePrice: 55,
    openDate: "20 Feb",
    closeDate: "23 Feb",
    status: "upcoming",
  },
  {
    name: "XYZ SME Tech",
    type: "sme",
    gmp: -5,
    gmpPercent: -6.5,
    issuePrice: 40,
    openDate: "12 Dec",
    closeDate: "14 Dec",
    status: "closed",
  },
]

export default function IpoTableWithToggle() {
  const [selected, setSelected] = useState<"mainboard" | "sme" | "both">("mainboard")

  const filteredData =
    selected === "both"
      ? ipoData
      : ipoData.filter((ipo) => ipo.type === selected)

  return (
    <section className="bg-white rounded-xl p-6 md:p-10 shadow-md max-w-7xl mx-auto mt-12 transition-all duration-300 hover:shadow-xl">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">

        <div className="flex items-center gap-2">
          <TrendingUp className="text-yellow-600" size={22} />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            IPO Listings
          </h2>
        </div>

        {/* Toggle Buttons */}
        <div className="flex gap-2">
          {["mainboard", "sme", "both"].map((type) => (
            <Button
              key={type}
              size="sm"
              onClick={() => setSelected(type as any)}
              className={
                selected === type
                  ? "bg-yellow-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-yellow-50"
              }
            >
              {type === "mainboard"
                ? "Mainboard"
                : type === "sme"
                ? "SME"
                : "Both"}
            </Button>
          ))}
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-yellow-50 text-gray-700 uppercase text-xs">
            <tr>
              <th className="text-left px-6 py-4">IPO Name</th>
              <th className="text-left px-6 py-4">Type</th>
              <th className="text-left px-6 py-4">GMP</th>
              <th className="text-left px-6 py-4">Issue Price</th>
              <th className="text-left px-6 py-4">Dates</th>
              <th className="text-left px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((ipo, index) => (
              <tr key={index} className="border-t hover:bg-yellow-50">
                <td className="px-6 py-4 font-medium">
                  <Link
                    href={`/ipo/${ipo.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-900 hover:text-yellow-600 transition-colors"
                  >
                    {ipo.name}
                  </Link>
                </td>

                <td className="px-6 py-4 capitalize text-gray-600">
                  {ipo.type}
                </td>

                <td className="px-6 py-4">
                  <div className="font-semibold">₹{ipo.gmp}</div>
                  <div
                    className={`text-xs ${
                      ipo.gmpPercent >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {ipo.gmpPercent >= 0 ? "+" : ""}
                    {ipo.gmpPercent}%
                  </div>
                </td>

                <td className="px-6 py-4">₹{ipo.issuePrice}</td>

                <td className="px-6 py-4">
                  {ipo.openDate} – {ipo.closeDate}
                </td>

                <td className="px-6 py-4">
                  <Badge className="bg-gray-100 text-gray-700 capitalize">
                    {ipo.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-4">
        {filteredData.map((ipo, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 shadow-sm hover:ring-2 hover:ring-yellow-300"
          >
            <div className="font-semibold mb-1">{ipo.name}</div>
            <div className="text-xs text-gray-500 mb-2 capitalize">
              {ipo.type}
            </div>
            <div className="text-sm">
              GMP: ₹{ipo.gmp}{" "}
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
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        Showing {filteredData.length} IPOs
      </div>
    </section>
  )
}
