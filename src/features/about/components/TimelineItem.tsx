import type { TimelineItemProps } from "./types";

function TimelineItem({ item, index }: TimelineItemProps) {
  const Icon = item.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-start mb-4 md:mb-4 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-white border-2 border-gray-600 rounded-full md:transform md:-translate-x-2 z-10 shadow-md"></div>

      {/* Content */}
      <div
        className={`ml-16 md:ml-0 md:w-1/2 ${
          isEven ? "md:pr-12 md:text-right" : "md:pl-12"
        }`}
      >
        <div className="group bg-transparent p-5 rounded-lg transition-opacity duration-300">
          <div
            className={`flex items-center gap-3 mb-3 ${
              isEven ? "md:justify-end" : ""
            }`}
          >
            <div
              className={`p-2.5 rounded-lg bg-blue-600 text-white shadow-sm ${
                isEven ? "md:order-2" : ""
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <span
              className={`text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full ${
                isEven ? "md:order-1" : ""
              }`}
            >
              {item.date}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-200">
            {item.title}
          </h3>
          <p className="text-base text-gray-600 leading-relaxed">
            {item.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
