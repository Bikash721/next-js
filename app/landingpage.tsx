import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const events = [
  {
    id: 1,
    title: "Induction Programme for BHM",
    location: "ISMT College Kathmandu",
    date: "June 01 2025",
    image: "/images/event-bhm.jpg", // update with actual image path
    description:
      "We welcome our new class of ambitious Hospitality Management students for the Induction programme ha...",
  },
  {
    id: 2,
    title: "Induction Programme for BSc IT",
    location: "ISMT College Kathmandu",
    date: "June 01 2025",
    image: "/images/event-bscit.jpg",
    description:
      "Join us on 1 June 2025 as we welcome our new BSc (Hons) Computer Systems Engineering students! A fre...",
  },
  {
    id: 3,
    title: "10th Mega Education Fair",
    location: "The Everest Hotel",
    date: "May 26 2025",
    image: "/images/event-fair.jpg",
    description:
      "We are thrilled to be a part of the 10th Mega Education Fair happening on 26th May 2025 at The Evere...",
  },
];

export default function EventsSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Browse Latest Events
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-1/2">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={500}
                  height={300}
                  className="rounded-xl object-cover w-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt />
                    {event.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-700">
                  {event.description}
                  <a href="#" className="text-blue-600 font-semibold ml-1 hover:underline">
                    READ MORE →
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
